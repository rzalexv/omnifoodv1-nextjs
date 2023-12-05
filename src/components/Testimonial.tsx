import { FC } from "react";
import Image from "next/image";

interface Testimonial {
  review: string;
  author: string;
  image: string;
}

interface Props {
  testimonial: Testimonial;
}

export const Testimonial: FC<Props> = ({ testimonial }) => {
  return (
    <div className="relative max-w-[360px] mx-auto text-center px-4 before:content-['\201C'] before:absolute before:text-8xl before:top-[-40px] before:-left-3 italic before:sm:-left-6 md:text-left">
      <blockquote className="mb-6 md:text-lg lg:text-xl">{testimonial.review}</blockquote>
      <cite className="flex items-center justify-center gap-4 md:justify-start">
        <Image src={`/assets/img/${testimonial.image}`} alt={testimonial.author} width={50} height={50} className="rounded-full" />
        {testimonial.author}
      </cite>
    </div>
  );
};
