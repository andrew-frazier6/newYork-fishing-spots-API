const mongoose = require("mongoose");
let mongoURI = "";

mongoose.connect(mongoURI, {
  useNewUrlParser: true
});
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/ny_fishing_spots";
}
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(error => console.log("Connection failed!", error));

module.exports = mongoose;
