const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Contact = require('./models/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Atlas connection string
const dbURI = 'mongodb+srv://uday:uday2acc@cluster0.uhds6.mongodb.net/contactManager?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB Atlas
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch(err => {
  console.log('Error connecting to MongoDB Atlas:', err);
});

// Routes
app.post('/contacts', async (req, res) => {
  const { firstName, lastName, email, phone, company, jobTitle } = req.body;

  if (!firstName || !lastName || !email || !phone || !company || !jobTitle) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res.status(400).json({ message: 'Contact with this email already exists' });
    }

    const newContact = new Contact({ firstName, lastName, email, phone, company, jobTitle });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json({ message: 'Error creating contact', error: err.message });
  }
});

app.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving contacts', error: err.message });
  }
});

app.put('/contacts/:id', async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, phone, company, jobTitle } = req.body;

  if (!firstName || !lastName || !email || !phone || !company || !jobTitle) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    const existingContact = await Contact.findOne({ email });
    if (existingContact && existingContact._id.toString() !== id) {
      return res.status(400).json({ message: 'Another contact with this email already exists' });
    }

    const contact = await Contact.findByIdAndUpdate(
      id,
      { firstName, lastName, email, phone, company, jobTitle },
      { new: true }
    );
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json({ message: 'Error updating contact', error: err.message });
  }
});

app.delete('/contacts/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting contact', error: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
