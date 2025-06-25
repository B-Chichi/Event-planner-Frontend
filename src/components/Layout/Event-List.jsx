import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function EventList() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      name: "Beach Festival",
      venue: "Mombasa Shoreline",
      date: "July 15, 2025",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0CV1Nb-wajypPcr2fuTkbYLP61CyAiDa9_A&s",
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

  return (
    <>
      <h1 className="text-3xl text-center mt-10">Upcoming Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-20">
        {events.map((event) => (
          <Dialog key={event.id}>
            <DialogTrigger asChild>
              <Card
                onClick={() => setSelectedEvent(event)}
                className="relative bg-cover bg-center h-96 text-white cursor-pointer"
                style={{ backgroundImage: `url(${event.imageUrl})` }}
              >
                <div className="absolute top-0 left-0 w-full bg-black/40 p-4 z-10">
                  <h2 className="text-3xl font-bold">{event.name}</h2>
                </div>
              </Card>
            </DialogTrigger>

            <DialogContent className="max-w-lg p-0 bg-background text-foreground">
              {selectedEvent && (
                <Card className="bg-background w-full shadow-xl rounded-2xl">
                  <CardHeader className="p-6 border-b">
                    <div className="flex items-center gap-6">
                      <img
                        src={selectedEvent.imageUrl}
                        alt={selectedEvent.name}
                        className="w-32 h-32 rounded-xl object-cover shadow-md"
                      />
                      <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-foreground">
                          {selectedEvent.name}
                        </h1>
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Venue:</strong>{" "}
                          {selectedEvent.venue}
                        </p>
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Date:</strong>{" "}
                          {selectedEvent.date}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 text-center space-y-4">
                    <p className="text-lg">
                      <strong className="text-foreground">Attendees:</strong>{" "}
                      250+
                    </p>
                    <p className="text-lg">
                      <strong className="text-foreground">Rating:</strong> 4.5
                      ⭐
                    </p>
                    <Button className="mt-2 w-full">View Reviews</Button>
                  </CardContent>
                </Card>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  );
}
