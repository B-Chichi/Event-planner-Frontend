import React, { useState, useEffect } from "react";
import { Dashboard } from "@/components/Layout/dashboard";
import { useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/utils";

export function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [inputText, setInputText] = useState("");

  const { eventId } = useParams();

  const token = localStorage.getItem("access_token");
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    fetch(`${BASE_URL}/events/${eventId}/reviews`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch reviews");
        return res.json();
      })
      .then((data) => setReviews(data))
      .catch((err) => console.error(err.message));
  }, [eventId]);

  const handleAddReview = async () => {
    const res = await fetch(`${BASE_URL}/events/${eventId}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        comment: inputText,
        event_id: eventId,
        user_id: userId,
      }),
    });

    if (!res.ok) throw new Error("Failed to post review");

    const data = await res.json();
    const newReview = data.review;

    setReviews((prev) => [newReview, ...prev]);
    setInputText("");
  };

  return (
    <Dashboard>
      <div className="flex flex-col justify-start h-full text-gray-900 dark:bg-gray-900 dark:text-black">
        <div className="flex-1 overflow-y-auto flex flex-col-reverse p-4">
          <ul className="space-y-2">
            {reviews.map((review) => (
              <li
                key={review.id}
                className="bg-gray-300 p-3 rounded flex justify-between items-start w-full"
              >
                <p>{review.comment}</p>
                <p className="font-semibold text-sm">
                  {review.user?.name || "Anonymous"}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full p-4 border-t bg-gray-300 flex space-x-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddReview();
            }}
            className="w-full p-4 bg-gray-300 flex space-x-2"
          >
            <Input
              placeholder="Add review"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="bg-background"
              required
            />
            <Button type="submit">Send</Button>
          </form>
        </div>
      </div>
    </Dashboard>
  );
}
