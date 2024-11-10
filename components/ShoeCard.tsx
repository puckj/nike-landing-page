import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

interface Props {
  imgUrl: { thumbnail: any; bigShoe: StaticImageData };
  setSelectedShoe: Dispatch<SetStateAction<StaticImageData>>;
  selectedShoe: StaticImageData;
}

const ShoeCard = ({ imgUrl, setSelectedShoe, selectedShoe }: Props) => {
  const handleClick = () => {
    if (selectedShoe !== imgUrl.bigShoe) {
      setSelectedShoe(imgUrl.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl
        ${selectedShoe === imgUrl.bigShoe ? "border-coral-red" : "border-transparent"}
        cursor-pointer max-sm:flex-1 transform transition-all duration-300`}
      onClick={handleClick}
    >
      <div
        className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40
          rounded-xl max-sm:p-4"
      >
        <Image
          src={imgUrl.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
