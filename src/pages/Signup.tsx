import Banner from "../assets/images/f2.avif";
import SignupForm from "../features/auth/SignupForm";

export default function Signup() {
  return (
    <div
      className="grid items-center justify-center min-h-screen bg-no-repeat bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      {/* Overlay for the background with its own blur */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/[0.3]"></div>
      <SignupForm />
    </div>
  );
}
