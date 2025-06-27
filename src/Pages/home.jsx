import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "../assets/event planner logo.png";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";


const publicEvents = [
  {
    id: 1,
    title: "Outdoor Wedding",
    date: "Aug 20, 2025",
    description: "A beautiful garden wedding in the Rift Valley.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/047/009/091/small_2x/outdoor-wedding-reception-warm-glow-of-the-lights-creates-a-magical-atmosphere-as-guests-gather-the-background-is-blurred-joyful-ambiance-of-the-celebration-romantic-and-festive-photo.jpg",
  },
  {
    id: 2,
    title: "Tech Summit",
    date: "Sep 12, 2025",
    description: "Explore innovations with Kenya's top developers.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsAxKjvKu7Fgo8gl_M3A3lS8AV2TQc_Ecuw&s",
  },
  {
    id: 3,
    title: "Cultural Festival",
    date: "Oct 3, 2025",
    description: "Celebrate heritage with food, music, and dance.",
    image: "https://media.istockphoto.com/id/2186806261/video/young-chiapanecas-dancing-outdoors.jpg?b=1&s=640x640&k=20&c=nOhQ6JFRUVZ9du3_pFLWfBrCLL3B5UoKkSgVE-MittI=",
  },
  {
    id: 4,
    title: "Fashion Gala",
    date: "Nov 11, 2025",
    description: "Experience elegance with designers from East Africa.",
    image: "https://assets.vogue.com/photos/681a5cbf91e4a54aaf76b6fd/4:3/w_2664,h_1998,c_limit/Holding%20Collage%20(2).jpg",
  },
  {
    id: 5,
    title: "Book Fair",
    date: "Dec 2, 2025",
    description: "Join fellow readers and authors for book showcases.",
    image: "https://media.istockphoto.com/id/1338096484/photo/south-bank-london.jpg?s=612x612&w=0&k=20&c=LQLzirK4HlVfNskuxhuS2-aP-TFPV8WPIfAWjLA4bsU=",
  },
  {
    id: 6,
    title: "Startup Pitch Night",
    date: "Jan 14, 2026",
    description: "Where innovation meets opportunity—live pitches!",
    image: "https://static.wixstatic.com/media/f8d418_30bc5f38ec25450eb3e7f2a01acc7024~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90/f8d418_30bc5f38ec25450eb3e7f2a01acc7024~mv2.jpg",
  },
];

export const HomePage = () => {
  const [bookedEvents, setBookedEvents] = useState({});

  const handleBooking = (id) => {
    setBookedEvents((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <header className="bg-slate-100 dark:bg-gray-800 px-6 py-4 flex justify-between items-center shadow-sm">
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

      <section className="text-center py-12 px-4">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          Welcome to Event Planner
        </h1>
        <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
          Let us plan your events
        </p>
      </section>

      <main className="px-6 max-w-7xl mx-auto flex-grow">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {publicEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition overflow-hidden group"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-48 w-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {event.description}
                </p>
                <Link to="/booking" state={{ eventTitle: event.title }}>
                  <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white w-full">
                    Book Ticket
                  </Button>
                </Link>
                
              </div>
            </div>
          ))}
        </div>

        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl mt-20 p-10 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Be the next big thing.</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Dream big, plan boldly, and bring your vision to life with Event
            Planner. Whether it's a wedding, festival, or startup showcase,we’ll
            help make it unforgettable.
          </p>
          <Link to="/signin">
            <Button className="bg-white text-indigo-700 font-semibold hover:bg-gray-100 transition">
              Get Started for Free
            </Button>
          </Link>
        </section>
      </main>

      <footer className="bg-slate-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 mt-16 px-6 pt-12 pb-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Event Planner
            </h3>
            <p className="text-sm">
              Build meaningful moments. From weddings to community events, we
              help you organize what matters most.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about-us" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Event Ideas
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
            <a href="#" className="hover:underline">
              Terms and conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Cookies
            </a>
            <a href="#" className="hover:underline">
              Accessibility
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="hover:text-gray-700 dark:hover:text-white"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          Kenya | English
        </div>
      </footer>
    </div>
  );
};