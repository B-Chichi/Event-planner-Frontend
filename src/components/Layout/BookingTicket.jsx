import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function BookingTicket() {
  const location = useLocation();
  const eventTitle = location.state?.eventTitle || "Your Event";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    payment: "MPESA",
    price: "1500",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDownloadTicket = () => {
    const ticketContent = `
🎫 Ticket Confirmation

Event: ${eventTitle}
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Payment Method: ${form.payment}
Price: KES ${form.price}

Thank you for booking with Event Planner!
    `;
    const blob = new Blob([ticketContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${eventTitle}-ticket.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-16">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Book Ticket</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 text-center">
          for <span className="font-medium">{eventTitle}</span>
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <select
              name="payment"
              value={form.payment}
              onChange={handleChange}
              className="w-full h-12 px-3 rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="MPESA">MPESA</option>
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
            </select>
            <Input
              name="price"
              type="number"
              placeholder="Price (KES)"
              value={form.price}
              onChange={handleChange}
              required
            />
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Confirm Booking
            </Button>
          </form>
        ) : (
          <div className="text-center space-y-6">
            <p className="text-green-600 font-medium text-lg">
              🎉 Booking confirmed!
            </p>
            <Button
              onClick={handleDownloadTicket}
              className="bg-black hover:bg-gray-800 text-white"
            >
              Download Ticket
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
