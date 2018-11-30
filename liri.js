require("dotenv").config();
require("./keys.js")

var spotify = new Spotify(keys.spotify);

var axios = require ("axios");

//sporitfy command 
then(function (inquireResponse){
    userCommand = inquireResponse.choice;

    switch (userCommand) {
        case 'spotify-this-song':
            console.log("running");
            inquireResponse.prompt([{
                type: "input",
                message: "What song would you like to search for?",
                name: "search"
            },
            ])
            .then(function (inquireResponse){
                userInput = inquireResponse.search;
                const keys = require('./keys');
                console.log(userInput);
                keys.spotify
                .search({
                    type: "track",
                    query: '${userInput}',
                    limit: '1'
                })
                .then(function (response){
                    console.log ('The artists name is: ${response.tracks.items[0]artists}'
                )
                .catch(function (err){
                    console.log(err);
                    console.log("error")
                })
                })

                break;
            })
    }
}
)

function venuesearch(input) {
    var artists = input;
    artists - artists.charAt(0).toUpperCase() + artists.slice(1);

    axious.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function(response){
            console.log("here are " + response.data.length + " upcoming concert venues for " + artist + ".\r\n");
            for(i = 0 ; i < response.data.length; i++) {
                var venue = response.data[i].venue;
                var date = response.data[i].datetime;
                var formatDate = moment(date).format('MM/DD/YYYY');
                var dateUntil = moment(date).diff(moment(), 'days');

                console.log("this " + artist + " concert is at " + venue.name + ".");
                console.log("the " + artist + " concert is located in " + venue.city + " " + venue.region + ", " + venue.country + ".")
                console.log("The " + artist + " concert is on " + formatDate + ", this is in " + dateUntil + " days.");
                console.log("----------------------------------------------------");
            
            }
        },
    

function randomTxt() {
    fs.readFile('random.txt', 'utf8', function (err, data){
        var randomTxt = data.split(",");
        process.argv[2] = randomTxt [0];
        process.argv[3] = randomTxt [1];
        if (process.argv[2] === 'concert-this') {
            venuesearch(process.argv[3]);
            return
        }
        if (process.argv[2] === 'spotify-this-song') {
            venuesearch(process.argv[3]);
            return 
    }
        if (process.argv[2] === 'movie-this') {
            venuesearch(process.argv[3]);
            return
        }
    else {
        console.log ('Pleas put a valid command inside of the random.txt file!');
        console.log ('There is something wrong with this - please check for typos: ' + data)
    }
    })