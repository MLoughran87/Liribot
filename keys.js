console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.ombd = {
    id: process.env.OMDB_ID,
 //   secret: process.env.OMDB_SECRET
}

exports.bandsintown = {
    id: process.env.BANDSINTOWN_ID,
   // secret: process.env.BANDSINTOWN_SECRET
}