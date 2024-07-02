"use client";
import Image from "next/image";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import BottomNav from "@/components/ui/BottomNav";
import { Container } from "postcss";
import { CircleAlert, Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="container pt-5">
      <h1 className="text-4xl font-bold mb-3">Hello!</h1>
      <Alert style={{ color: "darkgreen" }} className="mb-3">
        <CircleAlert className="h-10 w-4" />
        <AlertTitle className="font-bold">Heads up!</AlertTitle>
        <AlertDescription>
          You have a room reservation today on 19:00 PM at Samo Conference Room
          1
        </AlertDescription>
      </Alert>
      <div className="mb-3">
        <h1 className="text-3xl font-bold mb-3">What&apos;s up!</h1>
        {/* https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png */}
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 place-items-center">
          <div>
            <Image
              alt="sampleimage"
              className="mb-1 rounded-lg"
              width={1000}
              height={500}
              style={{
                objectFit: "cover",
                width: "100%",
                aspectRatio: "16/9",
                maxWidth: "440px",
              }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png"
            />
            <h1 className="text-xl font-bold mb-3">Sample Title</h1>
          </div>
          <div>
            <Image
              alt="sampleimage"
              className="mb-1 rounded-lg"
              width={1000}
              height={500}
              style={{
                objectFit: "cover",
                width: "100%",
                aspectRatio: "16/9",
                maxWidth: "440px",
              }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png"
            />
            <h1 className="text-xl font-bold mb-3">Sample Title</h1>
          </div>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 place-items-center">
        <ImagePlaceholder />
        <ImagePlaceholder />
        <ImagePlaceholder />
        <ImagePlaceholder />
        <ImagePlaceholder />
        <ImagePlaceholder />
      </div>
    </div>
  );
}

export default CalendarDemo;

const ImagePlaceholder = () => (
  <div className="grid gap-5 grid-cols-2 md:grid-cols-1 place-content-center">
    <div>
      <Image
        alt="sampleimage"
        className="mb-1 rounded-lg"
        width={300}
        height={100}
        style={{
          objectFit: "cover",
          width: "100%",
          aspectRatio: "16/9",
          maxWidth: "360px",
        }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png"
      />
    </div>
    <div>
      <h1 className="text-xl font-bold mb-3">Sample Title</h1>
    </div>
  </div>
);
