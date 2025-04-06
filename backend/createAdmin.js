require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin'); // Make sure this path is correct

mongoose.connect('mongodb+srv://alaska:WKVPvVu7QgZPAfLD@cluster0.kb9x7i1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB', err));

async function createAdmin() {
  try {
    const admin = new Admin({
      firstName: "Alaska",
      lastName: "Negi",
      email: "alaskaalaska767@gmail.com",
      password: "xyz123",
      role: "admin"
    });

    await admin.save();
    console.log('Admin created successfully');
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    mongoose.connection.close();
  }
}

createAdmin();
