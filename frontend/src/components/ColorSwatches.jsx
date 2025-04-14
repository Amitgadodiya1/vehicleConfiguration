const ColorSwatches = ({ colors = [], showPrice = false }) => (
    <div className="flex items-center gap-4 mt-2 flex-wrap">
      {colors.map((color, i) => (
        <div
          key={i}
          className="flex flex-col items-center text-xs group transition-transform duration-300 hover:scale-105"
        >
          <div
            className="w-8 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600 group-hover:border-indigo-500 transition duration-300"
            style={{ backgroundColor: color.hexCode }}
            title={`Price: ₹${color.price}`}
          />
          <span className="text-gray-500 dark:text-gray-300 mt-1 font-medium">{color.name}</span>
          {showPrice && (
            <span className="text-indigo-500 dark:text-indigo-300 mt-0.5 font-semibold">₹{color.price}</span>
          )}
        </div>
      ))}
    </div>
  );
  
  export default ColorSwatches;
  