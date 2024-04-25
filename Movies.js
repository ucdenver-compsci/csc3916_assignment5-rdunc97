var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb+srv://ryanduncan02:G5b6t56hD4bUri67@cluster0.cdwdktp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true });

// Movie schema
var MovieSchema = new Schema({
    title: { type: String, required: true, index: true },
    releaseDate: { type: Number, min: [1900, 'Must be greater than 1899'], max: [2100, 'Must be less than 2100']},
    genre: {
      type: String,
      enum: [
        'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller', 'Western', 'Science Fiction'
      ],
    },
    actors: [{
      actorName: String,
      characterName: String,
    }],
    imageURL: { type: String }, 
  });

MovieSchema.index({ title: 1, releaseDate: 1}, {unique: true});
// return the model
//module.exports = mongoose.model('Movie', MovieSchema);
const Movie = mongoose.model('Movie', MovieSchema);

const addMovies = [
  {
    "title": "Inception",
    "releaseDate": 2010,
    "genre": "Science Fiction",
    "actors": [
      {"actorName": "Leonardo DiCaprio", "characterName": "Dom Cobb"},
      {"actorName": "Ellen Page", "characterName": "Ariadne"},
      {"actorName": "Joseph Gordon-Levitt", "characterName": "Arthur"}
    ],
    "imageURL": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
  },
  {
    "title": "The Shawshank Redemption",
    "releaseDate": 1994,
    "genre": "Drama",
    "actors": [
      {"actorName": "Tim Robbins", "characterName": "Andy Dufresne"},
      {"actorName": "Morgan Freeman", "characterName": "Ellis Boyd 'Red' Redding"},
      {"actorName": "Bob Gunton", "characterName": "Warden Samuel Norton"}
    ]
  },
  {
    "title": "The Dark Knight",
    "releaseDate": 2008,
    "genre": "Action",
    "actors": [
      {"actorName": "Christian Bale", "characterName": "Bruce Wayne / Batman"},
      {"actorName": "Heath Ledger", "characterName": "Joker"},
      {"actorName": "Aaron Eckhart", "characterName": "Harvey Dent / Two-Face"}
    ]
  },
  {
    "title": "Forrest Gump",
    "releaseDate": 1994,
    "genre": "Drama",
    "actors": [
      {"actorName": "Tom Hanks", "characterName": "Forrest Gump"},
      {"actorName": "Robin Wright", "characterName": "Jenny Curran"},
      {"actorName": "Gary Sinise", "characterName": "Lieutenant Dan Taylor"}
    ]
  },
  {
    "title": "Pulp Fiction",
    "releaseDate": 1994,
    "genre": "Crime",
    "actors": [
      {"actorName": "John Travolta", "characterName": "Vincent Vega"},
      {"actorName": "Samuel L. Jackson", "characterName": "Jules Winnfield"},
      {"actorName": "Uma Thurman", "characterName": "Mia Wallace"}
    ]
  }
];

module.exports = Movie;