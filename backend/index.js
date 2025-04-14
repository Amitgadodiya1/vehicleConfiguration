const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const variantRoutes = require('./routes/variantRoutes');
const colorRoutes = require('./routes/colorRoutes');
const accessoryRoutes = require('./routes/accessoryRoutes');
const featureRoutes = require('./routes/featureRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const modelRoutes = require('./routes/modelRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('API is working'));

app.use('/api/models', modelRoutes);
app.use('/api/variants', variantRoutes);
app.use('/api/colors', colorRoutes);
app.use('/api/accessories', accessoryRoutes);
app.use('/api/features', featureRoutes);
app.use('/api/categories', categoryRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
