import { ProtectedRoute } from "@/src/shared/lib/router/protected-route";
import './style/globals.css'

export default function Home() {
  return (
      <ProtectedRoute>
        <div className={`bg-black text-white h-screen`}>MAIN PAGE</div>
      </ProtectedRoute>
  );
}