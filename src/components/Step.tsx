import { FC } from "react";

interface Props {
  position: number;
  description: string;
}

export const Step: FC<Props> = ({ position, description }) => {
  return (
    <div className="flex items-center">
      <div className="mr-4 lg:mr-6">
        <span className="inline-flex items-center justify-center w-10 h-10 text-lg border-2 rounded-full md:w-12 md:h-12 lg:w-14 lg:h-14 border-primary text-primary md:text-xl lg:text-2xl">{position}</span>
      </div>
      <p className="leading-tight md:leading-6 md:text-lg lg:text-xl">{description}</p>
    </div>
  );
};
