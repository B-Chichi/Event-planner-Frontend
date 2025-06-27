import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function EventForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const postEvent = async (eventData) => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) throw new Error("Authentication token is missing.");

      // Resolve category
      const categoryRes = await fetch(`http://localhost:5000/categories`, {
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

      const eventRes = await fetch(`http://localhost:5000/events`, {
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

      alert("Event created successfully!");
      reset();
    } catch (err) {
      console.error("Failed to post event:", err);
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start bg-background h-screen pt-12">
      <form
        onSubmit={handleSubmit(postEvent)}
        className="space-y-6 w-full max-w-md p-6 bg-white rounded-lg shadow-md"
      >
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="e.g., Youth Hackathon"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="venue">Venue</Label>
          <Input
            id="venue"
            placeholder="e.g., Eldoret Sports Club"
            {...register("venue", { required: "Venue is required" })}
          />
          {errors.venue && (
            <p className="text-red-500 text-sm">{errors.venue.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            type="date"
            {...register("date", { required: "Date is required" })}
          />
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            placeholder="e.g., Celebration of creativity and code"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            type="url"
            placeholder="https://example.com/event.jpg"
            {...register("image", { required: "Image URL is required" })}
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="category_name">Category</Label>
          <Input
            id="category_name"
            placeholder="e.g., Tech, Music, Business"
            {...register("category_name", { required: "Category is required" })}
          />
          {errors.category_name && (
            <p className="text-red-500 text-sm">
              {errors.category_name.message}
            </p>
          )}
        </div>

        <Button type="submit">Add Event</Button>
      </form>
    </div>
  );
}
