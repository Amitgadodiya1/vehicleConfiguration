import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const FeaturedCarousel = ({ images = [] }) => (
  <div className="my-6 rounded-xl overflow-hidden shadow-lg">
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={4000}
      transitionTime={700}
      stopOnHover
    >
      {images.map((img, idx) => (
        <div key={idx} className="aspect-w-16 aspect-h-7 relative">
          <img
            src={img.url}
            alt={`Slide ${idx}`}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-10 text-white px-4 py-2 rounded-md shadow">
            <p className="text-sm md:text-base font-medium">{img.caption}</p>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

export default FeaturedCarousel;
