# Command-line-crud-project-pursuit

## About
---
This Pursuit project is about creating a command line application that can handle inventory. Initially this project was supposed to be about clothes but was changed to work with faker and its product generation.

## How To Use
---
Here are the formats for how to use the scripts in this project
```
create()
npm run create <clothing-size>

index()
npm run index

show()
npm run show <clothingId>

destroy()
npm run destroy <clothingId>

update()
npm run update <clothingId> <updatedPriceInCents> <updatedInStock> <updatedClothingSize>

addToCart()
npm run addToCart <clothingId>

cartTotal()
npm run cartTotal

cancelCart()
npm run cancelCart

```

## NPM Packages
---
The packages used for this project were faker, nanoid, and jest.


## Stretch Goal
---
I created tests for the functions in my clothes-controller.js file