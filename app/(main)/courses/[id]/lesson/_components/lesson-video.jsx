"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

export default function LessonVideo({ courseId, lesson, module }) {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    setHasWindow(true);
  }, []);

  return (
    <>
      {hasWindow && (
        <ReactPlayer
          url={lesson?.video_url}
          width="100%"
          height="470px"
          controls
        />
      )}
    </>
  );
}
