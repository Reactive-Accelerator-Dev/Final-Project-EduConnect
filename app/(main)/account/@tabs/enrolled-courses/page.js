import { auth } from "@/auth";
import EnrolledCourseCard from "../../component/enrolled-coursecard";
import { getUserByEmail } from "@/queries/users";
import { getEnrollmentsForUser } from "@/queries/enrollments";
import { redirect } from "next/navigation";

async function EnrolledCourses() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const loggedInUser = await getUserByEmail(session?.user?.email);

  const enrollments = await getEnrollmentsForUser(loggedInUser?.id);

  console.log(enrollments)

  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <EnrolledCourseCard />
    </div>
  );
}

export default EnrolledCourses;
