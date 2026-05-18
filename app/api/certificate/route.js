import { getLoggedInUser } from "@/lib/loggedin-user";
import { getCourseDetails } from "@/queries/courses";

// Fetch custom fonts
const kalamFontUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/fonts/kalam/Kalam-Regular.ttf`;
const kalamFontBytes = await fetch(kalamFontUrl).then((res) =>
  res.arrayBuffer(),
);

const montserratItalicFontUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/fonts/montserrat/Montserrat-Italic.ttf`;
const montserratItalicFontBytes = await fetch(montserratItalicFontUrl).then(
  (res) => res.arrayBuffer(),
);

const montserratFontUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/fonts/montserrat/Montserrat-Medium.ttf`;
const montserratFontBytes = await fetch(montserratFontUrl).then((res) =>
  res.arrayBuffer(),
);

export async function GET(request) {
  try {
    /* -----------------
     *
     * Configuratios
     *
     *-------------------*/
    const searchParams = request.nextUrl.searchParams;
    const courseId = searchParams.get("courseId");
    const course = await getCourseDetails(courseId);
    const loggedInUser = await getLoggedInUser();

    const report = await getAReport({
      course: courseId,
      student: loggedInUser.id,
    });
    console.log(report?.completion_date);
    const completionDate = report?.completion_date
      ? formatMyDate(report?.completion_date)
      : formatMyDate(Date.now());
    console.log(completionDate);

    const completionInfo = {
      name: `${loggedInUser?.firstName} ${loggedInUser?.lastName}`,
      completionDate: completionDate,
      courseName: course.title,
      instructor: `${course?.instructor?.firstName} ${course?.instructor?.lastName}`,
      instructorDesignation: `${course?.instructor?.designation}`,
      sign: "/sign.png",
    };

    console.log(completionInfo);

    const pdfDoc = await PDFDocument.create();
    pdfDoc.registerFontkit(fontkit);

    const kalamFont = await pdfDoc.embedFont(kalamFontBytes);
    const montserratItalic = await pdfDoc.embedFont(montserratItalicFontBytes);

    const montserrat = await pdfDoc.embedFont(montserratFontBytes);

    const page = pdfDoc.addPage([841.89, 595.28]);
    const { width, height } = page.getSize();
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    /* -----------------
     *
     * Logo
     *
     *-------------------*/
    const logoUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`;
    const logoBytes = await fetch(logoUrl).then((res) => res.arrayBuffer());
    const logo = await pdfDoc.embedPng(logoBytes);
    const logoDimns = logo.scale(0.5);
    page.drawImage(logo, {
      x: width / 2 - logoDimns.width / 2,
      y: height - 120,
      width: logoDimns.width,
      height: logoDimns.height,
    });

    
  } catch (error) {
    console.log(error);
  }
}
