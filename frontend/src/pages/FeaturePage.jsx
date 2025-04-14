import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchModelById } from "../services/api";
import VariantCard from "../components/VariantCard";
import Navbar from "../components/NavBar";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const FeaturePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [model, setModel] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchModelById(id).then((res) => setModel(res.data));
  }, [id]);

  if (!model)
    return (
      <div className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <p className="text-lg">Loading...</p>
      </div>
    );

  // Unique feature categories
  const allCategories = [
    "All",
    ...new Set(
      model.variants.flatMap((variant) =>
        variant.features?.map((f) => f.category?.name || "General")
      )
    ),
  ];

  return (
<div className="min-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-100 dark:scrollbar-thumb-indigo-400 dark:scrollbar-track-gray-700 bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-sans text-gray-800 dark:text-gray-100 transition-colors duration-300">
<Navbar />

      {/* Back Button */}
      <div className="sticky top-0 z-10 px-4 md:px-16 py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-700 flex items-center">
    <button
      onClick={() => navigate(-1)}
      className="text-indigo-600 dark:text-indigo-300 hover:underline flex items-center gap-2 font-medium"
    >
      <span className="text-xl">←</span> Back to Models
    </button></div>

      {/* Hero Section */}
      <motion.div
        className="relative bg-cover bg-center h-64 md:h-96 rounded-lg shadow-lg overflow-hidden mx-4 md:mx-16 mt-6"
        style={{
            backgroundImage: `url(${model.image})`,
            objectFit:"scale-down",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {model.name}
          </h1>
        </div>
      </motion.div>

      <motion.div
        className="px-4 md:px-16 py-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-6 tracking-tight text-gray-800 dark:text-white">
          Feature Overview
        </h2>

        {/* Search + Category Filter */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 mb-10">
          {/* Search */}
          <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
            <input
              type="text"
              placeholder="Search variant or accessory..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 shadow-sm bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Search variants or accessories"
            />
          </div>

          {/* Category */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full sm:w-1/3 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 shadow-sm bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Filter by category"
          >
            {allCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Variant List */}
        <div className="space-y-10">
          {model.variants.map((variant) => {
            // Filter features by category
            const filteredFeatures =
              selectedCategory === "All"
                ? variant.features
                : variant.features?.filter(
                    (f) => f.category?.name === selectedCategory
                  );

            // Filter variants and accessories by search term
            const matchesVariant = variant.name
              .toLowerCase()
              .includes(searchTerm.toLowerCase());

            const matchingAccessories = variant.accessories?.filter((acc) =>
              acc.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            const matchesFeatures = filteredFeatures?.some((f) =>
              f.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            // If no match at all, skip
            if (
              !matchesVariant &&
              matchingAccessories?.length === 0 &&
              !matchesFeatures
            )
              return null;

            return (
              <motion.div
                key={variant._id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-lg shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6"
              >
                <VariantCard
                  variant={{
                    ...variant,
                    accessories: matchingAccessories || [],
                    features: filteredFeatures,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturePage;
