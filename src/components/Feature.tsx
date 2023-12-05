import { FC } from "react";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface Props {
  feature: Feature;
}

export const Feature: FC<Props> = ({ feature }) => {
  const { icon, title, description } = feature;

  return (
    <article className="text-center sm:text-start max-w-[360px] mx-auto">
      <div className="w-16 mx-auto text-primary sm:mx-0">{icon}</div>
      <h3 className="my-4 text-lg tracking-wider uppercase">{title}</h3>
      <p className="">{description}</p>
    </article>
  );
};
