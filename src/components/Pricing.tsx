import { FC } from "react";
import Link from "next/link";
import CheckIcon from "@/assets/img/ios-checkmark-empty.svg";
import CloseIcon from "@/assets/img/ios-close-empty.svg";

interface Item {
  item: string;
  value: boolean;
}

export interface IPricing {
  plan: string;
  price: number;
  priceType: "month" | "meal";
  description?: string;
  items: Item[];
  primary?: boolean;
}

interface Props {
  pricing: IPricing;
}

export const Pricing: FC<Props> = ({ pricing }) => {
  return (
    <div className="pricing bg-white max-w-[320px] md:max-w-[360px] shadow-md mx-auto w-full md:mx-0">
      <div className="border-b p-4 border-neutral-300 min-h-[164px]">
        <h3 className="mb-2 uppercase">{pricing.plan}</h3>
        <p className="mb-4 text-6xl font-thin text-primary">
          ${pricing.price} <span className="text-lg font-light">/ {pricing.priceType}</span>
        </p>
        {pricing.description && <p className="text-sm md:text-base">{pricing.description}</p>}
      </div>
      <div className="">
        <ul className="grid gap-2 p-4 border-b border-neutral-300">
          {pricing.items.map(({ item, value }, index) => (
            <li className="flex items-center gap-2" key={index}>
              <div className="w-8 text-primary">{value ? <CheckIcon /> : <CloseIcon />}</div>
              {item}
            </li>
          ))}
        </ul>
        <div className="p-4 text-center">
          {pricing.primary ? (
            <Link href="#" className="btn btn-primary">
              Sign up now
            </Link>
          ) : (
            <Link href="#" className="btn btn-ghost">
              Sign up now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
