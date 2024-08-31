import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { useNavigate } from "react-router-dom";

export function BackgroundBeamsDemo() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="h-[100vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Chat Bot
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p>
        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            className="relative z-10 text-lg md:text-1xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="relative z-10 text-lg md:text-1xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold"
            onClick={handleSignup}
          >
            Signup
          </button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
