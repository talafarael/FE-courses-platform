import { ProtectedRoute } from "@/src/shared/lib/router/protected-route";
import './style/globals.css'
import React from "react";
import {Footer} from "@/src/widgets/footer";
import {LeftBar} from "@/src/widgets/left-bar";

export default function Home() {
  return (
      <ProtectedRoute>
          <LeftBar/>
            <div className={`bg-milk text-black h-screen`}>

            </div>
          <Footer/>
      </ProtectedRoute>
  );
}