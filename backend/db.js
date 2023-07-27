const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://adansalman:as12345@cluster0.on1oo8w.mongodb.net/StyleHubMern?retryWrites=true&w=majority";
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    fetchData();
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};
async function fetchData() {
  try {
    const fetched_data = await mongoose.connection.db.collection(
      "clothing_items"
    );
    const data = await fetched_data.find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection(
      "clothing_category"
    );
    const catData = await foodCategory.find({}).toArray();
    global.clothing_items = data;
    global.clothing_category = catData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
module.exports = mongoDB;
