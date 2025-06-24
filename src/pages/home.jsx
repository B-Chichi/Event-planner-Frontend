import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
            Welcome to Event planner app
          </h1>
          <p className="mx-auto my-8 max-w-2xl text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            doloremque similique dignissimos rem vitae, harum dolorum minima.
            Aliquam ipsa repellat natus perferendis libero, non, dolore quae
            reprehenderit amet sint saepe.
          </p>

          <Button className="mr-4">
            <Link to={"/signin"}>Get Started</Link>
          </Button>
          <Button>
            <Link to={"/login"}>Log int your account</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;