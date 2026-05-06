import {
  getInstructorDashboardData,
  REVIEW_DATA,
} from "@/lib/dashboard-helper";
import { getCourseDetails } from "@/queries/courses";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

const reviews = [
  {
    id: 1,
    student: { name: "John Doe" },
    review: "Nice Course, Thanks for the help",
    rating: 5,
  },
  {
    id: 1,
    student: { name: "John Smilga" },
    review: "Nice Course, Thanks for the help",
    rating: 5,
  },
];
const ReviewsPage = async ({ params: { courseId } }) => {
  const course = await getCourseDetails(courseId);
  const reviewsData = await getInstructorDashboardData(REVIEW_DATA);
  console.log(reviewsData);
  return (
    <div className="p-6">
      <h2>{course?.title}</h2>
      <DataTable columns={columns} data={reviews} />
    </div>
  );
};

export default ReviewsPage;
