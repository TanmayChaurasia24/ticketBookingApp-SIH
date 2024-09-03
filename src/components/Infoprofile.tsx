import React from "react";
import { Label } from "./ui/label";
import { cn } from "../lib/utils";

export function ProfileDashboard() {
  // Example user data
  const userData = {
    firstName: "Tyler",
    lastName: "Durden",
    email: "projectmayhem@fc.com",
    password: "••••••••", // You might want to display a masked password or none at all
  };

  return (
    <div className="h-[100vh] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-transparent">

        <div className="my-8">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname" className=" text-neutral-200">First name</Label>
              <p className="text-neutral-200">{userData.firstName}</p>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname" className=" text-neutral-200">Last name</Label>
              <p className="text-neutral-200">{userData.lastName}</p>
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email" className=" text-neutral-200">Email Address</Label>
            <p className="text-neutral-200">{userData.email}</p>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password" className=" text-neutral-200">Password</Label>
            <p className="text-neutral-200">{userData.password}</p>
          </LabelInputContainer>
        </div>
      </div>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
