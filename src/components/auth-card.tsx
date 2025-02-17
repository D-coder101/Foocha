import { CardWrapperProps } from "../types/CardWrapperProps";
import LinkButton from "../ui/LinkButton";
import Socials from "../ui/Socials";

export const AuthCard = ({
  children,
  cardTitle,
  cardDescription,
  backButtonHref,
  backButtonLabel,
  showSocials,
}: CardWrapperProps) => {
  return (
    <div className="mt-6 w-80  md:w-96 backdrop-blur-sm bg-black/[0.25] border-2 border-white/[0.01] rounded-lg p-8 gap-3 flex flex-col">
      <h2 className="text-2xl tracking-wider font-semibold text-white">
        {cardTitle}
      </h2>
      <h3 className="text-gray-200 mt-1">{cardDescription}</h3>

      <div className="mt-2">{children}</div>
      <div>{showSocials && <Socials />}</div>
      <div className="text-gray-200 text-center">
        <LinkButton to={backButtonHref}>{backButtonLabel}</LinkButton>
      </div>
    </div>
  );
};
