## API: New York Fishing Spots

- List of all fishing spots with, fish types, docking types and informational handouts in the state of New York.

- This is the deployed API on Heroku https://newyork-fish-api6.herokuapp.com/

## CREATE:

- create a fishing spot "/newspot/create"

## READ:

- Search the full database "/"

- search by fish type "/fish_types/:fish_types/"

- search by public access "/public_access/:public_access"

- search by county "county/:county/"

- MOST IMPORTANTLY, if you need to add a new species to a spot please do "/:id/fish_types/:fish_types"

## MODEL

const fishingSpot = new Schema({
name: String,
fish_types: [String],
county: String,
public_access: [String],
location: Object,
map: Object
});

## TESTING

- Done with Artillery.
