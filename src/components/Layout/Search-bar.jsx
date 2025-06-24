import { Input } from "@/components/ui/input";
import { useState } from "react";

export function SearchBar() {
  const events = [
    {
      id: 1,
      name: "Beach Festival",
      venue: "Mombasa Shoreline",
      date: "July 15, 2025",
      imageUrl:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Live Concert",
      venue: "Nairobi Arena",
      date: "August 2, 2025",
      imageUrl:
        "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?cs=srgb&dl=pexels-joshsorenson-976866.jpg&fm=jpg",
    },
    {
      id: 3,
      name: "Gala Dinner",
      venue: "Safari Park Hotel",
      date: "September 10, 2025",
      imageUrl:
        "https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA=",
    },
    {
      id: 4,
      name: "Corporate Retreat",
      venue: "Naivasha Resort",
      date: "October 5, 2025",
      imageUrl:
        "https://saffronweddingstyle.com/wp-content/uploads/2023/08/corporate-event-planning.jpg",
    },
  ];

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    const filteredData = events.filter((event) =>
      event.name.toLowerCase().includes(value.toLowerCase())
    );

  };
  return (
    <>
      <Input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={input}
      />
    </>
  );
}
