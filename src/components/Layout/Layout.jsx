import { Dashboard } from "./dashboard";
import { EventList } from "./Event-List";
import { SearchBar } from "./Search-bar";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/utils";

import Header from "./Header";

export function Layout() {
  const [events, setEvent] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  console.log(filteredEvents)

  const handleFetch = () => {
    const token = localStorage.getItem("access_token");

    fetch(`${BASE_URL}/events`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setFilteredEvents(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <Dashboard>
        <Header />
        <SearchBar events={events} setFilteredEvents={setFilteredEvents} />
        <EventList events={filteredEvents} handleFetch={handleFetch} />
      </Dashboard>
    </>
  );
}
