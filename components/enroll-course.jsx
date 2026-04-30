"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function EnrollCourse({ asLink }) {
  return (
    <>
      {asLink ? (
        <Button
          type="submit"
          variant="ghost"
          className="text-xs text-sky-700 h-7 gap-1"
        >
          Enroll
          <ArrowRight className="w-3" />
        </Button>
      ) : (
        <Button type="submit" className={cn(buttonVariants({ size: "lg" }))}>
          Enroll Now
        </Button>
      )}
    </>
  );
}
