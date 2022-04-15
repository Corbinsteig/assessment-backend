const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const {getQuotes, createQuote, deleteQuote} = require('./controller')



app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
app.get("/api/fortune", (req, res) => {
  const fortunes = ['A friend is a present you give yourself.',
  'A friend asks only for your time not your money',
  "A gambler not only will lose what he has, but also will lose what he doesn't have.",
  'A light heart carries you through all the hard times.',
  'A person of words and not deeds is like a garden full of weeds.'
]
let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];
  res.status(200).send(randomFortune);
})
app.get("/api/car", (req, res) => {
  const cars = ['Polaris SUPER SPORT.',
  'McLaren P1',
  "Paganie Huayra",
  'La Ferrari',
  'Bentley Mulliner Bacalar',
  'Mercedes-AMG One',
  'Rolls-Royce Boat Tail',
  'Bugatti La Voiture Noire',
]
let randomIndex = Math.floor(Math.random() * cars.length);
  let randomCar = cars[randomIndex];
  res.status(200).send(randomCar);
})
app.get("/api/random", (req, res) => {
  const randoms = ['Buckingham Palace',
  'Antilia',
  "Villa Leopolda",
  'Villa Les Cèdres',
  'Les Palais Bulles',
  'The Odeon Tower Penthouse'
]
let randomIndex = Math.floor(Math.random() * randoms.length);
  let randomItem = randoms[randomIndex];
  res.status(200).send(randomItem);
})

app.get('/api/quotes', getQuotes)
app.delete('/api/quotes/:quote', deleteQuote)
app.post('/api/quotes', createQuote)
// app.put('/api/quotes/:id', updateQuotes)

app.listen(4000, () => console.log("Server running on 4000"));
