import { GetFullCurrentCourse } from "@/src/entities/course/ui/get-current-course";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[100%]">
      <GetFullCurrentCourse />
      {children}
    </div>
  );
}
