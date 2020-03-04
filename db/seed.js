const data = require("../db/data/data.json");
const fishingSpots = require("../db/modules/fishingSpot");

const fishData = data.map(item => {
  const fishingSpots = {};
  fishingSpots.name = item.name;
  fishingSpots.fish_types = item.fish_spec;
  return fishingSpots;
});

fishingSpots.deleteMany({}).then(() => {
  fishingSpots
    .create(fishData)
    .then(fishingData => {
      console.log(fishingData);
    })
    .catch(err => {
      console.log(err);
    });
});

// const countryData = data.map(item => {
//   const country = {}
//   country.name = item.name
//   country.capital = item.capital
//   country.region = item.region
//   country.population = item.population
//   return country
// })
// Country.remove({})
//     .then(() => {
//         Country.create(countryData)
//             .then(countries => {
//                 console.log(countries)
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     })
