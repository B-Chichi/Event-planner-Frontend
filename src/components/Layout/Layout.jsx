import { Dashboard } from "./dashboard";
import { EventList } from "./Event-List";
import { SearchBar } from "./Search-bar";
import Header from "./Header";


export function Layout() {
  return (
    <>
      <Dashboard>
        <Header/>
        <SearchBar />
        <EventList />
      </Dashboard>
    </>
  );
}
