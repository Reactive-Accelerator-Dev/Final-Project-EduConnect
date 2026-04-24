import { getCourses } from "@/queries/courses";
export default async function Home() {
  const data = await getCourses();
  console.log(data);
  return (
    <div>
      <h1>Educonnect</h1>
    </div>
  );
}
