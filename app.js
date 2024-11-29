const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");

// Mongoose Link
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then( () => {
    console.log("connection to DB");
  })
  .catch( (err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

// // Index Route
// app.get("/testListing", async (req, res) => {
//   let simpleListing = new Listing({
//     title: "My New Villa",
//     description: "By the beach",
//     price: 1500,
//     location: "Indore",
//     country: "India",
//   });
//   await simpleListing.save();
//   console.log("sample was saves");
//   res.send("Success");
// });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

// Index Route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  //console.log(allListings);
  res.render('listings/index', {allListings});
});

app.listen(8080, () => {
  console.log("server is listening to port 8080");
});