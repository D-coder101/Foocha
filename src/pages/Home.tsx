import { lazy, Suspense } from "react";
import Hero from "../components/Hero";
import Service from "../components/Service";
// import Menu from "../components/Menu";
import NewsLetter from "../components/NewsLetter";
import SpinnerFullPage from "../components/SpinnerFullPage";
// const Menu = lazy(() => import("../components/Menu"));
const loadComponent = async () => {
  await new Promise((res) => setTimeout(res, 1000));
  return import("../components/Menu");
};

const Menu = lazy(() => loadComponent());

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
