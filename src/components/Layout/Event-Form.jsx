import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function EventForm() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
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
            <Input type="date" id="date" name="date" />
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
