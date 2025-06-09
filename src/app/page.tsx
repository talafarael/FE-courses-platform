import { ProtectedRoute } from "@/src/shared/lib/router/protected-route";
import './style/globals.css'
import {Footer} from "@/src/widgets/footer";
import React from "react";

export default function Home() {
  return (
      <ProtectedRoute>
        <div className={`bg-milk text-black h-screen`}>
            <p className={`text-purple`}>qwertyuiop</p>
            <p className={`text-purplelight`}>qwertyuiop</p>
        </div>
          <Footer/>
      </ProtectedRoute>
  );
}