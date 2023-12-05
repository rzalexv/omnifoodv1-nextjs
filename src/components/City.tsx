import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import PersonIcon from "@/assets/img/ios-person.svg";
import StarIcon from "@/assets/img/ios-star.svg";
import TwitterIcon from "@/assets/img/social-twitter.svg";

interface Social {
  path: string;
  name: string;
}

interface City {
  title: string;
  image: string;
  npersons: number;
  nchefs: number;
  social: Social;
}

interface Props {
  city: City;
}

export const City: FC<Props> = ({ city }) => {
  const { title, npersons, nchefs, social } = city;

  return (
    <div className="rounded-md shadow-md max-w-[360px] mx-auto overflow-hidden">
      <Image src={`/assets/img/${city.image}`} alt={title} width={900} height={600} />
      <div className="p-5">
        <h3 className="mb-4 text-lg tracking-wider uppercase">{title}</h3>
        <ul className="grid gap-4">
          <li className="flex items-center gap-4">
            <PersonIcon className="w-6 text-primary" /> {npersons}+ happy eaters
          </li>
          <li className="flex items-center gap-4">
            <StarIcon className="w-6 text-primary" /> {nchefs}+ top chefs
          </li>
          <li className="flex items-center gap-4">
            <TwitterIcon className="w-6 text-primary" />
            <Link href={social.path} className="text-primary">
              {social.name}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
