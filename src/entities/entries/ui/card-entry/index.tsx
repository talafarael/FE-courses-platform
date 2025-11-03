import { IEntries } from "../../model/entries";
import { useParams, useRouter } from "next/navigation";
import { ROUTES } from "@/src/shared/lib/constants/routes";
export interface CardEntryProps {
  entry: IEntries;
}

export const CardEntry = ({ entry }: CardEntryProps) => {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const handlerNavWatch = () => {
    const id = params?.id;
    router.push(
      ROUTES.watchLectureSection(
        id ?? "",
        entry.id,
        entry.lecture?.sections[0].id,
      ),
    );
  };
  return (
    <button
      onClick={handlerNavWatch}
      className="min-h-[50px]  transition-all duration-300 ease-in-out   bg-purple rounded-[30px] w-[70%] max-w-[600px] flex flex-col  items-start justify-center"
    >
      <h1 className="text-[14px] ml-[20px]  text-white">
        <span className="font-bold">
          {entry?.lecture?.name ? "Теорія #" : "Тест #"}
        </span>
        {entry?.lecture?.name ?? entry?.test?.name}
      </h1>
    </button>
  );
};
