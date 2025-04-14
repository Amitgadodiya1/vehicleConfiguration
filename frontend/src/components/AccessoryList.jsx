import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AccessoryList = ({ accessories = [] }) => {
  const grouped = accessories.reduce((acc, item) => {
    const cat = item.category?.name || "Uncategorized";
    acc[cat] = [...(acc[cat] || []), item];
    return acc;
  }, {});

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return Object.entries(grouped).map(([category, items]) => (
    <div key={category} className="mt-6">
      <h4 className="font-semibold mb-2 text-indigo-600 dark:text-indigo-300">
        {category}
      </h4>
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item._id} className="px-2">
            <div className="relative h-64 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 hover:shadow transition duration-300">
              <img
                src={item.image || "/placeholder.png"}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white px-3 py-2 text-sm font-medium">
                {item.name}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  ));
};

export default AccessoryList;
