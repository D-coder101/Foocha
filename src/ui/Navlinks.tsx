import { Link } from "react-router-dom";
import { Links } from "./Links";

export default function Navbar() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-6 lg:gap-10 xl:gap-14">
        {Links.map(({ title, path }) => (
          <li className="font-semibold" key={title}>
            <Link
              to={path}
              // className={index >= Links.length - 2 ? "text-white" : ""}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
