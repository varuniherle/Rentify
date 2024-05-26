const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:admin@cluster0.jn1ekuw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();


// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection using Mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Schemas and Models
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  userType: String, // seller or buyer
});

const propertySchema = new mongoose.Schema({
  sellerId: mongoose.Schema.Types.ObjectId,
  place: String,
  area: Number,
  bedrooms: Number,
  bathrooms: Number,
  nearbyHospitals: String,
  nearbyColleges: String,
});

const User = mongoose.model('User', userSchema);
const Property = mongoose.model('Property', propertySchema);

// Routes
// Register User
app.post('/register', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, userType } = req.body;
  const newUser = new User({ firstName, lastName, email, phoneNumber, userType });
  await newUser.save();
  res.json(newUser);
});

// Add Property
app.post('/property', async (req, res) => {
  const { sellerId, place, area, bedrooms, bathrooms, nearbyHospitals, nearbyColleges } = req.body;
  const newProperty = new Property({ sellerId, place, area, bedrooms, bathrooms, nearbyHospitals, nearbyColleges });
  await newProperty.save();
  res.json(newProperty);
});

// Get Seller Properties
app.get('/properties/:sellerId', async (req, res) => {
  const { sellerId } = req.params;
  const properties = await Property.find({ sellerId });
  res.json(properties);
});

// Update Property
app.put('/property/:id', async (req, res) => {
  const { id } = req.params;
  const updatedProperty = await Property.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedProperty);
});

// Delete Property
app.delete('/property/:id', async (req, res) => {
  const { id } = req.params;
  await Property.findByIdAndDelete(id);
  res.json({ message: 'Property deleted' });
});

// Get All Properties
app.get('/properties', async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
