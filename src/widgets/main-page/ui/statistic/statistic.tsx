"use client";
import { Avatar } from "@/src/shared/ui/avatar";
import { icons } from "@/src/widgets/main-page/ui/statistic/icons";
import Image from "next/image";
import Link from "next/link";

export const Statistic = () => {
  return (
    <div className="w-[650px] h-[350px] bg-purplelight rounded-3xl border-2 border-purple p-6 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold ">Ваша статистика</h2>
        <Link
          href="/auth/register"
          className="px-4 py-2 bg-purple text-white rounded-2xl text-sm font-medium hover:opacity-90 transition"
        >
          Стати користувачем
        </Link>
      </div>

      <div className="flex items-center gap-6 mt-2">
        <Avatar width={100} height={100} />
        <div className="flex flex-col">
          <p className="text-xl font-semibold text-dark">
            Анонімний користувач
          </p>
          <p className="text-base text-gray-600">
            Статистика недоступна для анонімних користувачів
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-4 text-center ">
        {icons.map(({ title, url }) => (
          <div key={title} className="flex flex-col items-center ">
            <Image src={url} alt={title} width={40} height={20} />
            <span className="text-sm font-medium mt-1 text-purple">0</span>
          </div>
        ))}
      </div>
    </div>
  );
};
