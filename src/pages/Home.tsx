import { lazy, Suspense } from "react";
import Hero from "../components/Hero";
import Service from "../components/Service";
// import Menu from "../components/Menu";
import NewsLetter from "../components/NewsLetter";
import SpinnerFullPage from "../components/SpinnerFullPage";
// const Menu = lazy(() => import("../components/Menu"));
const Menu = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../components/Menu")), 1000)
    )
);

export default function Home() {
  return (
    <div className="px-3">
      <Hero />
      <Service />
      <Suspense fallback={<SpinnerFullPage />}>
        <Menu />
      </Suspense>
      {/* <Reviews /> */}
      <NewsLetter />
    </div>
  );
}
