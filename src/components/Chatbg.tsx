"use client";
import React from "react";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="h-[100vh] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
