import { ProtectedRoute } from "@/src/shared/lib/router/protected-route";
import './style/globals.css'
import React from "react";
import {Layout} from "@/src/widgets/layout/layout";

export default function Home() {
  return (
      <ProtectedRoute>
          <Layout>
              <div className={`bg-milk text-black h-screen`}>
                    scxascsa
              </div>
          </Layout>


      </ProtectedRoute>
  );
}