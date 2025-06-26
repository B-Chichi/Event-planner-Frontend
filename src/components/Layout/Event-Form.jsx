import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function EventForm() {
  return (
    <div className="flex flex-col items-center justify-start bg-background h-screen pt-12">
      <form className="space-y-6 w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div>
          <Label htmlFor="name">Event Name</Label>
          <Input id="name" name="name" placeholder="e.g., Youth Hackathon" />
        </div>

        <div>
          <Label htmlFor="venue">Venue</Label>
          <Input
            id="venue"
            name="venue"
            placeholder="e.g., Eldoret Sports Club"
          />
        </div>

        <div>
          <Label htmlFor="date">Date</Label>
          <Input id="date" name="date" placeholder="e.g., August 2, 2025" />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            name="description"
            placeholder="e.g., Listen to good music all night long"
          />
        </div>

        <div>
          <Label htmlFor="image">Image URL</Label>
          <Input
            type="url"
            id="image"
            name="image"
            placeholder="https://example.com/event.jpg"
          />
        </div>

        <Button type="submit">Add Event</Button>
      </form>
    </div>
  );
}
