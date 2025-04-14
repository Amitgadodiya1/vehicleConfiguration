import { useEffect, useState } from "react";
import { fetchModels } from "../services/api";
import ModelCard from "../components/ModelCard";
import Navbar from "../components/NavBar";
import FeaturedCarousel from "../components/FeaturedCarousel";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const [models, setModels] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchModels().then((res) => {
      setModels(res.data);
      setFilteredModels(res.data);
    });
  }, []);

  useEffect(() => {
    const lower = searchTerm.toLowerCase();
    const filtered = models.filter((model) =>
      model.name.toLowerCase().includes(lower)
    );
    setFilteredModels(filtered);
  }, [searchTerm, models]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-sans text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Navbar />

      <FeaturedCarousel
        images={[
          {
            url: "https://st.automobilemag.com/uploads/sites/10/2017/09/2018-Lexus-LS-500-F-Sport-front-three-quarter-in-motion-02.jpg",
            caption: "LS 500",
          },
          {
            url: "https://cdcssl.ibsrv.net/autodata/images/?IMG=USC90LEC161A01300.JPG&WIDTH=870",
            caption: "ES",
          },
          {
            url: "https://www.autosnuff.com/wp-content/uploads/2023/03/2025-Lexus-RX-Exterior-1024x573.png",
            caption: "RX",
          },
        ]}
      />

      <motion.div
        className="px-4 md:px-16 py-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative max-w-4xl mx-auto mb-10">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a model..."
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 shadow focus:ring-2 focus:ring-indigo-500 text-lg transition bg-white dark:bg-gray-800 dark:text-white"
          />
        </div>

        <h1 className="text-4xl font-extrabold text-center mb-8 tracking-tight text-gray-800 dark:text-white">
          Explore Our Luxury Vehicle Models
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModels.length > 0 ? (
            filteredModels.map((model) => (
              <motion.div
                key={model._id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ModelCard
                  model={model}
                  onClick={() => navigate(`/model/${model._id}/features`)}
                />
              </motion.div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 text-lg dark:text-gray-400">
              No matching models found.
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
