import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

import Button from "./Button";

export default function Socials() {
  return (
    <div className="w-full flex flex-col gap-3">
      <Button buttonType="outline" fullWidth>
        Sign in with Google
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button buttonType="outline" fullWidth>
        Sign in with Apple
        <FaApple className="w-5 h-5" />
      </Button>
    </div>
  );
}
