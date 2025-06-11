import Link from "next/link";
interface ItemListProps {
    title: string;
    link: string;
}



export const ItemList = ({title, link}: ItemListProps) => {
    return (
        <Link key={title} href={link}>
            {title}
        </Link>
    );
};