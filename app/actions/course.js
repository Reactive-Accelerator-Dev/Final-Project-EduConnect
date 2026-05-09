"use server";

import { create } from "@/queries/courses";

export async function createCourse(data) {
  try {
    const course = await create(data);
    return course;
  } catch (e) {
    throw new Error(e);
  }
}