import { HiMiniArrowLongRight } from "react-icons/hi2";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const socials = [
  { link: "/", icon: FaFacebook },
  { link: "/", icon: FaSquareXTwitter },
  { link: "/", icon: FaLinkedin },
  { link: "/", icon: TiSocialInstagram },
];

// top-[10%] md:top-[20%]
export default function Hero() {
  return (
    <section className="md:min-h-[90vh] md:flex md:items-center">
      {/*hero section */}
      <div className="w-full md:mx-auto md:max-w-7xl relative grid grid-cols-1 md:grid-cols-2 md:gap-x-10">
        {/*section-1 */}
        <div className="flex flex-col h-[90vh] pb-24 md:pb-0 justify-center gap-6 md:h-[450px] sm:max-w-xl sm:mx-auto md:max-w-full">
          <h1 className="font-bold text-5xl text-center md:text-left lg:text-7xl ">
            Just Come To{" "}
            <span className="text-blue-600 font-extrabold">FOOCHA</span> And
            Order
          </h1>
          <p className="font-medium text-center md:text-left sm:text-sm md:text-base text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
            sodales id, porttitor vitae est. Donec laoreet rutrum libero sed
            pharetra.
          </p>
          <div className="justify-center md:justify-start flex gap-4">
            <Button buttonType="rounded">Order Now</Button>
            <Button buttonType="outlineRounded" fullRounded>
              Explore more
              <HiMiniArrowLongRight />
            </Button>
          </div>

          {/*socials */}
          <div className="flex gap-4 justify-center md:justify-start">
            {socials.map(({ link, icon: Icon }, i) => (
              <Link
                to={link}
                className="p-1 rounded-lg bg-white flex items-center justify-center w-12 h-12 shadow-socials text-2xl hover:shadow-lg transition-all duration-200 ease-in-out hover:bg-blue-500 hover:text-white"
                key={i}
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        {/*section-2 */}
        <div className="h-[450px] relative">
          {/*blob 
          22%_78%_48%_52%_
          _57%_48%_52%_43%
          */}
          <div className="h-full bg-blue-500 rounded-[56%_44%_72%_28%_/_52%_100%_0%_48%] md:w-4/5 mx-auto flex justify-center items-end">
            <img
              src="../../public/hero.png"
              alt="order"
              className="object-cover h-6/7 absolute"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
