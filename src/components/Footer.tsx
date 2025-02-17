import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { VscSend } from "react-icons/vsc";
import { TiSocialInstagram } from "react-icons/ti";
import { Link } from "react-router-dom";

const socials = [
  { link: "/", icon: FaFacebook },
  { link: "/", icon: FaSquareXTwitter },
  { link: "/", icon: FaLinkedin },
  { link: "/", icon: TiSocialInstagram },
];

function Footer() {
  return (
    <footer className="px-6 md:px-20 py-20 w-full bg-blue-950 left-0 right-0 bottom-0">
      <div className="mx-auto md:max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
        {/* section-1 */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="italic text-3xl font-serif font-bold">Foocha</h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
            dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor
            vitae est.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            {socials.map(({ link, icon: Icon }, i) => (
              <Link
                to={link}
                className="p-2 rounded-lg bg-blue-500 flex items-center justify-center w-10 h-10 shadow-socials text-xl hover:shadow-lg transition-all duration-200 ease-in-out hover:bg-blue-800"
                key={i}
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>
        {/*section-2 */}
        <ul className="space-y-4 font-semibold text-center mx-auto">
          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-blue-500">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/service" className="hover:text-blue-500">
              Service
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="hover:text-blue-500">
              Contacts
            </Link>
          </li>
        </ul>
        {/*section-3 */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-bold">Stay Connected</h2>
          <p className="">
            Stay updated with our latest news, exclusive offers, and insightful
            articles delivered directly to your inbox.
          </p>
          <form>
            <div className="relative max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="pl-4 pr-20 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none font-medium focus:ring-2 focus:ring-blue-600 w-full shadow"
              />
              <button className="absolute right-2 text-sm font-medium text-white py-2 px-3 bg-blue-500 rounded-lg h-[75%] top-1/2 hover:bg-blue-600 transition-all duration-300 ease-in-out -translate-y-1/2">
                <VscSend size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
