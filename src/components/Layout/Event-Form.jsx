import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import { BASE_URL } from "@/utils";
import { useNavigate } from "react-router-dom";

export default function EventForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate()

  const postEvent = async (eventData) => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) throw new Error("Authentication token is missing.");

      const categoryRes = await fetch(`${BASE_URL}/categories`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: eventData.category_name }),
      });

      if (!categoryRes.ok) {
        const error = await categoryRes.json();
        throw new Error(error.message || "Failed to resolve category.");
      }

      const category = await categoryRes.json();
      if (!category || !category.id) {
        throw new Error("Invalid category response from backend.");
      }

      const payload = {
        title: eventData.title,
        venue: eventData.venue,
        date: eventData.date,
        description: eventData.description,
        image: eventData.image,
        category_id: category.id,
      };

      const eventRes = await fetch(`${BASE_URL}/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await eventRes.json();
      if (!eventRes.ok) {
        throw new Error(result.message || "Event creation failed.");
      }

      toast.success("Event created successfully");
      reset();
      navigate("/dashboard")
    } catch (err) {
      console.error("Failed to post event:", err);
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-gray-900 dark:bg-gray-900 dark:text-white px-6 py-12">
      <form
        onSubmit={handleSubmit(postEvent)}
        className="space-y-6 w-full max-w-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-8"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-4">
          Create New Event
        </h2>

        {[
          {
            name: "title",
            label: "Title",
            placeholder: "e.g., Youth Hackathon",
          },
          {
            name: "venue",
            label: "Venue",
            placeholder: "e.g., Eldoret Sports Club",
          },
          { name: "date", label: "Date", type: "date" },
          {
            name: "description",
            label: "Description",
            placeholder: "e.g., Celebration of creativity and code",
          },
          {
            name: "image",
            label: "Image URL",
            type: "url",
            placeholder: "https://example.com/event.jpg",
          },
          {
            name: "category_name",
            label: "Category",
            placeholder: "e.g., Tech, Music, Business",
          },
        ].map(({ name, label, placeholder, type = "text" }) => (
          <div key={name} className="flex flex-col gap-2">
            <Label htmlFor={name}>{label}</Label>
            <Input
              id={name}
              type={type}
              placeholder={placeholder}
              {...register(name, { required: `${label} is required` })}
              className="bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-indigo-500"
            />
            {errors[name] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[name]?.message}
              </p>
            )}
          </div>
        ))}

        <Button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
        >
          Add Event
        </Button>
      </form>
    </div>
  );
}
