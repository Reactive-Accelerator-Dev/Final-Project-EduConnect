import { getInstructorDashboardData, COURSE_DATA } from "@/lib/dashboard-helper";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
const CoursesPage = async () => {
  const courses = await getInstructorDashboardData(COURSE_DATA);
//   console.log(data);
  return (
    <div className="p-6">
      {/* <Link href="/teacher/create">
        <Button>New Course</Button>
      </Link> */}
      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default CoursesPage;
