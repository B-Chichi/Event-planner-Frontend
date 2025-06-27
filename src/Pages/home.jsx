import { Button } from "@/components/ui/button";
import logo from "../assets/event planner logo.png";
import { Link } from "react-router-dom";

// Sample event data
const publicEvents = [
  {
    id: 1,
    title: "Outdoor Wedding",
    date: "Aug 20, 2025",
    description: "A beautiful garden wedding in the Rift Valley.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/047/009/091/small_2x/outdoor-wedding-reception-warm-glow-of-the-lights-creates-a-magical-atmosphere-as-guests-gather-the-background-is-blurred-joyful-ambiance-of-the-celebration-romantic-and-festive-photo.jpg",
  },
  {
    id: 2,
    title: "Tech Summit",
    date: "Sep 12, 2025",
    description: "Explore innovations with Kenya's top developers.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsAxKjvKu7Fgo8gl_M3A3lS8AV2TQc_Ecuw&s",
  },
  {
    id: 3,
    title: "Cultural Festival",
    date: "Oct 3, 2025",
    description: "Celebrate heritage with food, music, and dance.",
    image:
      "https://media.istockphoto.com/id/2186806261/video/young-chiapanecas-dancing-outdoors.jpg?b=1&s=640x640&k=20&c=nOhQ6JFRUVZ9du3_pFLWfBrCLL3B5UoKkSgVE-MittI=",
  },
  {
    id: 4,
    title: "Fashion Gala",
    date: "Nov 11, 2025",
    description: "Experience elegance with designers from East Africa.",
    image:
      "https://assets.vogue.com/photos/681a5cbf91e4a54aaf76b6fd/4:3/w_2664,h_1998,c_limit/Holding%20Collage%20(2).jpg",
  },
  {
    id: 5,
    title: "Book Fair",
    date: "Dec 2, 2025",
    description: "Join fellow readers and authors for book showcases.",
    image:
      "https://media.istockphoto.com/id/1338096484/photo/south-bank-london.jpg?s=612x612&w=0&k=20&c=LQLzirK4HlVfNskuxhuS2-aP-TFPV8WPIfAWjLA4bsU=",
  },
  {
    id: 6,
    title: "Startup Pitch Night",
    date: "Jan 14, 2026",
    description: "Where innovation meets opportunity—live pitches!",
    image:
      "https://static.wixstatic.com/media/f8d418_30bc5f38ec25450eb3e7f2a01acc7024~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90/f8d418_30bc5f38ec25450eb3e7f2a01acc7024~mv2.jpg",
  },
];

export const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-slate-100 px-6 py-4 flex justify-between items-center shadow-sm">
        <img src={logo} alt="EventPlanner Logo" className="w-14 h-14" />
        <div className="flex gap-4">
          <Link to="/signin">
            <Button variant="secondary">Get Started</Button>
          </Link>
          <Link to="/login">
            <Button>Log in</Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-12 px-4">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          Welcome to Event Planner
        </h1>
        <p className="mt-4 text-xl text-gray-700">Let us plan your events</p>
      </section>

      {/* Event Grid */}
      <main className="px-6 max-w-7xl mx-auto flex-grow">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {publicEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="mt-2 text-gray-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white text-center py-6 mt-16">
        <p className="text-sm">
          © {new Date().getFullYear()} Event Planner. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
