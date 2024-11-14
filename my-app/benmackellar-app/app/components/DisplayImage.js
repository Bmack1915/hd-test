import Image from "next/image";

function DisplayImage({ imageUrl }) {
  return (
    <Image
      className="p-5 object-fill"
      alt="A person working on a laptop"
      src={imageUrl}
      width={1000}
      height={500}
    />
  );
}

export default DisplayImage;
