import Button from "@/components/Button";
import { shoe8 } from "@/public/images";
import Image from "next/image";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You <span className="text-coral-red">Super</span>
          <br />
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Step into unmatched quality with shoes built to last. Crafted from
          premium materials and designed with innovative technology, our
          footwear combines comfort, durability, and style effortlessly. Whether
          for training or daily wear, each pair supports your every move with
          confidence.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Discover shoes that don’t just fit your lifestyle—they enhance it
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image
          src={shoe8}
          alt="shoe"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
