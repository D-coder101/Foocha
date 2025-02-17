import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Suspense } from "react";
import SpinnerFullPage from "../components/SpinnerFullPage";
import Footer from "../components/Footer";
import ChatButton from "../components/Chat";
// import ScrollToTop from "../components/ScrolltoTop";
// import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="h-screen min-w-full grid grid-rows-[auto-1fr-auto] grid-cols-1">
      <Header />
      {/* <ScrollToTop /> */}
      {/* <Sidebar /> */}
      <main>
        <Suspense fallback={<SpinnerFullPage />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />

      <ChatButton />
    </div>
  );
}
