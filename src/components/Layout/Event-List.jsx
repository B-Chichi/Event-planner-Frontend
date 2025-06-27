import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function EventList() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:5000/events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Failed to fetch events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <p className="text-center mt-12">Loading events...</p>;
  }

  return (
    <>
      <h1 className="text-3xl text-center mt-10">
        <strong>Your events</strong>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-20">
        {events.map((event) => (
          <Dialog key={event.id}>
            <DialogTrigger asChild>
              <Card
                onClick={() => setSelectedEvent(event)}
                className="relative bg-cover bg-center h-96 text-white cursor-pointer"
                style={{ backgroundImage: `url(${event.image})` }}
              >
                <div className="absolute top-0 left-0 w-full bg-black/40 p-4 z-10">
                  <h2 className="text-3xl font-bold">{event.title}</h2>
                </div>
              </Card>
            </DialogTrigger>

            <DialogContent className="max-w-lg p-0 bg-background text-foreground">
              {selectedEvent && selectedEvent.id === event.id && (
                <Card className="bg-background w-full shadow-xl rounded-2xl">
                  <CardHeader className="p-6">
                    <div className="flex items-center gap-6">
                      <img
                        src={selectedEvent.image}
                        alt={selectedEvent.title}
                        className="w-46 h-46 rounded-xl object-cover shadow-md"
                      />
                      <div className="space-y-2 text-xl">
                        <h1 className="text-3xl font-bold text-foreground">
                          {selectedEvent.title}
                        </h1>
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Venue:</strong>{" "}
                          {selectedEvent.venue}
                        </p>
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Date:</strong>{" "}
                          {selectedEvent.date}
                        </p>
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">
                            Description:
                          </strong>{" "}
                          {selectedEvent.description}
                        </p>
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Rating:</strong>{" "}
                          4.5 ⭐
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 text-center space-y-4">
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
