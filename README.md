## API: New York Fishing Spots

- List of all fishing spots with, fish types, docking types and informational handouts in the state of New York.

- Search for all spots "/"

- search by fish type "/:id/fish_types/:fish_types"

## POST:

- create a fishing spot "/create"

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
