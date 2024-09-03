"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { PlaceholdersAndVanishInputDemo } from "../components/Inputbar";
import { ShootingStarsAndStarsBackgroundDemo } from "../components/Chatbg";
import { ProfileDashboard } from "./Infoprofile";

export function SidebarDemo() {

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center md:flex-row dark:bg-neutral-800  border-neutral-200 dark:border-neutral-700 ",
        "h-screen",
        "w-[100vw]" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="flex gap-10 bg-slate-600">

          <div className="flex items-center flex-col">
            <SidebarLink
              link={{
                label: "",
                href: "profile",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-[200px] w-[200px] flex-shrink-0 rounded-full"
                    alt="Avatar"
                  />
                ),
              }}
            />
            <div>
            <ProfileDashboard/>
            </div>
          </div>

        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

export const Logo = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        chat bot
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </a>
  );
};

// Updated Dashboard component with background covering the screen and input bar on top
const Dashboard = () => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Background covering the entire screen */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <ShootingStarsAndStarsBackgroundDemo />
      </div>

      {/* Input bar positioned at the middle bottom */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-md px-4">
        <PlaceholdersAndVanishInputDemo />
      </div>
    </div>
  );
};

