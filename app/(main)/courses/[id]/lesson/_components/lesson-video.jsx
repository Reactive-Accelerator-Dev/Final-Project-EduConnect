"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

export default function LessonVideo({ courseId, lesson, module }) {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    setHasWindow(true);
  }, []);

  function handleOnStart() {
    console.log("handleOnStart");
  }

  function handleOnEnded() {
    console.log("handleOnEnded");
  }

  function handleOnDuration(duration) {
    console.log("handleOnDuration", duration);
  }

  function handleOnProgress(state) {
    // console.log("handleOnProgress", state);
  }

  return (
    <>
      {hasWindow && (
        <ReactPlayer
          url={lesson.video_url}
          width="100%"
          height="470px"
          controls={true}
          onStart={handleOnStart}
          onDuration={handleOnDuration}
          onProgress={handleOnProgress}
          onEnded={handleOnEnded}
        />
      )}
    </>
  );
}
