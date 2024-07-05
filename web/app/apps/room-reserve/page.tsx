"use client";

import TopNav from "@/components/ui/TopNav";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useState } from "react";
import CalendarTimeline from "./CalendarTimeline";
export default function AppRoomReserve() {
  const [selectedCategory, setSelectedCategory] = useState<string>("samo");
  const [selectedCategoryName, setSelectedCategoryName] =
    useState<string>("samo");

  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [selectedRoomName, setSelectedRoomName] = useState<string | null>(null);

  const CategoryButton = (prop: {
    categoryName: string;
    displayName: string;
  }) => {
    return (
      <Button
        onClick={() => {
          setSelectedCategory(prop.categoryName);
          setSelectedCategoryName(prop.displayName);
          setSelectedRoom(null);
          setSelectedRoomName(null);
        }}
        className="w-full shadow-md"
        style={{
          background:
            selectedCategory === prop.categoryName ? "#125b50" : "#ffffff",
          color: selectedCategory === prop.categoryName ? "#ffffff" : "#125b50",
        }}
      >
        <center>{prop.displayName}</center>
      </Button>
    );
  };

  const RoomButton = (prop: { roomName: string; displayName: string }) => {
    return (
      <Button
        onClick={() => {
          setSelectedRoom(prop.roomName);
          setSelectedRoomName(prop.displayName);
        }}
        className="w-full h-16 shadow-md"
        style={{
          background: selectedRoom === prop.roomName ? "#125b50" : "#ffffff",
          color: selectedRoom === prop.roomName ? "#ffffff" : "#125b50",
        }}
      >
        <center>{prop.displayName}</center>
      </Button>
    );
  };

  return (
    <>
      <TopNav title="จองห้องประชุม" />
      <main className="container pt-5">
        <span className="text-2xl font-bold">สถานที่</span>
        <Card style={{ backgroundColor: "#f1f5f9" }} className="mb-3">
          <CardContent className="p-2">
            <div className="grid grid-cols-2 gap-2 w-full">
              <CategoryButton categoryName="samo" displayName="ห้องสโมฯ" />
              <CategoryButton categoryName="dorm" displayName="หอพักแพทย์ 4" />
            </div>
          </CardContent>
        </Card>
        <span className="text-2xl font-bold">ห้องประชุม</span>
        {selectedCategory === "samo" && (
          <Card style={{ backgroundColor: "#f1f5f9" }} className="mb-3">
            <CardContent className="p-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
                <RoomButton roomName="samo-a" displayName="A" />
                <RoomButton roomName="samo-b" displayName="B" />
                <RoomButton roomName="samo-c" displayName="C" />
                <RoomButton roomName="samo-d" displayName="D" />
              </div>
            </CardContent>
          </Card>
        )}
        {selectedCategory === "dorm" && (
          <Card style={{ backgroundColor: "#f1f5f9" }} className="mb-3">
            <CardContent className="p-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
                <RoomButton roomName="dorm-w" displayName="W" />
                <RoomButton roomName="dorm-x" displayName="X" />
                <RoomButton roomName="dorm-y" displayName="Y" />
                <RoomButton roomName="dorm-z" displayName="Z" />
              </div>
            </CardContent>
          </Card>
        )}
        {selectedCategory && selectedRoom && <CalendarTimeline />}
      </main>
    </>
  );
}
