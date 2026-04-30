import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { getCourseDetails } from "@/queries/courses";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Success({
  searchParams: { session_id, courseId },
}) {
  console.log(session_id, courseId);

  if (!session_id)
    throw new Error("Please provide a valid session id that starts with cs_");
  const userSession = await auth();

  if (!userSession?.user?.email) {
    redirect("/login");
  }

  const course = await getCourseDetails(courseId);
  

  return (
    <div className="h-full w-full flex-1 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-6 max-w-[600px] text-center">
        <CircleCheck className="w-32 h-32 bg-success rounded-full p-0 text-white" />
        <h1 className="text-xl md:text-2xl lg:text-3xl">
          Congratulations! You Enrollment was Successful
        </h1>
        <div className="flex items-center gap-3">
          <Button asChild size="sm">
            <Link href="/courses">Browse Courses</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/think-in-a-redux-way/introduction">Play Course</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
