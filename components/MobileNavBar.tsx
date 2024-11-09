import Image from "next/image";
import { cross } from "@/public/icons";
import { navLinks } from "@/constants";
import Link from "next/link";

interface Props {
  displayMobileNav: boolean;
  displayMobileNavHandler: () => void;
}

const MobileNavBar = ({ displayMobileNav, displayMobileNavHandler }: Props) => {
  const navDisplayStyle = displayMobileNav
    ? "translate-x-0"
    : "translate-x-[-100%]";
  return (
    <div
      className={`transform transition-all duration-500 fixed top-0 left-0 z-[200]
h-[100vh] right-0 bottom-0 bg-slate-50 ${navDisplayStyle}`}
    >
      <div className="absolute z-10 right-14 max-sm:right-8 top-6">
        {/* <div className="flex justify-end pt-6 pr-14 max-sm:pr-8"> */}
        <Image
          src={cross}
          alt="cross"
          width={40}
          height={40}
          onClick={displayMobileNavHandler}
        />
      </div>
      <ul className="relative space-y-10 flex flex-col justify-center items-center h-full">
        {navLinks.map((item, index) => (
          <li
            key={index}
            className="text-2xl hover:text-[#FF6452] transition-all duration-200 first:text-[#FF6452] font-montserrat"
          >
            <Link
              href={item.href}
              className=""
              onClick={displayMobileNavHandler}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavBar;
