import { star } from "@/public/icons";
import Image, { StaticImageData } from "next/image";

interface Props {
  imgURL: StaticImageData;
  customerName: string;
  rating: number;
  feedback: string;
}

const ReviewCard = ({ imgURL, customerName, rating, feedback }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px] hover:object-scale-down"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <Image
          src={star}
          alt="rating"
          className="w-[24px] h-[24px] object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
