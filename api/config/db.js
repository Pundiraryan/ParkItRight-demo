const mongoose = require('mongoose');
const mongoURI =
  "mongodb+srv://aanchalagarwal1401:dffowYTudIZlnZhF@cluster0.ao4pakc.mongodb.net/GoFoodMERN?retryWrites=true&w=majority";

const connectWithDB = () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(process.env.DB_URL
      , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`DB connected successfully`))
    .catch((err) => {
      console.log(`DB connection failed`);
      console.log(err);
      process.exit(1);
    });
};

module.exports = connectWithDB;
