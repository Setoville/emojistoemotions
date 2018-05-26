const lib = require('lib');
const mongoose = require('mongoose');

/**
* @param {string} unicode
* @returns {any}
*/


module.exports = async (unicode, context) => {

  var emojiSchema = mongoose.Schema({
    "unicode": String,
    "nickname": String,
    "acousticness": String,
    "danceability": Number,
    "duration_ms": String,
    "energy": Number,
    "instrumentalness": String,
    "key": String,
    "liveness": Number,
    "loudness": Number,
    "mode": Number,
    "popularity": Number,
    "speechiness": String,
    "tempo": String,
    "time_signature": String,
    "valence": Number
  });




  var emoji = mongoose.model('emoji', emojiSchema);

  var url = "mongodb://seto:123@ds235860.mlab.com:35860/emojistoemotionsdatabase";
  return mongoose.connect(url)
    .then(()=>{
        console.log(emoji)
          return emoji.emojicollection.find({"unicode": "U+1F600"},(err, mymodels)=> {
        if (err){
          console.log("error",err);
        }
        console.log("-----------------------", mymodels);
        return mymodels
      });
    })
};
