import { LoginForm } from "./components/login-form";
import { Layout } from "./components/Layout/Layout";
import EventForm from "./components/Layout/Event-Form";

function App() {
  return (
    <>
      <LoginForm />
      <Layout />
      <EventForm/>
    </>
  );
}

export default App;
