import { useUserStore } from "@/src/entities/user/model/userStore";
import { IEntries } from "../../model/entries";
import orderChangeArrow from "@/public/entries-icon/order-changer-arrow.svg";
import Image from "next/image";
import { Button } from "@/src/shared/ui/button/button";
import { useParams, useRouter } from "next/navigation";
import { ROUTES } from "@/src/shared/lib/constants/routes";
export interface CardEntryProps {
  entry: IEntries;
  handlerFallDown: (id: string) => void;
  handlerRiseUp: (id: string) => void;
}

export const CardEntry = ({
  entry,
  handlerFallDown,
  handlerRiseUp,
}: CardEntryProps) => {
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const handlerNavWatch = () => {
    const id = params?.id;
    router.push(
      ROUTES.watchLectureSection(
        id ?? "",
        entry.id,
        entry.lecture?.sections[0].id
      )
    );
  }
  const handlerNavToFactoryTest = () => {
    const id = params?.id;
    router.push(
      ROUTES.redactor(id ?? "", entry.id)
    );
  };
  return (
    <div className="min-h-[50px]  pt-[8px] pb-[8px] transition-all duration-300 ease-in-out   bg-purple rounded-[30px] w-[100%] flex flex-col  text-white">
      <div className="flex items-center justify-between">
        <h1 className="w-[80%] text-[14px] ml-[20px]">
          {entry?.lecture?.name ? "Теорія #" : "Тест #"}
          {entry?.lecture?.name ?? entry?.test?.name}
        </h1>
        {user?.has_admin_rights && (
          <div className="flex mr-[10px] w-[50px]">
            <button
              type="button"
              className="w-[25px]"
              onClick={() => handlerRiseUp(entry.id)}
            >
              <Image
                src={orderChangeArrow}
                className="w-[25px]"
                alt="order top"
              />
            </button>
            <button
              className=""
              type="button"
              onClick={() => handlerFallDown(entry.id)}
            >
              <Image
                src={orderChangeArrow}
                alt="order top"
                className=" rotate-180"
              />
            </button>
          </div>
        )}
      </div>
      <div>
      </div>
      <div>
        <Button handlerEvent={() => handlerNavWatch()} label="watch" />
        <Button handlerEvent={() => handlerNavToFactoryTest()} label="change" />
      </div>
    </div>
  );
};
