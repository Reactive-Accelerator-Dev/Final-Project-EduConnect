import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { replaceMongoIdInArray } from "@/lib/convertData";
import SidebarLessons from "./sidebar-lessons";

export const SidebarModules = ({ courseId, modules }) => {
  const allModules = replaceMongoIdInArray(modules).toSorted(
    (a, b) => a.order - b.order,
  );
  return (
    <Accordion
      defaultValue="item-1"
      type="single"
      collapsible
      className="w-full px-6"
    >
      {allModules.map((module) => (
        <AccordionItem key={module.id} className="border-0" value={module.id}>
          <AccordionTrigger> {module.title} </AccordionTrigger>
          <SidebarLessons
            courseId={courseId}
            lessons={module.lessonIds}
            module={module.slug}
          />
        </AccordionItem>
      ))}
    </Accordion>
  );
};
