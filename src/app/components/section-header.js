
import Image from "next/image";

const SectionHeader = ({ text }) => {
  return (
    <div className="my-5 flex justify-center align-center space-x-1">
      <Image 
        className="pt-1"
        src="/sgd-controller.svg"
        width={30}
        height={30}
        alt="Controller Logo"
      />
      <h3 className="font-bold
       text-center text-2xl text-primary">
        {text}
      </h3>
    </div>
  );
};

export default SectionHeader;