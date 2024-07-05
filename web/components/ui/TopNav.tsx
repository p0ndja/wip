// components/TopNav.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./button";
import {
  ArrowLeft,
  CalendarDays,
  CircleUserRound,
  House,
  LayoutGrid,
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const TopNav = (props: { title?: string; backUrl?: string }) => {
  const { title, backUrl } = props;
  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0"
        style={{ background: "#fafafa" }}
      >
        <div
          style={{ height: "4rem" }}
          className="container flex items-center font-bold"
        >
          <Link href={backUrl ?? "/apps/"}>
            <ArrowLeft style={{ color: "grey" }} />
          </Link>
          &nbsp;{title ?? "Back"}
        </div>
      </nav>
      <div style={{ paddingBottom: "4.25rem" }}></div>
    </>
  );
};

export default TopNav;
