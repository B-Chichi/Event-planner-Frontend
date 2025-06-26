import { Input } from "@/components/ui/input";
import { useState } from "react";

export function SearchBar({events, setFilteredEvents}) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    const filteredData = events.filter((event) =>
      event.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredEvents(filteredData);
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
