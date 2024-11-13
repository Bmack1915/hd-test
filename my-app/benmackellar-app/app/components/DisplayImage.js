import Image from "next/image";

function DisplayImage() {
  return (
    <Image
      className="p-5 object-fill"
      alt="A person working on a laptop"
      src="/image-web-3-desktop.jpg"
      width={1000}
      height={500}
    />
  );
}

export default DisplayImage;
