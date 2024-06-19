import ReactImageMagnify from "react-image-magnify";
import { useState } from "react";

const EditProductPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ReactImageMagnify
      {...{
        smallImage: {
          alt: "Wristwatch by Ted Baker London",
          isFluidWidth: true,
          src: "/nophoto2.jpeg",
        },
        largeImage: {
          src: "/Homepage1.jpg",
          width: 300,
          height: 300,
        },
      }}
    />
  );
};

export default EditProductPage;
