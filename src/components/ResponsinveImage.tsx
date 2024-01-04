import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Props {
  className: string;
  src: string;
}

const ResponsinveImage = ({ src, className }: Props) => {
  const folder = src.split("/");
  return (
    <>
      <LazyLoadImage
        className={className}
        src={`/images/${folder[1]}/desktop/${folder[2]}`}
        alt=""
        effect="blur"
      />
    </>
  );
};

export default ResponsinveImage;
