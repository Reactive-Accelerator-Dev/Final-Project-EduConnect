import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/lib/convertData";
import { getCourseDetails } from "@/queries/courses";
import VideoDescription from "./_components/video-description";
import { VideoPlayer } from "./_components/video-player";
import { getLessonBySlug } from "@/queries/lessons";

const Course = async ({ params: { id }, searchParams: { name, module } }) => {
  const course = await getCourseDetails(id);
  const allModules = replaceMongoIdInArray(course.modules).toSorted(
    (a, b) => a.order - b.order,
  );

  const defaultLesson = replaceMongoIdInObject(
    allModules[0]?.lessonIds?.toSorted((a, b) => a.order - b.order)[0],
  );

  const lessonToPlay = name ? await getLessonBySlug(name) : defaultLesson;

  const defaultModule = module ?? allModules[0].slug;

  console.log({ lessonToPlay });

  return (
    <div>
      <div className="flex flex-col max-w-4xl mx-auto pb-20">
        <div className="p-4 w-full">
          <VideoPlayer />
        </div>
        <div>
          <div className="p-4 flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
            <Button size="lg">Enroll</Button>
          </div>
          <Separator />
          <VideoDescription />
        </div>
      </div>
    </div>
  );
};
export default Course;
