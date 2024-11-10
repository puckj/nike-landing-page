import Button from "@/components/Button";
import { arrowRight } from "@/public/icons";
import { offer } from "@/public/images";
import Image from "next/image";

const SpecialOffer = () => {
  return (
    <section
      id="special-offer"
      className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container"
    >
      <div className="flex-1">
        <Image
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 info-text">
          Don't miss out on our exclusive special offers! For a limited time,
          enjoy incredible discounts on top-quality footwear. Whether you're
          upgrading your collection or finding the perfect pair, now is the
          perfect time to shop. Take advantage of unbeatable prices on select
          styles, and treat yourself to premium comfort and performance.
        </p>
        <p className="mt-6 info-text">
          Hurry—these offers won't last long! Shop today and step up your game
          with Nike's latest footwear at an amazing value
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            className="!bg-white !border-slate-gray !text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
