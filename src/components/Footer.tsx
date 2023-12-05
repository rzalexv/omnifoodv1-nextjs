import Link from "next/link";
import FacebookIcon from "@/assets/img/social-facebook.svg";
import TwitterIcon from "@/assets/img/social-twitter.svg";
import YoutubeIcon from "@/assets/img/social-youtube.svg";

const NAVIGATION = [
  {
    path: "#",
    name: "About Us",
  },
  {
    path: "#",
    name: "Blog",
  },
  {
    path: "#",
    name: "Press",
  },
  {
    path: "#",
    name: "IOS App",
  },
  {
    path: "#",
    name: "Android App",
  },
];

const SOCIAL = [
  {
    path: "#",
    icon: <FacebookIcon />,
  },
  {
    path: "#",
    icon: <TwitterIcon />,
  },
  {
    path: "#",
    icon: <YoutubeIcon />,
  },
];

export const Footer = () => {
  return (
    <footer className="py-8 bg-secondary text-neutral-400">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2">
          <nav className="">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-x-6 md:gap-y-2 md:justify-start">
              {NAVIGATION.map((item, index) => (
                <li className="" key={index}>
                  <Link href={item.path} className="transition-colors duration-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="">
            <ul className="flex justify-center gap-4 md:justify-end md:gap-6">
              {SOCIAL.map((social, index) => (
                <li className="" key={index}>
                  <Link href={social.path} className="transition-colors duration-300 hover:text-white">
                    <span className="inline-block w-6">{social.icon}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-sm text-center md:col-span-2">
            <p className="">
              Copyright &copy; 2023 &mdash; by Omnifood
              <br />
              All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
