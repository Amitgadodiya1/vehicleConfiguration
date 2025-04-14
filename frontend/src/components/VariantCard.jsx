import ColorSwatches from "./ColorSwatches";
import AccessoryList from "./AccessoryList";
import FeatureList from "./FeatureList";
import { FaPalette, FaCogs, FaStar, FaMoneyBill } from "react-icons/fa";

const VariantCard = ({ variant }) => {
  if (!variant) return null;

  return (
    <div className="p-6 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 border rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 space-y-6">
      {/* Title */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-xl shadow-sm">
        <h3 className="font-bold text-lg tracking-wide">{variant.name}</h3>
      </div>

      {/* Colors */}
      <div>
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium mb-2">
          <FaPalette className="text-indigo-500" />
          <span>Available Colors</span>
        </div>
        <ColorSwatches colors={variant.colors || []} />
      </div>

      {/* Price by Color */}
      <div>
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium mb-2">
          <FaMoneyBill className="text-green-500" />
          <span>Price by Color</span>
        </div>
        <ColorSwatches colors={variant.colors || []} showPrice={true} />
      </div>

      {/* Accessories */}
      <div>
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium mb-2">
          <FaCogs className="text-purple-500" />
          <span>Accessories</span>
        </div>
        <AccessoryList accessories={variant.accessories || []} />
      </div>

      {/* Features */}
      <div>
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium mb-2">
          <FaStar className="text-yellow-500" />
          <span>Features</span>
        </div>
        <FeatureList features={variant.features || []} />
      </div>
    </div>
  );
};

export default VariantCard;
