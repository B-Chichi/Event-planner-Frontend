import { Dashboard } from "@/components/Layout/dashboard";
import EventForm from "../components/Layout/Event-Form";

export function AddEventPage() {
  return (
    <>
      <Dashboard>
        <EventForm />
      </Dashboard>
    </>
  );
}
