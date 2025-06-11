import React from 'react';
import { AuthProvider } from '@/src/shared/lib/providers/auth-provider';
import '../style/globals.css';
import {LeftBar} from "@/src/widgets/left-bar";
import {Footer} from "@/src/widgets/footer";
export const metadata = {
    title: 'next',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
        <body>
        <LeftBar/>
        <AuthProvider>
            {children}
        </AuthProvider>
        <Footer/>
        </body>
        </html>
    );
}