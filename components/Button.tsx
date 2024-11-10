import Image from "next/image";

interface Props {
  label: string;
  iconUrl?: string;
  className?: string;
}

const Button = ({ label, iconUrl, className }: Props) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg
        leading-none bg-coral-red rounded-full text-white border-coral-red ${ className
        && className }`}
    >
      {label}
      {iconUrl && (
        <Image
          src={iconUrl}
          alt="button icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
