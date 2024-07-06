"use client";
import Image from "next/image";

import { useState } from "react";

import { CalendarDays, CircleAlert, LayoutGrid } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import BottomNav from "@/components/ui/BottomNav";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function IndexPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <main className="container pt-5">
      <Image
        className="relative dark:invert mb-5"
        src="/samohub.svg"
        alt="SamoHub Logo"
        width={100}
        height={32}
        priority
      />
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
          <Link href="/post">
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
          </Link>
          <Link href="/post">
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
          </Link>
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
      <div style={{ paddingBottom: "5rem" }}></div>
      <BottomNav />
    </main>
  );
}

export default IndexPage;

const ImagePlaceholder = () => (
  <div className="grid gap-5 grid-cols-2 md:grid-cols-1 place-content-center">
    <div>
      <Link href="/post">
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
      </Link>
    </div>
    <div>
      <Link href="/post">
        <h1 className="md:marker:text-xl font-bold mb-3">Sample Title</h1>
      </Link>
    </div>
  </div>
);
