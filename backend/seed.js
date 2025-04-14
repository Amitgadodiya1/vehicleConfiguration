const mongoose = require("mongoose");
require("dotenv").config();

const Model = require("./models/model");
const Variant = require("./models/varient");
const Color = require("./models/color");
const Accessory = require("./models/Accessory");
const Feature = require("./models/Feature");
const Category = require("./models/category");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected", process.env.MONGO_URI);
};

const seed = async () => {
  await connectDB();

  await Promise.all([
    Model.deleteMany(),
    Variant.deleteMany(),
    Color.deleteMany(),
    Accessory.deleteMany(),
    Feature.deleteMany(),
    Category.deleteMany(),
  ]);

  const accessoryCat = await Category.create({ name: "Accessories", type: "accessory" });
  const featureCat = await Category.create({ name: "Safety", type: "feature" });
  const Intercat = await Category.create({ name: "Interior", type: "feature" });

  const colors = await Color.create([
    { name: "Matador Red Mica", hexCode: "#69121d", price: 8168567 },
    { name: "Obsidian", hexCode: "#050508", price: 8500000 },
    { name: "Ultra White", hexCode: "#ffffff", price: 8300000 },
    { name: "Atomic Silver", hexCode: "#a0a0a0", price: 8200000 },
    { name: "Manganese Luster", hexCode: "#4b4b4b", price: 8400000 },
  ]);

  const accessories = await Accessory.create([
    {
      name: "All-Weather Floor Liners*",
      image: "https://media.ads.vapims.tms.aws.toyota.com/parts/images/PT908-50187-02.jpg",
      category: accessoryCat._id,
    },
    {
      name: "Carmate DC4000RA Dashcam 360*",
      image: "https://media.ads.vapims.tms.aws.toyota.com/parts/images/PTN57-00230.jpg",
      category: accessoryCat._id,
    },
    {
      name: "Dashcam",
      image: "https://media.ads.vapims.tms.aws.toyota.com/parts/images/PT949-76220.jpg",
      category: accessoryCat._id,
    },
    {
      name: "RAM X-Grip Cup Holder Mount for Large Phones*",
      image: "https://media.ads.vapims.tms.aws.toyota.com/parts/images/PTN59-0223W-LX.jpg",
      category: accessoryCat._id,
    },
  ]);

  const features = await Feature.create([
    {
      name: "Ten airbags*",
      mediaType: "image",
      mediaUrl: "https://i.pinimg.com/736x/0c/90/b4/0c90b44611c55d6b22edd44e85157cec.jpg",
      category: featureCat._id,
    },
    {
      name: "Anti-lock Braking System",
      mediaType: "video",
      mediaUrl: "https://youtu.be/VaQk4iKft_Q",
      category: featureCat._id,
    },
    {
      name: "Lexus Safety System+ 3.0*: Full-Speed Range Dynamic Radar Cruise Control*",
      mediaType: "video",
      mediaUrl: "https://youtu.be/nfFduAgdlXg",
      category: featureCat._id,
    },
    {
      name: "Traction Control (TRAC) system",
      mediaType: "video",
      mediaUrl: "https://youtu.be/UuMCuzICdvw",
      category: featureCat._id,
    },
    {
      name: "Chateau leather and Black Open-Pore trim",
      mediaType: "image",
      mediaUrl: "https://www.lexus.com/content/dam/lexus/images/models/ls/2025/visualizer/500/interior/chateau-leather-with-open-pore-black-trim/large-2.jpg",
      category: Intercat._id,
    },
    {
      name: "Black leather and Black Open-Pore trim",
      mediaType: "image",
      mediaUrl: "https://www.lexus.com/content/dam/lexus/images/models/ls/2025/visualizer/500/interior/black-leather-with-open-pore-black-trim/large-2.jpg",
      category: Intercat._id,
    },
    {
      name: "Palomino leather and Brown Open-Pore Walnut trim",
      mediaType: "image",
      mediaUrl: "https://www.lexus.com/content/dam/lexus/images/models/ls/2025/visualizer/500/interior/palomino-leather-with-open-pore-brown-walnut-trim/large-2.jpg",
      category: Intercat._id,
    },
    {
      name: "Chateau leather and Artwood Herringbone trim (Interior Upgrade)",
      mediaType: "image",
      mediaUrl: "https://www.lexus.com/content/dam/lexus/images/models/ls/2025/visualizer/500/interior/chateau-leather-with-artwood-herringbone-trim-interior-upgrade/large-2.jpg",
      category: Intercat._id,
    },
  ]);

  const variants = await Variant.create([
    {
      name: "LS 500",
      colors: colors.map(c => c._id),
      accessories: accessories.map(a => a._id),
      features: features.map(f => f._id),
    },
    {
      name: "LS 500 F SPORT",
      colors: colors.map(c => c._id),
      accessories: accessories.map(a => a._id),
      features: features.map(f => f._id),
    },
    {
      name: "LS 500h AWD",
      colors: colors.map(c => c._id),
      accessories: accessories.map(a => a._id),
      features: features.map(f => f._id),
    },
  ]);

  const esVariants = await Variant.create([
    {
      name: "ES 250 AWD",
      colors: colors.map(c => c._id),
      accessories: accessories.map(a => a._id),
      features: features.map(f => f._id),
    },
    {
      name: "ES 350 FWD",
      colors: colors.map(c => c._id),
      accessories: accessories.map(a => a._id),
      features: features.map(f => f._id),
    },
  ]);

  const RXVariants = await Variant.create([
    {
      name: "RX 350",
      colors: colors.map(c => c._id),
      accessories: accessories.map(a => a._id),
      features: features.map(f => f._id),
    },
    {
      name: "RX 500h F SPORT Performance AWD",
      colors: colors.map(c => c._id),
      accessories: accessories.map(a => a._id),
      features: features.map(f => f._id),
    },
  ]);

  await Model.create([
    {
      name: "LS 500",
      description: "416 HP Twin-Turbo V6 | 0–60 in 4.6 sec | 12.3 Display for Real-Time Data",
      image: "https://st.automobilemag.com/uploads/sites/10/2017/09/2018-Lexus-LS-500-F-Sport-front-three-quarter-in-motion-02.jpg",
      variants: variants.map(v => v._id),
    },
    {
      name: "ES",
      description: "Luxury Midsize Sedan with advanced safety features and hybrid options.",
      image: "https://cdcssl.ibsrv.net/autodata/images/?IMG=USC90LEC161A01300.JPG&WIDTH=870",
      variants: esVariants.map(v => v._id),
    },
    {
      name: "RX",
      description: "Versatile midsize SUV with gas, hybrid, and plug-in hybrid variants.",
      image: "https://www.autosnuff.com/wp-content/uploads/2023/03/2025-Lexus-RX-Exterior-1024x573.png",
      variants: RXVariants.map(v => v._id),
    },
  ]);

  console.log("✅ Seeding complete");
  process.exit();
};

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
