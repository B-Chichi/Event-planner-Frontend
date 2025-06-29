import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BASE_URL } from "@/utils";

export function EventList() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [filteredEvents, setFilteredEvents] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${BASE_URL}/events`);
        const data = await res.json();
        setEvents(data);
        setFilteredEvents(data);
      } catch (err) {
        console.error("Failed to fetch events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    let filtered = events;

    if (searchTerm) {
      filtered = filtered.filter((event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category !== "All") {
      filtered = filtered.filter((event) => event.category?.name === category);
    }

    setFilteredEvents(filtered);
  }, [searchTerm, category, events]);

  const uniqueCategories = [
    "All",
    ...new Set(events.map((e) => e.category?.name).filter(Boolean)),
  ];

  if (loading) {
    return (
      <p className="text-center mt-12 text-gray-600 text-sm">
        Loading events...
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">My Events</h1>

      <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
        <Input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search events..."
          className="w-full md:w-1/2 h-12 border border-gray-300 dark:bg-gray-800 dark:border-gray-700"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-1/3 h-12 px-3 rounded-md border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {uniqueCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <Dialog key={event.id}>
            <DialogTrigger asChild>
              <Card
                onClick={() => setSelectedEvent(event)}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white dark:text-white">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {event.date}
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {event.description}
                  </p>
                </div>
              </Card>
            </DialogTrigger>

            <DialogContent className="max-w-lg p-0 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl shadow-xl">
              {selectedEvent && selectedEvent.id === event.id && (
                <Card className="bg-white dark:bg-gray-900 w-full rounded-xl">
                  <CardHeader className="p-6">
                    <div className="flex items-center gap-6">
                      <img
                        src={selectedEvent.image}
                        alt={selectedEvent.title}
                        className="w-40 h-40 object-cover rounded-lg"
                      />
                      <div className="space-y-2 text-base">
                        <h1 className="text-xl font-semibold text-white">
                          {selectedEvent.title}
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300">
                          <strong>Venue:</strong> {selectedEvent.venue}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          <strong>Date:</strong> {selectedEvent.date}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          <strong>Description:</strong>{" "}
                          {selectedEvent.description}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          <strong>Rating:</strong> 4.5 ⭐
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Button
                      className="w-full bg-black hover:bg-gray-800 text-white"
                      onClick={() => navigate(`/events/${event.id}/reviews`)}
                    >
                      View Reviews
                    </Button>
                  </CardContent>
                </Card>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
