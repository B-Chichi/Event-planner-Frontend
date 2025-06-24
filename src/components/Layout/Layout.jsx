import { Dashboard } from "./dashboard";
import { EventList } from "./Event-List";
import { SearchBar } from "./Search-bar";


export function Layout() {
  return (
    <>
      <Dashboard>
        <h1 className="text-5xl">Dashboard</h1>
        <SearchBar />
        <EventList />
      </Dashboard>
    </>
  );
}
