import { CgClose } from "react-icons/cg";
import Button from "../ui/Button";
import { Links } from "../ui/Links";
import { Link } from "react-router-dom";

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideNav({ isOpen, onClose }: SideNavProps) {
  return (
    <div
      className={`fixed md:hidden inset-0 min-h-screen z-30 bg-black transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="py-5 px-3 flex justify-end items-center text-white">
        <Button buttonType="small" size="sm" onClick={onClose}>
          <CgClose size={20} />
        </Button>
      </div>
      <nav>
        <ul className="gap-6 lg:gap-10 xl:gap-14">
          {Links.map(({ title, path, icon: Icon }) => (
            <li
              key={path}
              className="font-medium border border-slate-900 py-5 pl-10  text-lg text-white"
              onClick={onClose}
            >
              <Link key={title} to={path}>
                <span className="flex items-center gap-4">
                  {Icon && <Icon size={30} />}
                  {title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="text-gray-500 text-sm text-center absolute bottom-5 w-full">
        &copy;All Rights Reserved. 2024 Foocha Limited.
      </div>
    </div>
  );
}
