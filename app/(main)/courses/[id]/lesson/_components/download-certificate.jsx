"use client"
import { Button } from "@/components/ui/button";

export const DownloadCertificate = ({ courseId, totalProgress }) => {
  return (
    <Button className="w-full mt-6" disabled={totalProgress < 100}>
      Download Certificate
    </Button>
  );
};
