import React from 'react';
import { AuthProvider } from '@/src/shared/lib/providers/auth-provider';
import './style/globals.css';
export const metadata = {
    title: 'next',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
        <body>
        <AuthProvider>
            {children}
        </AuthProvider>
        </body>
        </html>
    );
}