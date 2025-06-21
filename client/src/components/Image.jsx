import { Image } from "@imagekit/react";

const IKImageComponent = ({ src, className, w, h, alt }) => {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINTS}
      src={src}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
    />
  );
};

export default IKImageComponent;