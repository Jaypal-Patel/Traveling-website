const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema( {
  title: {
    type:  String,
    required: true,
  },
  description: String,
  image: {
    type:  String,
    default: "https://www.freepik.com/free-photo/tourism-leisure-survival-scout-freedom_1066865.htm#fromView=search&page=1&position=9&uuid=89839d92-6d07-440d-8a67-062ef8216b46",
    set: (v) => v === " " ? "https://www.freepik.com/free-photo/tourism-leisure-survival-scout-freedom_1066865.htm#fromView=search&page=1&position=9&uuid=89839d92-6d07-440d-8a67-062ef8216b46" : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;