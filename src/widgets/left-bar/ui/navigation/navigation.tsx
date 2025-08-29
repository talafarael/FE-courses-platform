"use client";
import { usePathname } from "next/navigation";
import { navigationList } from "@/src/shared/lib/constants/navigation-list";
import {ItemList} from "@/src/widgets/left-bar/ui/navigation/item-list";

export const Navigation = () => {
    const pathname = usePathname();

    return (
        navigationList.map(({ title, link }) => {
            const isActive= pathname === link
            return (
                   <ItemList key={title} title={title} link={link} isActive={isActive}/>
            );
        })
    );
};
