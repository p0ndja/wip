// components/BottomNav.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./button";
import { CalendarDays, CircleUserRound, House, LayoutGrid } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const BottomNav: React.FC = () => {
  return (
    <div className="visible xl:invisible">
      <nav
        className="fixed bottom-0 left-0 right-0 shadow-lg z-50"
        style={{ background: "#fafafa" }}
      >
        <ul className="flex justify-around py-4 place-items-center ">
          <li>
            <Link href="/" className="text-gray-600 hover:text-blue-500">
              <center>
                <House />
              </center>
              <center>Home</center>
            </Link>
          </li>
          <li>
            <Link href="/apps" className="text-gray-600 hover:text-blue-500">
              <center>
                <LayoutGrid />
              </center>
              AppsUI
            </Link>
          </li>
          {/* <li>
          <div>
            <HoverCard>
              <HoverCardTrigger>
                
                <center>
                  <LayoutGrid />
                </center>
                AppsPopup
              </HoverCardTrigger>
              <HoverCardContent className="w-fit">
                <div className="grid grid-cols-3 gap-2">
                  <Link href="/post">
                    <Button className="w-44 h-44">
                      <center>
                        <CalendarDays size={64} />
                        <br />
                        แจ้งทรัพย์สินเสียหาย
                      </center>
                    </Button>
                  </Link>
                  <Link href="/post">
                    <Button className="w-44 h-44">
                      <center>
                        <CalendarDays size={64} />
                        <br />
                        แจ้งทรัพย์สินเสียหาย
                      </center>
                    </Button>
                  </Link>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </li> */}
          <li>
            <Link href="/profile" className="text-gray-600 hover:text-blue-500">
              <center>
                <CircleUserRound />
              </center>
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNav;
