import {LeftBar} from "@/src/widgets/layout/left-bar";
import {Footer} from "@/src/widgets/layout/footer";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {

    return(
        <div>
            <LeftBar/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}