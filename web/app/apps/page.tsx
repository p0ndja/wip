import BottomNav from "@/components/ui/BottomNav";
import React, { useState } from "react";
import Link from "next/link";
import {
  BookUser,
  CalendarDays,
  CircleUserRound,
  Gavel,
  House,
  Laptop,
  LayoutGrid,
  Newspaper,
  NotebookPen,
  SquarePen,
  Wrench,
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center place-content-end">
      <div
        className="grid grid-cols-3 gap-3 px-2 w-full max-w-96"
        style={{ position: "fixed", bottom: "96px" }}
      >
        <div className="col-span-3">
          <Link href="/apps/room-reserve">
            <Button
              className="rounded-2xl w-full h-32 shadow-md"
              style={{ backgroundColor: "#17706e" }}
            >
              <center>
                <CalendarDays size={32} />
                <br />
                จองห้องประชุม
              </center>
            </Button>
          </Link>
        </div>
        <div>
          <Link href="/apps/report/item-damaged">
            <Button
              className="rounded-2xl w-full h-32 shadow-md"
              style={{ backgroundColor: "#125b50" }}
            >
              <center>
                <Wrench size={32} />
                <br />
                แจ้งทรัพย์สิน
                <br />
                เสียหาย
              </center>
            </Button>
          </Link>
        </div>
        <div>
          <Link href="/apps/req">
            <Button
              className="rounded-2xl w-full h-32 shadow-md"
              style={{ backgroundColor: "#125b50" }}
            >
              <center>
                <Newspaper size={32} />
                <br />
                ติดตาม
                <br />
                สถานะคำร้อง
              </center>
            </Button>
          </Link>
        </div>
        <div>
          <Link href="/apps/project">
            <Button
              className="rounded-2xl w-full h-32 shadow-md"
              style={{ backgroundColor: "#125b50" }}
            >
              <center>
                <SquarePen size={32} />
                <br />
                เขียนโครงการ
              </center>
            </Button>
          </Link>
        </div>
        <div>
          <Link href="/apps/report/it">
            <Button
              className="rounded-2xl w-full h-32 shadow-md"
              style={{ backgroundColor: "#125b50" }}
            >
              <center>
                <Laptop size={32} />
                <br />
                แจ้งปัญหา IT
              </center>
            </Button>
          </Link>
        </div>
        <div>
          <Link href="/apps/document">
            <Button
              className="rounded-2xl w-full h-32 shadow-md"
              style={{ backgroundColor: "#125b50" }}
            >
              <center>
                <NotebookPen size={32} />
                <br />
                รวมสรุปรุ่นพี่
              </center>
            </Button>
          </Link>
        </div>
        <div>
          <Link href="/apps/contact">
            <Button
              className="rounded-2xl w-full h-32 shadow-md"
              style={{ backgroundColor: "#125b50" }}
            >
              <center>
                <BookUser size={32} />
                <br />
                ติดต่อเรา
              </center>
            </Button>
          </Link>
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
