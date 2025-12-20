'use strict';
module.exports = {
  async up(queryInterface) {
    const recipeIngredients = [
      {
        recipeId: 1,
        ingredientId: 340,
        measure: '175g',
      },
      {
        recipeId: 1,
        ingredientId: 521,
        measure: '175g',
      },
      {
        recipeId: 1,
        ingredientId: 365,
        measure: '140g',
      },
      {
        recipeId: 1,
        ingredientId: 362,
        measure: '50g',
      },
      {
        recipeId: 1,
        ingredientId: 3,
        measure: '½ tsp',
      },
      {
        recipeId: 1,
        ingredientId: 332,
        measure: '3 Medium',
      },
      {
        recipeId: 1,
        ingredientId: 556,
        measure: '½ tsp',
      },
      {
        recipeId: 1,
        ingredientId: 8,
        measure: '¼ teaspoon',
      },
      {
        recipeId: 1,
        ingredientId: 525,
        measure: '½ tsp',
      },
      {
        recipeId: 1,
        ingredientId: 73,
        measure: '200g',
      },
      {
        recipeId: 1,
        ingredientId: 59,
        measure: '1kg',
      },
      {
        recipeId: 1,
        ingredientId: 455,
        measure: 'Dusting',
      },
      {
        recipeId: 2,
        ingredientId: 281,
        measure: '300g soaked overnight in water',
      },
      {
        recipeId: 2,
        ingredientId: 158,
        measure: '2kg cut into 3cm cubes',
      },
      {
        recipeId: 2,
        ingredientId: 27,
        measure: '120ml',
      },
      {
        recipeId: 2,
        ingredientId: 164,
        measure: '24 Skinned',
      },
      {
        recipeId: 2,
        ingredientId: 292,
        measure: '4 large',
      },
      {
        recipeId: 2,
        ingredientId: 94,
        measure: '2',
      },
      {
        recipeId: 2,
        ingredientId: 159,
        measure: '1',
      },
      {
        recipeId: 2,
        ingredientId: 91,
        measure: '350g',
      },
      {
        recipeId: 2,
        ingredientId: 322,
        measure: '150ml',
      },
      {
        recipeId: 2,
        ingredientId: 521,
        measure: '1 tsp',
      },
      {
        recipeId: 2,
        ingredientId: 123,
        measure: '4 sprigs',
      },
      {
        recipeId: 2,
        ingredientId: 284,
        measure: '4 sprigs',
      },
      {
        recipeId: 2,
        ingredientId: 384,
        measure: '450ml',
      },
      {
        recipeId: 3,
        ingredientId: 340,
        measure: '100g ',
      },
      {
        recipeId: 3,
        ingredientId: 490,
        measure: '900g',
      },
      {
        recipeId: 3,
        ingredientId: 428,
        measure: '3',
      },
      {
        recipeId: 3,
        ingredientId: 106,
        measure: '2 medium',
      },
      {
        recipeId: 3,
        ingredientId: 292,
        measure: '4 sliced',
      },
      {
        recipeId: 3,
        ingredientId: 327,
        measure: '25g',
      },
      {
        recipeId: 3,
        ingredientId: 120,
        measure: '2 tsp',
      },
      {
        recipeId: 3,
        ingredientId: 384,
        measure: '500ml',
      },
      {
        recipeId: 3,
        ingredientId: 382,
        measure: '2',
      },
      {
        recipeId: 3,
        ingredientId: 179,
        measure: '900g',
      },
      {
        recipeId: 4,
        ingredientId: 440,
        measure: '3/4 cup',
      },
      {
        recipeId: 4,
        ingredientId: 177,
        measure: '1/2 cup',
      },
      {
        recipeId: 4,
        ingredientId: 389,
        measure: '1/4 cup',
      },
      {
        recipeId: 4,
        ingredientId: 412,
        measure: '1/2 teaspoon',
      },
      {
        recipeId: 4,
        ingredientId: 297,
        measure: '1/2 teaspoon',
      },
      {
        recipeId: 4,
        ingredientId: 506,
        measure: '4 Tablespoons',
      },
      {
        recipeId: 4,
        ingredientId: 155,
        measure: '2',
      },
      {
        recipeId: 4,
        ingredientId: 535,
        measure: '1 (12 oz.)',
      },
      {
        recipeId: 4,
        ingredientId: 443,
        measure: '3 cups',
      },
      {
        recipeId: 5,
        ingredientId: 285,
        measure: '1 lb',
      },
      {
        recipeId: 5,
        ingredientId: 27,
        measure: '1 tablespoon',
      },
      {
        recipeId: 5,
        ingredientId: 440,
        measure: '2 tablespoons',
      },
      {
        recipeId: 5,
        ingredientId: 15,
        measure: '2 tablespoons',
      },
      {
        recipeId: 5,
        ingredientId: 544,
        measure: '4 tablespoons',
      },
      {
        recipeId: 6,
        ingredientId: 55,
        measure: 'Dash',
      },
      {
        recipeId: 6,
        ingredientId: 339,
        measure: '1 Can',
      },
      {
        recipeId: 6,
        ingredientId: 179,
        measure: '5 thin cut',
      },
      {
        recipeId: 6,
        ingredientId: 321,
        measure: '2 cups',
      },
      {
        recipeId: 7,
        ingredientId: 327,
        measure: '175g/6oz',
      },
      {
        recipeId: 7,
        ingredientId: 88,
        measure: '75g/2½oz',
      },
      {
        recipeId: 7,
        ingredientId: 36,
        measure: '2-3 tbsp',
      },
      {
        recipeId: 7,
        ingredientId: 458,
        measure: '1 tbsp',
      },
      {
        recipeId: 7,
        ingredientId: 340,
        measure: '125g/4½oz',
      },
      {
        recipeId: 7,
        ingredientId: 521,
        measure: '125g/4½oz',
      },
      {
        recipeId: 7,
        ingredientId: 334,
        measure: '125g/4½oz',
      },
      {
        recipeId: 7,
        ingredientId: 230,
        measure: '1',
      },
      {
        recipeId: 7,
        ingredientId: 8,
        measure: '½ tsp',
      },
      {
        recipeId: 7,
        ingredientId: 157,
        measure: '50g/1¾oz',
      },
      {
        recipeId: 8,
        ingredientId: 229,
        measure: '1  bunch',
      },
      {
        recipeId: 8,
        ingredientId: 539,
        measure: '2 strips',
      },
      {
        recipeId: 8,
        ingredientId: 267,
        measure: '3 cloves Chopped',
      },
      {
        recipeId: 8,
        ingredientId: 181,
        measure: '1 medium',
      },
      {
        recipeId: 8,
        ingredientId: 26,
        measure: '1/2 tsp',
      },
      {
        recipeId: 8,
        ingredientId: 40,
        measure: '1 Sprig',
      },
      {
        recipeId: 8,
        ingredientId: 298,
        measure: '1',
      },
      {
        recipeId: 8,
        ingredientId: 569,
        measure: '1',
      },
      {
        recipeId: 8,
        ingredientId: 119,
        measure: '4',
      },
      {
        recipeId: 8,
        ingredientId: 55,
        measure: 'Splash',
      },
      {
        recipeId: 9,
        ingredientId: 396,
        measure: '4-5 pound',
      },
      {
        recipeId: 9,
        ingredientId: 178,
        measure: 'Dash',
      },
      {
        recipeId: 9,
        ingredientId: 181,
        measure: '3',
      },
      {
        recipeId: 9,
        ingredientId: 267,
        measure: '5 cloves',
      },
      {
        recipeId: 9,
        ingredientId: 40,
        measure: '1 Sprig',
      },
      {
        recipeId: 9,
        ingredientId: 420,
        measure: '1 sprig ',
      },
      {
        recipeId: 9,
        ingredientId: 382,
        measure: '4',
      },
      {
        recipeId: 9,
        ingredientId: 452,
        measure: '2 cups',
      },
      {
        recipeId: 9,
        ingredientId: 292,
        measure: '3 Large',
      },
      {
        recipeId: 9,
        ingredientId: 345,
        measure: '1 Tbsp',
      },
      {
        recipeId: 9,
        ingredientId: 179,
        measure: '4 Mashed',
      },
      {
        recipeId: 10,
        ingredientId: 340,
        measure: '1 cup ',
      },
      {
        recipeId: 10,
        ingredientId: 473,
        measure: '3',
      },
      {
        recipeId: 10,
        ingredientId: 248,
        measure: '8 oz ',
      },
      {
        recipeId: 10,
        ingredientId: 3,
        measure: '1 tsp ',
      },
      {
        recipeId: 10,
        ingredientId: 531,
        measure: '3 cups ',
      },
      {
        recipeId: 10,
        ingredientId: 400,
        measure: '1 Jar',
      },
      {
        recipeId: 11,
        ingredientId: 179,
        measure: '225g new',
      },
      {
        recipeId: 11,
        ingredientId: 344,
        measure: '100g ',
      },
      {
        recipeId: 11,
        ingredientId: 363,
        measure: '1 tbsp',
      },
      {
        recipeId: 11,
        ingredientId: 267,
        measure: '1 clove',
      },
      {
        recipeId: 11,
        ingredientId: 25,
        measure: '4 tsp ',
      },
      {
        recipeId: 11,
        ingredientId: 152,
        measure: '400ml',
      },
      {
        recipeId: 11,
        ingredientId: 347,
        measure: '2 tsp',
      },
      {
        recipeId: 11,
        ingredientId: 511,
        measure: '1 tsp',
      },
      {
        recipeId: 11,
        ingredientId: 309,
        measure: '450g boneless',
      },
      {
        recipeId: 11,
        ingredientId: 182,
        measure: '2 fresh kaffir leaves',
      },
      {
        recipeId: 11,
        ingredientId: 160,
        measure: 'handfull',
      },
      {
        recipeId: 11,
        ingredientId: 357,
        measure: 'Boiled',
      },
      {
        recipeId: 12,
        ingredientId: 71,
        measure: '500g',
      },
      {
        recipeId: 12,
        ingredientId: 106,
        measure: '2 chopped',
      },
      {
        recipeId: 12,
        ingredientId: 292,
        measure: '2 chopped',
      },
      {
        recipeId: 12,
        ingredientId: 267,
        measure: '2 cloves',
      },
      {
        recipeId: 12,
        ingredientId: 512,
        measure: '2',
      },
      {
        recipeId: 12,
        ingredientId: 105,
        measure: '200ml',
      },
      {
        recipeId: 12,
        ingredientId: 177,
        measure: '2 Litres',
      },
      {
        recipeId: 12,
        ingredientId: 345,
        measure: '3 tbs',
      },
      {
        recipeId: 12,
        ingredientId: 178,
        measure: '1tbsp',
      },
      {
        recipeId: 12,
        ingredientId: 249,
        measure: '1/2 tsp',
      },
      {
        recipeId: 12,
        ingredientId: 26,
        measure: '1/2 tsp',
      },
      {
        recipeId: 12,
        ingredientId: 55,
        measure: '2 tbs',
      },
      {
        recipeId: 13,
        ingredientId: 179,
        measure: '1.5kg',
      },
      {
        recipeId: 13,
        ingredientId: 340,
        measure: '30g',
      },
      {
        recipeId: 13,
        ingredientId: 264,
        measure: '5 tblsp ',
      },
      {
        recipeId: 13,
        ingredientId: 473,
        measure: '2',
      },
      {
        recipeId: 13,
        ingredientId: 164,
        measure: '7',
      },
      {
        recipeId: 13,
        ingredientId: 292,
        measure: '3 chopped',
      },
      {
        recipeId: 13,
        ingredientId: 121,
        measure: '2 sticks',
      },
      {
        recipeId: 13,
        ingredientId: 279,
        measure: '1 finely chopped ',
      },
      {
        recipeId: 13,
        ingredientId: 322,
        measure: '4 tbsp',
      },
      {
        recipeId: 13,
        ingredientId: 491,
        measure: '1 tbls',
      },
      {
        recipeId: 13,
        ingredientId: 9,
        measure: '400g',
      },
      {
        recipeId: 13,
        ingredientId: 384,
        measure: '350ml',
      },
      {
        recipeId: 13,
        ingredientId: 309,
        measure: '600g',
      },
      {
        recipeId: 13,
        ingredientId: 516,
        measure: '16',
      },
      {
        recipeId: 13,
        ingredientId: 213,
        measure: '2 tbs',
      },
      {
        recipeId: 14,
        ingredientId: 349,
        measure: '320g',
      },
      {
        recipeId: 14,
        ingredientId: 280,
        measure: '4 tbs',
      },
      {
        recipeId: 14,
        ingredientId: 484,
        measure: '3',
      },
      {
        recipeId: 14,
        ingredientId: 53,
        measure: '4 tbs',
      },
      {
        recipeId: 14,
        ingredientId: 282,
        measure: '100ml',
      },
      {
        recipeId: 14,
        ingredientId: 455,
        measure: '1 tbs',
      },
      {
        recipeId: 14,
        ingredientId: 136,
        measure: '3',
      },
      {
        recipeId: 15,
        ingredientId: 340,
        measure: '100g ',
      },
      {
        recipeId: 15,
        ingredientId: 462,
        measure: '175g',
      },
      {
        recipeId: 15,
        ingredientId: 332,
        measure: '2 large',
      },
      {
        recipeId: 15,
        ingredientId: 365,
        measure: '225g',
      },
      {
        recipeId: 15,
        ingredientId: 3,
        measure: '1 tsp ',
      },
      {
        recipeId: 15,
        ingredientId: 425,
        measure: '1 tsp ',
      },
      {
        recipeId: 15,
        ingredientId: 113,
        measure: '3 tbs',
      },
      {
        recipeId: 15,
        ingredientId: 447,
        measure: '275ml',
      },
      {
        recipeId: 15,
        ingredientId: 264,
        measure: 'to serve',
      },
      {
        recipeId: 15,
        ingredientId: 556,
        measure: '1 tsp ',
      },
      {
        recipeId: 16,
        ingredientId: 55,
        measure: '450ml',
      },
      {
        recipeId: 16,
        ingredientId: 327,
        measure: '400g',
      },
      {
        recipeId: 16,
        ingredientId: 425,
        measure: '2 tsp',
      },
      {
        recipeId: 16,
        ingredientId: 511,
        measure: '550ml',
      },
      {
        recipeId: 16,
        ingredientId: 332,
        measure: '5',
      },
      {
        recipeId: 16,
        ingredientId: 178,
        measure: '½ tsp',
      },
      {
        recipeId: 16,
        ingredientId: 411,
        measure: '2 tsp',
      },
      {
        recipeId: 16,
        ingredientId: 292,
        measure: '500g grated',
      },
      {
        recipeId: 16,
        ingredientId: 260,
        measure: '150g',
      },
      {
        recipeId: 16,
        ingredientId: 248,
        measure: '200g',
      },
      {
        recipeId: 16,
        ingredientId: 521,
        measure: '150g',
      },
      {
        recipeId: 16,
        ingredientId: 340,
        measure: '100g ',
      },
      {
        recipeId: 17,
        ingredientId: 542,
        measure: '2',
      },
      {
        recipeId: 17,
        ingredientId: 539,
        measure: '3',
      },
      {
        recipeId: 17,
        ingredientId: 171,
        measure: '2',
      },
      {
        recipeId: 17,
        ingredientId: 24,
        measure: '2',
      },
      {
        recipeId: 17,
        ingredientId: 290,
        measure: '1 Slice',
      },
      {
        recipeId: 17,
        ingredientId: 332,
        measure: '2',
      },
      {
        recipeId: 17,
        ingredientId: 296,
        measure: '1 Slice',
      },
      {
        recipeId: 18,
        ingredientId: 27,
        measure: '2 tbs',
      },
      {
        recipeId: 18,
        ingredientId: 6,
        measure: '8',
      },
      {
        recipeId: 18,
        ingredientId: 496,
        measure: '200g',
      },
      {
        recipeId: 18,
        ingredientId: 162,
        measure: '4',
      },
      {
        recipeId: 18,
        ingredientId: 87,
        measure: '1 can ',
      },
      {
        recipeId: 18,
        ingredientId: 332,
        measure: '2',
      },
      {
        recipeId: 18,
        ingredientId: 529,
        measure: 'Dash',
      },
      {
        recipeId: 18,
        ingredientId: 24,
        measure: '4 Chopped',
      },
      {
        recipeId: 18,
        ingredientId: 208,
        measure: '1/4 ',
      },
      {
        recipeId: 18,
        ingredientId: 289,
        measure: '1 tbs',
      },
      {
        recipeId: 18,
        ingredientId: 103,
        measure: '4 tbs',
      },
      {
        recipeId: 19,
        ingredientId: 179,
        measure: '2',
      },
      {
        recipeId: 19,
        ingredientId: 464,
        measure: '1',
      },
      {
        recipeId: 19,
        ingredientId: 267,
        measure: '2 cloves',
      },
      {
        recipeId: 19,
        ingredientId: 182,
        measure: '1',
      },
      {
        recipeId: 19,
        ingredientId: 296,
        measure: '2',
      },
      {
        recipeId: 19,
        ingredientId: 14,
        measure: '1 lb',
      },
      {
        recipeId: 19,
        ingredientId: 18,
        measure: ' ',
      },
      {
        recipeId: 19,
        ingredientId: 529,
        measure: ' ',
      },
      {
        recipeId: 19,
        ingredientId: 366,
        measure: ' ',
      },
      {
        recipeId: 19,
        ingredientId: 511,
        measure: ' ',
      },
      {
        recipeId: 19,
        ingredientId: 55,
        measure: ' ',
      },
      {
        recipeId: 19,
        ingredientId: 178,
        measure: ' ',
      },
      {
        recipeId: 19,
        ingredientId: 249,
        measure: ' ',
      },
      {
        recipeId: 20,
        ingredientId: 257,
        measure: '400g',
      },
      {
        recipeId: 20,
        ingredientId: 524,
        measure: '8',
      },
      {
        recipeId: 20,
        ingredientId: 215,
        measure: '2 pinches',
      },
      {
        recipeId: 20,
        ingredientId: 27,
        measure: '5 tblsp ',
      },
      {
        recipeId: 20,
        ingredientId: 106,
        measure: '1 large',
      },
      {
        recipeId: 20,
        ingredientId: 267,
        measure: '3 cloves',
      },
      {
        recipeId: 20,
        ingredientId: 26,
        measure: '2 tbs',
      },
      {
        recipeId: 20,
        ingredientId: 271,
        measure: '1 tail',
      },
      {
        recipeId: 20,
        ingredientId: 75,
        measure: '4',
      },
      {
        recipeId: 20,
        ingredientId: 504,
        measure: '650ml',
      },
      {
        recipeId: 20,
        ingredientId: 24,
        measure: '2 large',
      },
      {
        recipeId: 20,
        ingredientId: 202,
        measure: 'Juice of 1',
      },
      {
        recipeId: 20,
        ingredientId: 213,
        measure: 'Topping',
      },
      {
        recipeId: 21,
        ingredientId: 292,
        measure: '6 chopped',
      },
      {
        recipeId: 21,
        ingredientId: 181,
        measure: '1 sliced',
      },
      {
        recipeId: 21,
        ingredientId: 279,
        measure: '4',
      },
      {
        recipeId: 21,
        ingredientId: 247,
        measure: '1 tsp ',
      },
      {
        recipeId: 21,
        ingredientId: 294,
        measure: '1/2 tsp',
      },
      {
        recipeId: 21,
        ingredientId: 27,
        measure: '1 tbs',
      },
      {
        recipeId: 21,
        ingredientId: 537,
        measure: '1/4 tsp',
      },
      {
        recipeId: 21,
        ingredientId: 289,
        measure: '1 tsp ',
      },
      {
        recipeId: 22,
        ingredientId: 162,
        measure: '1 Packet',
      },
      {
        recipeId: 22,
        ingredientId: 10,
        measure: '150g',
      },
      {
        recipeId: 22,
        ingredientId: 181,
        measure: '150g',
      },
      {
        recipeId: 22,
        ingredientId: 335,
        measure: '40g',
      },
      {
        recipeId: 22,
        ingredientId: 178,
        measure: 'Dash',
      },
      {
        recipeId: 22,
        ingredientId: 249,
        measure: 'Dash',
      },
      {
        recipeId: 23,
        ingredientId: 489,
        measure: 'Handful',
      },
      {
        recipeId: 23,
        ingredientId: 512,
        measure: '4',
      },
      {
        recipeId: 23,
        ingredientId: 267,
        measure: '4 cloves',
      },
      {
        recipeId: 23,
        ingredientId: 40,
        measure: 'Handful',
      },
      {
        recipeId: 23,
        ingredientId: 416,
        measure: '4',
      },
      {
        recipeId: 23,
        ingredientId: 322,
        measure: '100ml',
      },
      {
        recipeId: 24,
        ingredientId: 340,
        measure: '250g',
      },
      {
        recipeId: 24,
        ingredientId: 327,
        measure: '350g',
      },
      {
        recipeId: 24,
        ingredientId: 202,
        measure: 'Juice of 1/2',
      },
      {
        recipeId: 24,
        ingredientId: 467,
        measure: '200g',
      },
      {
        recipeId: 24,
        ingredientId: 318,
        measure: '50g',
      },
      {
        recipeId: 24,
        ingredientId: 462,
        measure: '100g ',
      },
      {
        recipeId: 24,
        ingredientId: 411,
        measure: '1 tsp ',
      },
      {
        recipeId: 24,
        ingredientId: 283,
        measure: '1 tsp ',
      },
      {
        recipeId: 24,
        ingredientId: 480,
        measure: '1 tsp ',
      },
      {
        recipeId: 24,
        ingredientId: 332,
        measure: '1 beaten',
      },
      {
        recipeId: 24,
        ingredientId: 511,
        measure: 'spinkling',
      },
      {
        recipeId: 25,
        ingredientId: 14,
        measure: '200g',
      },
      {
        recipeId: 25,
        ingredientId: 417,
        measure: '1',
      },
      {
        recipeId: 25,
        ingredientId: 177,
        measure: 'Dash',
      },
      {
        recipeId: 25,
        ingredientId: 178,
        measure: '1/2 tsp',
      },
      {
        recipeId: 25,
        ingredientId: 511,
        measure: '1 tsp ',
      },
      {
        recipeId: 25,
        ingredientId: 440,
        measure: '10g',
      },
      {
        recipeId: 25,
        ingredientId: 381,
        measure: '10g',
      },
      {
        recipeId: 25,
        ingredientId: 491,
        measure: '30g',
      },
      {
        recipeId: 25,
        ingredientId: 501,
        measure: '10g',
      },
      {
        recipeId: 25,
        ingredientId: 294,
        measure: 'Dash',
      },
      {
        recipeId: 26,
        ingredientId: 229,
        measure: '1  bunch',
      },
      {
        recipeId: 26,
        ingredientId: 252,
        measure: '8',
      },
      {
        recipeId: 26,
        ingredientId: 2,
        measure: '1 Head chopped',
      },
      {
        recipeId: 26,
        ingredientId: 279,
        measure: '8',
      },
      {
        recipeId: 26,
        ingredientId: 181,
        measure: 'Sliced',
      },
      {
        recipeId: 26,
        ingredientId: 415,
        measure: 'Sliced',
      },
      {
        recipeId: 26,
        ingredientId: 384,
        measure: '1 cup ',
      },
      {
        recipeId: 26,
        ingredientId: 178,
        measure: ' ',
      },
      {
        recipeId: 26,
        ingredientId: 249,
        measure: ' ',
      },
      {
        recipeId: 27,
        ingredientId: 263,
        measure: '2 tbs',
      },
      {
        recipeId: 27,
        ingredientId: 313,
        measure: '4',
      },
      {
        recipeId: 27,
        ingredientId: 452,
        measure: '1 1/2 cup ',
      },
      {
        recipeId: 27,
        ingredientId: 340,
        measure: '2 tbs',
      },
      {
        recipeId: 27,
        ingredientId: 267,
        measure: '2 cloves minced',
      },
      {
        recipeId: 27,
        ingredientId: 209,
        measure: '1 medium finely diced',
      },
      {
        recipeId: 27,
        ingredientId: 171,
        measure: '4 oz ',
      },
      {
        recipeId: 27,
        ingredientId: 79,
        measure: '¼ cup',
      },
      {
        recipeId: 27,
        ingredientId: 426,
        measure: '¼ cup',
      },
      {
        recipeId: 27,
        ingredientId: 456,
        measure: '1 tbs',
      },
      {
        recipeId: 27,
        ingredientId: 120,
        measure: '1 tbs',
      },
      {
        recipeId: 27,
        ingredientId: 572,
        measure: 'Dash',
      },
      {
        recipeId: 27,
        ingredientId: 213,
        measure: '1 tbs minced',
      },
      {
        recipeId: 27,
        ingredientId: 560,
        measure: '1 tbs minced',
      },
      {
        recipeId: 27,
        ingredientId: 178,
        measure: 'to taste',
      },
      {
        recipeId: 27,
        ingredientId: 249,
        measure: 'to taste',
      },
      {
        recipeId: 28,
        ingredientId: 447,
        measure: '200ml',
      },
      {
        recipeId: 28,
        ingredientId: 335,
        measure: '60ml',
      },
      {
        recipeId: 28,
        ingredientId: 332,
        measure: '2',
      },
      {
        recipeId: 28,
        ingredientId: 531,
        measure: '1600g',
      },
      {
        recipeId: 28,
        ingredientId: 3,
        measure: '3 tsp',
      },
      {
        recipeId: 28,
        ingredientId: 178,
        measure: '1/2 tsp',
      },
      {
        recipeId: 28,
        ingredientId: 62,
        measure: '25g',
      },
      {
        recipeId: 28,
        ingredientId: 511,
        measure: '45g',
      },
      {
        recipeId: 28,
        ingredientId: 238,
        measure: '3 tbs',
      },
      {
        recipeId: 29,
        ingredientId: 2,
        measure: '1',
      },
      {
        recipeId: 29,
        ingredientId: 340,
        measure: '2 tbs',
      },
      {
        recipeId: 29,
        ingredientId: 181,
        measure: '1 chopped',
      },
      {
        recipeId: 29,
        ingredientId: 393,
        measure: '1 lb',
      },
      {
        recipeId: 29,
        ingredientId: 401,
        measure: '1/2 lb',
      },
      {
        recipeId: 29,
        ingredientId: 357,
        measure: '1 1/2 cups ',
      },
      {
        recipeId: 29,
        ingredientId: 267,
        measure: '1 tsp ',
      },
      {
        recipeId: 29,
        ingredientId: 178,
        measure: '1 tsp ',
      },
      {
        recipeId: 29,
        ingredientId: 175,
        measure: '1/4 tsp',
      },
      {
        recipeId: 29,
        ingredientId: 491,
        measure: '3 cans',
      },
      {
        recipeId: 30,
        ingredientId: 10,
        measure: '400g',
      },
      {
        recipeId: 30,
        ingredientId: 27,
        measure: '2 tbs',
      },
      {
        recipeId: 30,
        ingredientId: 50,
        measure: '2',
      },
      {
        recipeId: 30,
        ingredientId: 181,
        measure: 'Chopped',
      },
      {
        recipeId: 30,
        ingredientId: 203,
        measure: '1/4 ',
      },
      {
        recipeId: 30,
        ingredientId: 137,
        measure: '2 sliced',
      },
      {
        recipeId: 30,
        ingredientId: 90,
        measure: '2 large',
      },
      {
        recipeId: 30,
        ingredientId: 300,
        measure: '1 cup ',
      },
      {
        recipeId: 30,
        ingredientId: 148,
        measure: '2 tsp',
      },
      {
        recipeId: 30,
        ingredientId: 249,
        measure: 'Pinch',
      },
      {
        recipeId: 30,
        ingredientId: 345,
        measure: '2 tsp',
      },
      {
        recipeId: 30,
        ingredientId: 311,
        measure: '1 1/2 tsp ',
      },
      {
        recipeId: 30,
        ingredientId: 550,
        measure: '1 1/2 tsp ',
      },
      {
        recipeId: 30,
        ingredientId: 26,
        measure: '1/2 tsp',
      },
      {
        recipeId: 31,
        ingredientId: 315,
        measure: '6 small',
      },
      {
        recipeId: 31,
        ingredientId: 353,
        measure: '4 small',
      },
      {
        recipeId: 31,
        ingredientId: 569,
        measure: '1 thinly sliced',
      },
      {
        recipeId: 31,
        ingredientId: 434,
        measure: '1 medium',
      },
      {
        recipeId: 31,
        ingredientId: 181,
        measure: '1 finely chopped ',
      },
      {
        recipeId: 31,
        ingredientId: 286,
        measure: '300g',
      },
      {
        recipeId: 31,
        ingredientId: 26,
        measure: '1 tsp ',
      },
      {
        recipeId: 31,
        ingredientId: 215,
        measure: 'pinch',
      },
      {
        recipeId: 31,
        ingredientId: 322,
        measure: '200ml',
      },
      {
        recipeId: 31,
        ingredientId: 329,
        measure: '700ml',
      },
      {
        recipeId: 31,
        ingredientId: 395,
        measure: '100g ',
      },
      {
        recipeId: 31,
        ingredientId: 202,
        measure: '1 chopped',
      },
      {
        recipeId: 31,
        ingredientId: 213,
        measure: 'Handful',
      },
      {
        recipeId: 31,
        ingredientId: 178,
        measure: 'pinch',
      },
      {
        recipeId: 31,
        ingredientId: 175,
        measure: 'pinch',
      },
      {
        recipeId: 32,
        ingredientId: 353,
        measure: '2 medium',
      },
      {
        recipeId: 32,
        ingredientId: 213,
        measure: '2 tbs chopped',
      },
      {
        recipeId: 32,
        ingredientId: 202,
        measure: 'Juice of 1',
      },
      {
        recipeId: 32,
        ingredientId: 536,
        measure: '175g',
      },
      {
        recipeId: 32,
        ingredientId: 27,
        measure: '1 tbs',
      },
      {
        recipeId: 32,
        ingredientId: 285,
        measure: '350g',
      },
      {
        recipeId: 32,
        ingredientId: 516,
        measure: 'to serve',
      },
      {
        recipeId: 33,
        ingredientId: 106,
        measure: '2 finely chopped',
      },
      {
        recipeId: 33,
        ingredientId: 40,
        measure: 'sprigs of fresh',
      },
      {
        recipeId: 33,
        ingredientId: 27,
        measure: '2 tbs',
      },
      {
        recipeId: 33,
        ingredientId: 179,
        measure: '1.5kg',
      },
      {
        recipeId: 33,
        ingredientId: 329,
        measure: '425g',
      },
      {
        recipeId: 34,
        ingredientId: 41,
        measure: '25g',
      },
      {
        recipeId: 34,
        ingredientId: 319,
        measure: '500g',
      },
      {
        recipeId: 34,
        ingredientId: 247,
        measure: '1 tsp ',
      },
      {
        recipeId: 34,
        ingredientId: 294,
        measure: '1 tsp ',
      },
      {
        recipeId: 34,
        ingredientId: 26,
        measure: '1 tsp ',
      },
      {
        recipeId: 34,
        ingredientId: 267,
        measure: '1 clove finely chopped',
      },
      {
        recipeId: 34,
        ingredientId: 27,
        measure: 'For frying',
      },
      {
        recipeId: 34,
        ingredientId: 117,
        measure: '4',
      },
      {
        recipeId: 34,
        ingredientId: 208,
        measure: 'Grated',
      },
      {
        recipeId: 34,
        ingredientId: 83,
        measure: '200g',
      },
      {
        recipeId: 34,
        ingredientId: 355,
        measure: '2 tbs',
      },
      {
        recipeId: 35,
        ingredientId: 6,
        measure: '1  bunch',
      },
      {
        recipeId: 35,
        ingredientId: 27,
        measure: 'Dash',
      },
      {
        recipeId: 35,
        ingredientId: 390,
        measure: '1 finely sliced',
      },
      {
        recipeId: 35,
        ingredientId: 267,
        measure: '1 clove',
      },
      {
        recipeId: 35,
        ingredientId: 524,
        measure: '350g',
      },
      {
        recipeId: 35,
        ingredientId: 414,
        measure: '75g',
      },
      {
        recipeId: 35,
        ingredientId: 340,
        measure: '15g',
      },
      {
        recipeId: 35,
        ingredientId: 327,
        measure: '250g',
      },
      {
        recipeId: 35,
        ingredientId: 417,
        measure: '1 Seperated',
      },
      {
        recipeId: 35,
        ingredientId: 148,
        measure: '1/2 tsp',
      },
      {
        recipeId: 36,
        ingredientId: 55,
        measure: '1 tbs',
      },
      {
        recipeId: 36,
        ingredientId: 181,
        measure: '1 large',
      },
      {
        recipeId: 36,
        ingredientId: 14,
        measure: '1 chopped',
      },
      {
        recipeId: 36,
        ingredientId: 329,
        measure: '150ml',
      },
      {
        recipeId: 36,
        ingredientId: 440,
        measure: '1 tbs',
      },
      {
        recipeId: 36,
        ingredientId: 221,
        measure: '1 tsp ',
      },
      {
        recipeId: 36,
        ingredientId: 511,
        measure: '1 tsp ',
      },
      {
        recipeId: 36,
        ingredientId: 332,
        measure: '2 Beaten ',
      },
      {
        recipeId: 36,
        ingredientId: 468,
        measure: '200g',
      },
      {
        recipeId: 36,
        ingredientId: 560,
        measure: 'Chopped',
      },
      {
        recipeId: 37,
        ingredientId: 27,
        measure: '4 tbs',
      },
      {
        recipeId: 37,
        ingredientId: 490,
        measure: '750g',
      },
      {
        recipeId: 37,
        ingredientId: 215,
        measure: '1 1/2 tsp ',
      },
      {
        recipeId: 37,
        ingredientId: 181,
        measure: '1 Large Chopped',
      },
      {
        recipeId: 37,
        ingredientId: 177,
        measure: '25 ml',
      },
      {
        recipeId: 37,
        ingredientId: 213,
        measure: '30g',
      },
      {
        recipeId: 37,
        ingredientId: 340,
        measure: '1 tbs',
      },
      {
        recipeId: 37,
        ingredientId: 202,
        measure: '1',
      },
      {
        recipeId: 38,
        ingredientId: 156,
        measure: '1kg',
      },
      {
        recipeId: 38,
        ingredientId: 528,
        measure: '200g (soaked overnight)',
      },
      {
        recipeId: 38,
        ingredientId: 106,
        measure: '2 chopped',
      },
      {
        recipeId: 38,
        ingredientId: 292,
        measure: '2 chopped',
      },
      {
        recipeId: 38,
        ingredientId: 382,
        measure: '2',
      },
      {
        recipeId: 38,
        ingredientId: 121,
        measure: '1 chopped',
      },
      {
        recipeId: 38,
        ingredientId: 395,
        measure: '300g',
      },
      {
        recipeId: 38,
        ingredientId: 296,
        measure: 'to serve',
      },
      {
        recipeId: 39,
        ingredientId: 58,
        measure: '450g',
      },
      {
        recipeId: 39,
        ingredientId: 35,
        measure: '400g',
      },
      {
        recipeId: 39,
        ingredientId: 181,
        measure: '1 chopped',
      },
      {
        recipeId: 39,
        ingredientId: 26,
        measure: '1 tsp ',
      },
      {
        recipeId: 39,
        ingredientId: 564,
        measure: '2 tsp',
      },
      {
        recipeId: 39,
        ingredientId: 570,
        measure: '2 tsp',
      },
      {
        recipeId: 39,
        ingredientId: 529,
        measure: '1 tsp ',
      },
      {
        recipeId: 39,
        ingredientId: 569,
        measure: '1 sliced',
      },
      {
        recipeId: 39,
        ingredientId: 32,
        measure: '1 sliced',
      },
      {
        recipeId: 39,
        ingredientId: 24,
        measure: '200g',
      },
      {
        recipeId: 39,
        ingredientId: 178,
        measure: 'to taste',
      },
      {
        recipeId: 39,
        ingredientId: 249,
        measure: 'to taste',
      },
      {
        recipeId: 39,
        ingredientId: 365,
        measure: '250g',
      },
      {
        recipeId: 39,
        ingredientId: 350,
        measure: '30g',
      },
      {
        recipeId: 39,
        ingredientId: 27,
        measure: 'for frying',
      },
      {
        recipeId: 40,
        ingredientId: 471,
        measure: '175g/6oz',
      },
      {
        recipeId: 40,
        ingredientId: 340,
        measure: '75g/3oz',
      },
      {
        recipeId: 40,
        ingredientId: 172,
        measure: '200g/7oz',
      },
      {
        recipeId: 40,
        ingredientId: 521,
        measure: '75g/3oz',
      },
      {
        recipeId: 40,
        ingredientId: 70,
        measure: '2',
      },
      {
        recipeId: 40,
        ingredientId: 334,
        measure: '75g/3oz',
      },
      {
        recipeId: 40,
        ingredientId: 8,
        measure: '1 tsp',
      },
      {
        recipeId: 40,
        ingredientId: 157,
        measure: '50g/1¾oz',
      },
      {
        recipeId: 41,
        ingredientId: 309,
        measure: '1.2 kg',
      },
      {
        recipeId: 41,
        ingredientId: 181,
        measure: '5 thinly sliced',
      },
      {
        recipeId: 41,
        ingredientId: 24,
        measure: '2 finely chopped',
      },
      {
        recipeId: 41,
        ingredientId: 267,
        measure: '8 cloves chopped',
      },
      {
        recipeId: 41,
        ingredientId: 397,
        measure: '1 tbsp',
      },
      {
        recipeId: 41,
        ingredientId: 55,
        measure: '¼ cup',
      },
      {
        recipeId: 41,
        ingredientId: 42,
        measure: '2 tsp',
      },
      {
        recipeId: 41,
        ingredientId: 69,
        measure: '3 tsp',
      },
      {
        recipeId: 41,
        ingredientId: 146,
        measure: '1 tsp',
      },
      {
        recipeId: 41,
        ingredientId: 448,
        measure: '1 tsp',
      },
      {
        recipeId: 41,
        ingredientId: 530,
        measure: '2',
      },
      {
        recipeId: 41,
        ingredientId: 212,
        measure: '1 cup',
      },
      {
        recipeId: 41,
        ingredientId: 330,
        measure: '¾ cup',
      },
      {
        recipeId: 41,
        ingredientId: 98,
        measure: '3 tsp Dried',
      },
      {
        recipeId: 41,
        ingredientId: 537,
        measure: '1 tsp',
      },
      {
        recipeId: 41,
        ingredientId: 178,
        measure: 'To taste',
      },
      {
        recipeId: 42,
        ingredientId: 340,
        measure: '50g',
      },
      {
        recipeId: 42,
        ingredientId: 413,
        measure: '175g',
      },
      {
        recipeId: 42,
        ingredientId: 269,
        measure: '5',
      },
      {
        recipeId: 42,
        ingredientId: 291,
        measure: '500g',
      },
      {
        recipeId: 42,
        ingredientId: 238,
        measure: '175g',
      },
      {
        recipeId: 42,
        ingredientId: 278,
        measure: '175g',
      },
      {
        recipeId: 42,
        ingredientId: 447,
        measure: '150ml',
      },
      {
        recipeId: 42,
        ingredientId: 264,
        measure: '275ml',
      },
      {
        recipeId: 42,
        ingredientId: 567,
        measure: '2 tblsp ',
      },
      {
        recipeId: 42,
        ingredientId: 407,
        measure: 'Crushed',
      },
      {
        recipeId: 43,
        ingredientId: 71,
        measure: '1kg',
      },
      {
        recipeId: 43,
        ingredientId: 106,
        measure: '3',
      },
      {
        recipeId: 43,
        ingredientId: 267,
        measure: '4 cloves',
      },
      {
        recipeId: 43,
        ingredientId: 27,
        measure: 'Dash',
      },
      {
        recipeId: 43,
        ingredientId: 555,
        measure: '300g',
      },
      {
        recipeId: 43,
        ingredientId: 247,
        measure: '2 tsp',
      },
      {
        recipeId: 43,
        ingredientId: 163,
        measure: '1 tsp',
      },
      {
        recipeId: 43,
        ingredientId: 255,
        measure: '1 large',
      },
      {
        recipeId: 43,
        ingredientId: 382,
        measure: '3',
      },
      {
        recipeId: 43,
        ingredientId: 284,
        measure: '2 tsp dried',
      },
      {
        recipeId: 43,
        ingredientId: 109,
        measure: '2 ancho',
      },
      {
        recipeId: 43,
        ingredientId: 510,
        measure: '3 tbsp',
      },
      {
        recipeId: 43,
        ingredientId: 472,
        measure: '2 x 400g',
      },
      {
        recipeId: 43,
        ingredientId: 366,
        measure: '2 tbsp',
      },
      {
        recipeId: 43,
        ingredientId: 127,
        measure: '2 tbsp',
      },
      {
        recipeId: 43,
        ingredientId: 522,
        measure: '2 x 400g tins',
      },
      {
        recipeId: 44,
        ingredientId: 327,
        measure: '250g',
      },
      {
        recipeId: 44,
        ingredientId: 340,
        measure: '135g',
      },
      {
        recipeId: 44,
        ingredientId: 278,
        measure: '400g',
      },
      {
        recipeId: 44,
        ingredientId: 379,
        measure: '150g',
      },
      {
        recipeId: 44,
        ingredientId: 133,
        measure: 'Zest of 2',
      },
      {
        recipeId: 44,
        ingredientId: 332,
        measure: '1 beaten',
      },
      {
        recipeId: 45,
        ingredientId: 483,
        measure: '500g',
      },
      {
        recipeId: 45,
        ingredientId: 178,
        measure: '1 tsp ',
      },
      {
        recipeId: 45,
        ingredientId: 543,
        measure: '7g',
      },
      {
        recipeId: 45,
        ingredientId: 447,
        measure: '300ml ',
      },
      {
        recipeId: 45,
        ingredientId: 340,
        measure: '40g',
      },
      {
        recipeId: 45,
        ingredientId: 332,
        measure: '1',
      },
      {
        recipeId: 45,
        ingredientId: 55,
        measure: 'Dash',
      },
      {
        recipeId: 45,
        ingredientId: 389,
        measure: '75g',
      },
      {
        recipeId: 45,
        ingredientId: 411,
        measure: '2 tsp',
      },
      {
        recipeId: 45,
        ingredientId: 92,
        measure: '150g',
      },
      {
        recipeId: 45,
        ingredientId: 521,
        measure: '2 tbs',
      },
      {
        recipeId: 46,
        ingredientId: 216,
        measure: '85g',
      },
      {
        recipeId: 46,
        ingredientId: 67,
        measure: '400ml can',
      },
      {
        recipeId: 46,
        ingredientId: 104,
        measure: '4 tbsp',
      },
      {
        recipeId: 46,
        ingredientId: 71,
        measure: '600g stewing cut into strips',
      },
      {
        recipeId: 46,
        ingredientId: 179,
        measure: '450g waxy',
      },
      {
        recipeId: 46,
        ingredientId: 181,
        measure: '1 cut thin wedges',
      },
      {
        recipeId: 46,
        ingredientId: 182,
        measure: '4 leaves',
      },
      {
        recipeId: 46,
        ingredientId: 255,
        measure: '1',
      },
      {
        recipeId: 46,
        ingredientId: 132,
        measure: '1 tbsp',
      },
      {
        recipeId: 46,
        ingredientId: 389,
        measure: '1 tbsp palm or soft light',
      },
      {
        recipeId: 46,
        ingredientId: 224,
        measure: '1 tbsp',
      },
      {
        recipeId: 46,
        ingredientId: 465,
        measure: '1 red deseeded and finely sliced, to serve',
      },
      {
        recipeId: 46,
        ingredientId: 61,
        measure: 'to serve',
      },
      {
        recipeId: 47,
        ingredientId: 110,
        measure: '2 tblsp ',
      },
      {
        recipeId: 47,
        ingredientId: 181,
        measure: '1 finely chopped ',
      },
      {
        recipeId: 47,
        ingredientId: 121,
        measure: '1',
      },
      {
        recipeId: 47,
        ingredientId: 442,
        measure: '1 sliced',
      },
      {
        recipeId: 47,
        ingredientId: 179,
        measure: '1 medium',
      },
      {
        recipeId: 47,
        ingredientId: 340,
        measure: '1 knob',
      },
      {
        recipeId: 47,
        ingredientId: 329,
        measure: '1 litre hot',
      },
      {
        recipeId: 47,
        ingredientId: 134,
        measure: '1 Head chopped',
      },
      {
        recipeId: 47,
        ingredientId: 13,
        measure: '140g',
      },
      {
        recipeId: 48,
        ingredientId: 444,
        measure: '2 cups',
      },
      {
        recipeId: 48,
        ingredientId: 46,
        measure: '3 cups',
      },
      {
        recipeId: 48,
        ingredientId: 238,
        measure: '½ cup',
      },
      {
        recipeId: 48,
        ingredientId: 556,
        measure: '1 tsp',
      },
      {
        recipeId: 48,
        ingredientId: 216,
        measure: '1 ¼ cups',
      },
      {
        recipeId: 49,
        ingredientId: 542,
        measure: '8 large',
      },
      {
        recipeId: 49,
        ingredientId: 324,
        measure: '1 Jar',
      },
      {
        recipeId: 49,
        ingredientId: 364,
        measure: '1200g',
      },
      {
        recipeId: 49,
        ingredientId: 113,
        measure: '1 tbls',
      },
      {
        recipeId: 49,
        ingredientId: 191,
        measure: '1 tsp ',
      },
      {
        recipeId: 50,
        ingredientId: 475,
        measure: '250g',
      },
      {
        recipeId: 50,
        ingredientId: 455,
        measure: '100g ',
      },
      {
        recipeId: 50,
        ingredientId: 473,
        measure: '2',
      },
      {
        recipeId: 50,
        ingredientId: 378,
        measure: '2 tbs',
      },
      {
        recipeId: 50,
        ingredientId: 362,
        measure: '100g ',
      },
      {
        recipeId: 51,
        ingredientId: 124,
        measure: '800g',
      },
      {
        recipeId: 51,
        ingredientId: 340,
        measure: '50g',
      },
      {
        recipeId: 51,
        ingredientId: 279,
        measure: '3 chopped',
      },
      {
        recipeId: 51,
        ingredientId: 2,
        measure: '1 chopped',
      },
      {
        recipeId: 51,
        ingredientId: 6,
        measure: '8',
      },
      {
        recipeId: 51,
        ingredientId: 264,
        measure: '100ml',
      },
      {
        recipeId: 51,
        ingredientId: 345,
        measure: '2 tbs',
      },
      {
        recipeId: 51,
        ingredientId: 156,
        measure: '180g',
      },
      {
        recipeId: 51,
        ingredientId: 332,
        measure: '4',
      },
      {
        recipeId: 52,
        ingredientId: 520,
        measure: '1 1/2 cups ',
      },
      {
        recipeId: 52,
        ingredientId: 357,
        measure: '1 1/2 cups ',
      },
      {
        recipeId: 52,
        ingredientId: 294,
        measure: '1/2 tsp',
      },
      {
        recipeId: 52,
        ingredientId: 176,
        measure: '2 cups ',
      },
      {
        recipeId: 52,
        ingredientId: 574,
        measure: 'Can',
      },
      {
        recipeId: 52,
        ingredientId: 181,
        measure: '1 large',
      },
      {
        recipeId: 52,
        ingredientId: 178,
        measure: 'Sprinking',
      },
      {
        recipeId: 52,
        ingredientId: 55,
        measure: '1/2 cup ',
      },
      {
        recipeId: 53,
        ingredientId: 27,
        measure: '2 tbs',
      },
      {
        recipeId: 53,
        ingredientId: 181,
        measure: '1 medium finely diced',
      },
      {
        recipeId: 53,
        ingredientId: 574,
        measure: '250g',
      },
      {
        recipeId: 53,
        ingredientId: 329,
        measure: '1.5L',
      },
      {
        recipeId: 53,
        ingredientId: 247,
        measure: '1 tsp ',
      },
      {
        recipeId: 53,
        ingredientId: 267,
        measure: '5 cloves',
      },
      {
        recipeId: 53,
        ingredientId: 178,
        measure: '1/2 tsp',
      },
      {
        recipeId: 53,
        ingredientId: 38,
        measure: '1 tsp ',
      },
      {
        recipeId: 53,
        ingredientId: 249,
        measure: 'Pinch',
      },
      {
        recipeId: 53,
        ingredientId: 182,
        measure: '1/2 ',
      },
      {
        recipeId: 54,
        ingredientId: 291,
        measure: '500g',
      },
      {
        recipeId: 54,
        ingredientId: 332,
        measure: '4 large',
      },
      {
        recipeId: 54,
        ingredientId: 531,
        measure: '3 tbs',
      },
      {
        recipeId: 54,
        ingredientId: 511,
        measure: '250g',
      },
      {
        recipeId: 54,
        ingredientId: 411,
        measure: '1 tsp ',
      },
      {
        recipeId: 54,
        ingredientId: 133,
        measure: 'Grated Zest of 2',
      },
      {
        recipeId: 54,
        ingredientId: 498,
        measure: '5 tbs',
      },
      {
        recipeId: 54,
        ingredientId: 455,
        measure: 'sprinking',
      },
      {
        recipeId: 55,
        ingredientId: 543,
        measure: '1/4 ounce',
      },
      {
        recipeId: 55,
        ingredientId: 177,
        measure: '1/4 cup',
      },
      {
        recipeId: 55,
        ingredientId: 511,
        measure: '1/2 cup ',
      },
      {
        recipeId: 55,
        ingredientId: 178,
        measure: '1 tsp ',
      },
      {
        recipeId: 55,
        ingredientId: 332,
        measure: '2',
      },
      {
        recipeId: 55,
        ingredientId: 573,
        measure: '1/3 cup',
      },
      {
        recipeId: 55,
        ingredientId: 531,
        measure: '5 drops',
      },
      {
        recipeId: 55,
        ingredientId: 263,
        measure: 'Sprinking',
      },
      {
        recipeId: 55,
        ingredientId: 447,
        measure: '1/2 cup',
      },
      {
        recipeId: 55,
        ingredientId: 533,
        measure: '1 1/2 cups ',
      },
      {
        recipeId: 55,
        ingredientId: 424,
        measure: '6 tablespoons',
      },
      {
        recipeId: 55,
        ingredientId: 340,
        measure: ' 1/3 cup',
      },
      {
        recipeId: 56,
        ingredientId: 27,
        measure: '1 tbs',
      },
      {
        recipeId: 56,
        ingredientId: 464,
        measure: '2 chopped',
      },
      {
        recipeId: 56,
        ingredientId: 390,
        measure: '1 finely chopped ',
      },
      {
        recipeId: 56,
        ingredientId: 267,
        measure: '1 clove',
      },
      {
        recipeId: 56,
        ingredientId: 294,
        measure: 'Chopped',
      },
      {
        recipeId: 56,
        ingredientId: 536,
        measure: '800g',
      },
      {
        recipeId: 56,
        ingredientId: 521,
        measure: '1 tbs',
      },
      {
        recipeId: 56,
        ingredientId: 332,
        measure: '4',
      },
      {
        recipeId: 56,
        ingredientId: 414,
        measure: 'Spinkling',
      },
      {
        recipeId: 57,
        ingredientId: 285,
        measure: '400g',
      },
      {
        recipeId: 57,
        ingredientId: 206,
        measure: '3',
      },
      {
        recipeId: 57,
        ingredientId: 208,
        measure: '1',
      },
      {
        recipeId: 57,
        ingredientId: 496,
        measure: '400g',
      },
      {
        recipeId: 57,
        ingredientId: 355,
        measure: '4 tbs',
      },
      {
        recipeId: 57,
        ingredientId: 182,
        measure: 'zest and juice of 1',
      },
      {
        recipeId: 57,
        ingredientId: 519,
        measure: '2 tsp',
      },
      {
        recipeId: 57,
        ingredientId: 27,
        measure: '3 tbs',
      },
      {
        recipeId: 58,
        ingredientId: 27,
        measure: '5 tablespoons',
      },
      {
        recipeId: 58,
        ingredientId: 181,
        measure: '1 chopped',
      },
      {
        recipeId: 58,
        ingredientId: 121,
        measure: '1 stalk chopped',
      },
      {
        recipeId: 58,
        ingredientId: 267,
        measure: '1 tablespoon minced',
      },
      {
        recipeId: 58,
        ingredientId: 107,
        measure: '2 cups',
      },
      {
        recipeId: 58,
        ingredientId: 502,
        measure: '1',
      },
      {
        recipeId: 58,
        ingredientId: 177,
        measure: '4 cups',
      },
      {
        recipeId: 58,
        ingredientId: 420,
        measure: '1 fresh sprig',
      },
      {
        recipeId: 58,
        ingredientId: 40,
        measure: '1 fresh sprig',
      },
      {
        recipeId: 58,
        ingredientId: 229,
        measure: '1 pound chopped',
      },
      {
        recipeId: 58,
        ingredientId: 375,
        measure: '4 thick slices',
      },
      {
        recipeId: 58,
        ingredientId: 565,
        measure: '½ cup freshly grated',
      },
      {
        recipeId: 59,
        ingredientId: 81,
        measure: '1 cup',
      },
      {
        recipeId: 59,
        ingredientId: 177,
        measure: '2-1/2 cups',
      },
      {
        recipeId: 59,
        ingredientId: 178,
        measure: '1 tsp',
      },
      {
        recipeId: 59,
        ingredientId: 243,
        measure: '1/4 tsp',
      },
      {
        recipeId: 59,
        ingredientId: 96,
        measure: '3 tbs',
      },
      {
        recipeId: 59,
        ingredientId: 441,
        measure: '1 cup',
      },
      {
        recipeId: 59,
        ingredientId: 42,
        measure: '1/2 tsp',
      },
      {
        recipeId: 59,
        ingredientId: 170,
        measure: '1/2 tsp',
      },
      {
        recipeId: 59,
        ingredientId: 512,
        measure: '2',
      },
      {
        recipeId: 59,
        ingredientId: 283,
        measure: '2 tsp shredded',
      },
      {
        recipeId: 59,
        ingredientId: 532,
        measure: '2 tbs ',
      },
      {
        recipeId: 59,
        ingredientId: 569,
        measure: '1/2 tsp',
      },
      {
        recipeId: 59,
        ingredientId: 511,
        measure: '1 tsp',
      },
      {
        recipeId: 59,
        ingredientId: 537,
        measure: '1/4 tsp',
      },
      {
        recipeId: 60,
        ingredientId: 273,
        measure: '1/2 cup',
      },
      {
        recipeId: 60,
        ingredientId: 301,
        measure: '1/3 cup raw',
      },
      {
        recipeId: 60,
        ingredientId: 3,
        measure: '1 tsp',
      },
      {
        recipeId: 60,
        ingredientId: 80,
        measure: '2',
      },
      {
        recipeId: 60,
        ingredientId: 477,
        measure: '1/2 cup',
      },
      {
        recipeId: 60,
        ingredientId: 533,
        measure: '1 tsp',
      },
      {
        recipeId: 60,
        ingredientId: 177,
        measure: '1/2 cup boiling',
      },
      {
        recipeId: 61,
        ingredientId: 340,
        measure: '75g',
      },
      {
        recipeId: 61,
        ingredientId: 442,
        measure: '1kg',
      },
      {
        recipeId: 61,
        ingredientId: 178,
        measure: '½ tsp',
      },
      {
        recipeId: 61,
        ingredientId: 282,
        measure: '300ml ',
      },
      {
        recipeId: 61,
        ingredientId: 417,
        measure: '1',
      },
      {
        recipeId: 61,
        ingredientId: 473,
        measure: '3',
      },
      {
        recipeId: 61,
        ingredientId: 233,
        measure: '¼ teaspoon',
      },
      {
        recipeId: 61,
        ingredientId: 327,
        measure: '225g',
      },
      {
        recipeId: 61,
        ingredientId: 222,
        measure: '60g',
      },
      {
        recipeId: 61,
        ingredientId: 351,
        measure: '50g',
      },
      {
        recipeId: 61,
        ingredientId: 177,
        measure: '2 tbs',
      },
      {
        recipeId: 62,
        ingredientId: 171,
        measure: '400g',
      },
      {
        recipeId: 62,
        ingredientId: 191,
        measure: '1-2tbsp',
      },
      {
        recipeId: 62,
        ingredientId: 27,
        measure: 'Dash',
      },
      {
        recipeId: 62,
        ingredientId: 313,
        measure: '750g piece',
      },
      {
        recipeId: 62,
        ingredientId: 342,
        measure: '6-8 slices',
      },
      {
        recipeId: 62,
        ingredientId: 349,
        measure: '500g',
      },
      {
        recipeId: 62,
        ingredientId: 531,
        measure: 'Dusting',
      },
      {
        recipeId: 62,
        ingredientId: 473,
        measure: '2 Beaten ',
      },
      {
        recipeId: 63,
        ingredientId: 179,
        measure: '450g',
      },
      {
        recipeId: 63,
        ingredientId: 27,
        measure: '2 tblsp ',
      },
      {
        recipeId: 63,
        ingredientId: 332,
        measure: '4',
      },
      {
        recipeId: 63,
        ingredientId: 139,
        measure: '1 tbls',
      },
      {
        recipeId: 63,
        ingredientId: 356,
        measure: '2 tblsp ',
      },
      {
        recipeId: 63,
        ingredientId: 363,
        measure: '50g',
      },
      {
        recipeId: 63,
        ingredientId: 464,
        measure: '½',
      },
      {
        recipeId: 63,
        ingredientId: 496,
        measure: '100g ',
      },
      {
        recipeId: 63,
        ingredientId: 87,
        measure: '400g',
      },
      {
        recipeId: 64,
        ingredientId: 363,
        measure: '1 tbls',
      },
      {
        recipeId: 64,
        ingredientId: 276,
        measure: '225g',
      },
      {
        recipeId: 64,
        ingredientId: 283,
        measure: '2',
      },
      {
        recipeId: 64,
        ingredientId: 247,
        measure: '1 tsp ',
      },
      {
        recipeId: 64,
        ingredientId: 243,
        measure: '1 tsp ',
      },
      {
        recipeId: 64,
        ingredientId: 294,
        measure: '1 tsp ',
      },
      {
        recipeId: 64,
        ingredientId: 530,
        measure: '1',
      },
      {
        recipeId: 64,
        ingredientId: 298,
        measure: '4 large',
      },
      {
        recipeId: 64,
        ingredientId: 528,
        measure: '150g',
      },
      {
        recipeId: 64,
        ingredientId: 537,
        measure: '1 tsp ',
      },
      {
        recipeId: 64,
        ingredientId: 493,
        measure: 'to serve',
      },
      {
        recipeId: 65,
        ingredientId: 55,
        measure: '2 tbs',
      },
      {
        recipeId: 65,
        ingredientId: 10,
        measure: '500g',
      },
      {
        recipeId: 65,
        ingredientId: 181,
        measure: '1 chopped',
      },
      {
        recipeId: 65,
        ingredientId: 491,
        measure: '1 tbls',
      },
      {
        recipeId: 65,
        ingredientId: 327,
        measure: '1 ½ tbsp',
      },
      {
        recipeId: 65,
        ingredientId: 171,
        measure: '75g',
      },
      {
        recipeId: 65,
        ingredientId: 452,
        measure: '250ml',
      },
      {
        recipeId: 65,
        ingredientId: 120,
        measure: 'Dash',
      },
      {
        recipeId: 65,
        ingredientId: 559,
        measure: '400g',
      },
      {
        recipeId: 65,
        ingredientId: 473,
        measure: '1',
      },
      {
        recipeId: 66,
        ingredientId: 365,
        measure: '750g',
      },
      {
        recipeId: 66,
        ingredientId: 511,
        measure: '6 tablespoons',
      },
      {
        recipeId: 66,
        ingredientId: 332,
        measure: '2',
      },
      {
        recipeId: 66,
        ingredientId: 447,
        measure: '1 cup ',
      },
      {
        recipeId: 67,
        ingredientId: 309,
        measure: '1 whole',
      },
      {
        recipeId: 67,
        ingredientId: 298,
        measure: '1 chopped',
      },
      {
        recipeId: 67,
        ingredientId: 106,
        measure: '2 chopped',
      },
      {
        recipeId: 67,
        ingredientId: 279,
        measure: '2 chopped',
      },
      {
        recipeId: 67,
        ingredientId: 569,
        measure: '1 chopped',
      },
      {
        recipeId: 67,
        ingredientId: 292,
        measure: '1 chopped',
      },
      {
        recipeId: 67,
        ingredientId: 182,
        measure: '1',
      },
      {
        recipeId: 67,
        ingredientId: 40,
        measure: '2 tsp',
      },
      {
        recipeId: 67,
        ingredientId: 480,
        measure: '1 tsp ',
      },
      {
        recipeId: 67,
        ingredientId: 440,
        measure: '2 tbs',
      },
      {
        recipeId: 67,
        ingredientId: 506,
        measure: '2 tsp',
      },
      {
        recipeId: 67,
        ingredientId: 152,
        measure: '2 cups ',
      },
      {
        recipeId: 67,
        ingredientId: 55,
        measure: '1 tbs',
      },
      {
        recipeId: 68,
        ingredientId: 179,
        measure: '3 Lbs',
      },
      {
        recipeId: 68,
        ingredientId: 346,
        measure: '3 Lbs',
      },
      {
        recipeId: 68,
        ingredientId: 63,
        measure: '1/2 cup ',
      },
      {
        recipeId: 68,
        ingredientId: 171,
        measure: '1 oz ',
      },
      {
        recipeId: 68,
        ingredientId: 520,
        measure: '3/4 cup ',
      },
      {
        recipeId: 68,
        ingredientId: 267,
        measure: '6 cloves',
      },
      {
        recipeId: 68,
        ingredientId: 479,
        measure: '1 tsp ',
      },
      {
        recipeId: 68,
        ingredientId: 181,
        measure: '3 cups ',
      },
      {
        recipeId: 68,
        ingredientId: 491,
        measure: '2 tbsp',
      },
      {
        recipeId: 68,
        ingredientId: 382,
        measure: ' ',
      },
      {
        recipeId: 68,
        ingredientId: 27,
        measure: ' ',
      },
      {
        recipeId: 68,
        ingredientId: 437,
        measure: '2 cups ',
      },
      {
        recipeId: 68,
        ingredientId: 329,
        measure: '8 cups ',
      },
      {
        recipeId: 68,
        ingredientId: 506,
        measure: '2 tbsp',
      },
      {
        recipeId: 68,
        ingredientId: 440,
        measure: '2 tsp',
      },
      {
        recipeId: 68,
        ingredientId: 420,
        measure: '2 sprigs',
      },
      {
        recipeId: 68,
        ingredientId: 213,
        measure: ' ',
      },
      {
        recipeId: 68,
        ingredientId: 561,
        measure: ' ',
      },
      {
        recipeId: 68,
        ingredientId: 560,
        measure: ' ',
      },
      {
        recipeId: 69,
        ingredientId: 468,
        measure: '300g',
      },
      {
        recipeId: 69,
        ingredientId: 221,
        measure: '1 tbs',
      },
      {
        recipeId: 69,
        ingredientId: 507,
        measure: 'Garnish',
      },
      {
        recipeId: 69,
        ingredientId: 6,
        measure: 'Garnish',
      },
      {
        recipeId: 70,
        ingredientId: 176,
        measure: '8 ounces (230 grams)',
      },
      {
        recipeId: 70,
        ingredientId: 327,
        measure: '1/3 cup',
      },
      {
        recipeId: 70,
        ingredientId: 495,
        measure: '3/4 teaspoon',
      },
      {
        recipeId: 70,
        ingredientId: 550,
        measure: '1/2 teaspoon',
      },
      {
        recipeId: 70,
        ingredientId: 479,
        measure: '1/2 teaspoon',
      },
      {
        recipeId: 70,
        ingredientId: 175,
        measure: '1/2 teaspoon',
      },
      {
        recipeId: 70,
        ingredientId: 16,
        measure: '1/8 teaspoon',
      },
      {
        recipeId: 70,
        ingredientId: 340,
        measure: '6 tablespoons (85 grams)',
      },
      {
        recipeId: 70,
        ingredientId: 194,
        measure: '1 1/2 cups (360 milliliters)',
      },
      {
        recipeId: 70,
        ingredientId: 426,
        measure: '1 cup (240 milliliters)',
      },
      {
        recipeId: 70,
        ingredientId: 338,
        measure: '1 pound (455 grams) ',
      },
      {
        recipeId: 70,
        ingredientId: 296,
        measure: '16 slices square',
      },
      {
        recipeId: 70,
        ingredientId: 351,
        measure: '8 slices mild',
      },
      {
        recipeId: 70,
        ingredientId: 410,
        measure: '8 slices',
      },
      {
        recipeId: 71,
        ingredientId: 190,
        measure: '500g',
      },
      {
        recipeId: 71,
        ingredientId: 531,
        measure: '1 tbls',
      },
      {
        recipeId: 71,
        ingredientId: 55,
        measure: 'Dash',
      },
      {
        recipeId: 71,
        ingredientId: 181,
        measure: '1 sliced',
      },
      {
        recipeId: 71,
        ingredientId: 292,
        measure: '2 sliced',
      },
      {
        recipeId: 71,
        ingredientId: 329,
        measure: '350ml/12fl',
      },
      {
        recipeId: 71,
        ingredientId: 179,
        measure: '500g',
      },
      {
        recipeId: 71,
        ingredientId: 559,
        measure: '450g',
      },
      {
        recipeId: 71,
        ingredientId: 332,
        measure: 'To Glaze',
      },
      {
        recipeId: 72,
        ingredientId: 340,
        measure: '85g',
      },
      {
        recipeId: 72,
        ingredientId: 547,
        measure: '140g',
      },
      {
        recipeId: 72,
        ingredientId: 511,
        measure: '1tbsp',
      },
      {
        recipeId: 72,
        ingredientId: 248,
        measure: '900g',
      },
      {
        recipeId: 72,
        ingredientId: 521,
        measure: '250g',
      },
      {
        recipeId: 72,
        ingredientId: 327,
        measure: '3 tbs',
      },
      {
        recipeId: 72,
        ingredientId: 289,
        measure: '1 ½ teaspoons',
      },
      {
        recipeId: 72,
        ingredientId: 332,
        measure: '3 Large',
      },
      {
        recipeId: 73,
        ingredientId: 63,
        measure: '250g',
      },
      {
        recipeId: 73,
        ingredientId: 68,
        measure: '225g',
      },
      {
        recipeId: 73,
        ingredientId: 278,
        measure: '150g',
      },
      {
        recipeId: 73,
        ingredientId: 217,
        measure: 'Zest of 1',
      },
      {
        recipeId: 73,
        ingredientId: 51,
        measure: '500g',
      },
      {
        recipeId: 73,
        ingredientId: 166,
        measure: '250g',
      },
      {
        recipeId: 74,
        ingredientId: 340,
        measure: '200g',
      },
      {
        recipeId: 74,
        ingredientId: 417,
        measure: '1 large',
      },
      {
        recipeId: 74,
        ingredientId: 447,
        measure: '4 tbs',
      },
      {
        recipeId: 74,
        ingredientId: 278,
        measure: '200g',
      },
      {
        recipeId: 74,
        ingredientId: 113,
        measure: '85g',
      },
      {
        recipeId: 74,
        ingredientId: 389,
        measure: '85g',
      },
      {
        recipeId: 74,
        ingredientId: 128,
        measure: '100g ',
      },
      {
        recipeId: 74,
        ingredientId: 365,
        measure: '250g',
      },
      {
        recipeId: 74,
        ingredientId: 412,
        measure: '1 tbs',
      },
      {
        recipeId: 75,
        ingredientId: 27,
        measure: '4 tablespoons',
      },
      {
        recipeId: 75,
        ingredientId: 268,
        measure: '6 small',
      },
      {
        recipeId: 75,
        ingredientId: 574,
        measure: '1 can',
      },
      {
        recipeId: 75,
        ingredientId: 536,
        measure: '2 cups halved',
      },
      {
        recipeId: 75,
        ingredientId: 83,
        measure: '1 1/2 cups',
      },
      {
        recipeId: 75,
        ingredientId: 218,
        measure: '1 tablespoon',
      },
      {
        recipeId: 75,
        ingredientId: 213,
        measure: '½ cup ',
      },
      {
        recipeId: 76,
        ingredientId: 27,
        measure: '3 tablespoons',
      },
      {
        recipeId: 76,
        ingredientId: 181,
        measure: '1',
      },
      {
        recipeId: 76,
        ingredientId: 267,
        measure: '2 cloves',
      },
      {
        recipeId: 76,
        ingredientId: 225,
        measure: '2 1/4 cups',
      },
      {
        recipeId: 76,
        ingredientId: 40,
        measure: '1 teaspoon',
      },
      {
        recipeId: 76,
        ingredientId: 512,
        measure: '3',
      },
      {
        recipeId: 76,
        ingredientId: 178,
        measure: '1 tablespoon',
      },
      {
        recipeId: 76,
        ingredientId: 121,
        measure: '2 sticks',
      },
      {
        recipeId: 77,
        ingredientId: 340,
        measure: '50g/2oz',
      },
      {
        recipeId: 77,
        ingredientId: 181,
        measure: '1 finely chopped ',
      },
      {
        recipeId: 77,
        ingredientId: 357,
        measure: '150g',
      },
      {
        recipeId: 77,
        ingredientId: 322,
        measure: '125ml ',
      },
      {
        recipeId: 77,
        ingredientId: 329,
        measure: '1 litre hot',
      },
      {
        recipeId: 77,
        ingredientId: 202,
        measure: 'The juice and zest of one',
      },
      {
        recipeId: 77,
        ingredientId: 192,
        measure: '240g large',
      },
      {
        recipeId: 77,
        ingredientId: 285,
        measure: '150g',
      },
      {
        recipeId: 77,
        ingredientId: 343,
        measure: '100g tips blanched briefly in boiling water',
      },
      {
        recipeId: 77,
        ingredientId: 175,
        measure: 'ground',
      },
      {
        recipeId: 77,
        ingredientId: 565,
        measure: '50g shavings',
      },
      {
        recipeId: 78,
        ingredientId: 505,
        measure: '250g',
      },
      {
        recipeId: 78,
        ingredientId: 538,
        measure: '2 tbs',
      },
      {
        recipeId: 78,
        ingredientId: 181,
        measure: '1 sliced',
      },
      {
        recipeId: 78,
        ingredientId: 2,
        measure: '0.25',
      },
      {
        recipeId: 78,
        ingredientId: 415,
        measure: '10',
      },
      {
        recipeId: 78,
        ingredientId: 6,
        measure: '4',
      },
      {
        recipeId: 78,
        ingredientId: 221,
        measure: '4 tbsp',
      },
      {
        recipeId: 78,
        ingredientId: 440,
        measure: '2 tbs',
      },
      {
        recipeId: 78,
        ingredientId: 521,
        measure: '1 tblsp ',
      },
      {
        recipeId: 78,
        ingredientId: 120,
        measure: '1 tblsp ',
      },
      {
        recipeId: 79,
        ingredientId: 365,
        measure: '225g',
      },
      {
        recipeId: 79,
        ingredientId: 521,
        measure: '75g',
      },
      {
        recipeId: 79,
        ingredientId: 3,
        measure: '1 tsp ',
      },
      {
        recipeId: 79,
        ingredientId: 340,
        measure: '125g',
      },
      {
        recipeId: 79,
        ingredientId: 92,
        measure: '150g',
      },
      {
        recipeId: 79,
        ingredientId: 332,
        measure: '1',
      },
      {
        recipeId: 79,
        ingredientId: 447,
        measure: '1 tbs',
      },
      {
        recipeId: 79,
        ingredientId: 556,
        measure: '2 tsp',
      },
      {
        recipeId: 80,
        ingredientId: 266,
        measure: '225g',
      },
      {
        recipeId: 80,
        ingredientId: 340,
        measure: '25g',
      },
      {
        recipeId: 80,
        ingredientId: 390,
        measure: '1 chopped',
      },
      {
        recipeId: 80,
        ingredientId: 267,
        measure: '1 clove finely chopped',
      },
      {
        recipeId: 80,
        ingredientId: 161,
        measure: '400g',
      },
      {
        recipeId: 80,
        ingredientId: 27,
        measure: '2 tbs',
      },
      {
        recipeId: 80,
        ingredientId: 516,
        measure: 'Handful',
      },
      {
        recipeId: 80,
        ingredientId: 464,
        measure: '1 chopped',
      },
      {
        recipeId: 80,
        ingredientId: 414,
        measure: '100g ',
      },
      {
        recipeId: 80,
        ingredientId: 355,
        measure: 'Chopped',
      },
      {
        recipeId: 80,
        ingredientId: 202,
        measure: 'Juice of 1/2',
      },
      {
        recipeId: 81,
        ingredientId: 179,
        measure: '1 medium',
      },
      {
        recipeId: 81,
        ingredientId: 363,
        measure: '1 tsp ',
      },
      {
        recipeId: 81,
        ingredientId: 259,
        measure: '500g',
      },
      {
        recipeId: 81,
        ingredientId: 181,
        measure: '1 finely chopped ',
      },
      {
        recipeId: 81,
        ingredientId: 279,
        measure: '1 finely chopped ',
      },
      {
        recipeId: 81,
        ingredientId: 411,
        measure: '¼ tsp',
      },
      {
        recipeId: 81,
        ingredientId: 480,
        measure: '¼ tsp',
      },
      {
        recipeId: 81,
        ingredientId: 233,
        measure: '¼ tsp',
      },
      {
        recipeId: 81,
        ingredientId: 329,
        measure: '100ml',
      },
      {
        recipeId: 81,
        ingredientId: 559,
        measure: '400g',
      },
      {
        recipeId: 81,
        ingredientId: 417,
        measure: 'To Glaze',
      },
      {
        recipeId: 82,
        ingredientId: 20,
        measure: '600g',
      },
      {
        recipeId: 82,
        ingredientId: 179,
        measure: '300g',
      },
      {
        recipeId: 82,
        ingredientId: 530,
        measure: '1 chopped',
      },
      {
        recipeId: 82,
        ingredientId: 294,
        measure: '3 tbs',
      },
      {
        recipeId: 82,
        ingredientId: 42,
        measure: '1 tsp ',
      },
      {
        recipeId: 82,
        ingredientId: 249,
        measure: '1/2 tsp',
      },
      {
        recipeId: 82,
        ingredientId: 267,
        measure: '3 cloves',
      },
      {
        recipeId: 82,
        ingredientId: 283,
        measure: '2 pieces ',
      },
      {
        recipeId: 82,
        ingredientId: 531,
        measure: '2 tbs',
      },
      {
        recipeId: 82,
        ingredientId: 332,
        measure: '3',
      },
      {
        recipeId: 82,
        ingredientId: 379,
        measure: '75g',
      },
      {
        recipeId: 82,
        ingredientId: 55,
        measure: 'For frying',
      },
      {
        recipeId: 83,
        ingredientId: 264,
        measure: '568ml',
      },
      {
        recipeId: 83,
        ingredientId: 277,
        measure: '100g ',
      },
      {
        recipeId: 83,
        ingredientId: 533,
        measure: 'Pod of',
      },
      {
        recipeId: 83,
        ingredientId: 473,
        measure: '6',
      },
      {
        recipeId: 83,
        ingredientId: 521,
        measure: '2 tbs',
      },
      {
        recipeId: 84,
        ingredientId: 423,
        measure: '500g',
      },
      {
        recipeId: 84,
        ingredientId: 55,
        measure: 'Dash',
      },
      {
        recipeId: 84,
        ingredientId: 531,
        measure: 'To Glaze',
      },
      {
        recipeId: 84,
        ingredientId: 178,
        measure: 'Dash',
      },
      {
        recipeId: 85,
        ingredientId: 319,
        measure: '500g',
      },
      {
        recipeId: 85,
        ingredientId: 267,
        measure: '2 cloves minced',
      },
      {
        recipeId: 85,
        ingredientId: 181,
        measure: '1',
      },
      {
        recipeId: 85,
        ingredientId: 496,
        measure: '300g',
      },
      {
        recipeId: 85,
        ingredientId: 491,
        measure: '3 tbs',
      },
      {
        recipeId: 85,
        ingredientId: 247,
        measure: '1 tbs',
      },
      {
        recipeId: 85,
        ingredientId: 384,
        measure: '1 Litre',
      },
      {
        recipeId: 85,
        ingredientId: 38,
        measure: '3 tsp',
      },
      {
        recipeId: 85,
        ingredientId: 574,
        measure: '400g',
      },
      {
        recipeId: 85,
        ingredientId: 289,
        measure: '1/2 ',
      },
      {
        recipeId: 85,
        ingredientId: 176,
        measure: '150g',
      },
      {
        recipeId: 85,
        ingredientId: 178,
        measure: 'Pinch',
      },
      {
        recipeId: 85,
        ingredientId: 249,
        measure: 'Pinch',
      },
      {
        recipeId: 86,
        ingredientId: 340,
        measure: '225g',
      },
      {
        recipeId: 86,
        ingredientId: 327,
        measure: '350g',
      },
      {
        recipeId: 86,
        ingredientId: 521,
        measure: '100g ',
      },
      {
        recipeId: 86,
        ingredientId: 392,
        measure: '280g',
      },
      {
        recipeId: 86,
        ingredientId: 417,
        measure: '1 small',
      },
      {
        recipeId: 86,
        ingredientId: 455,
        measure: 'Topping',
      },
      {
        recipeId: 87,
        ingredientId: 106,
        measure: '2 finely chopped',
      },
      {
        recipeId: 87,
        ingredientId: 569,
        measure: '1 Diced',
      },
      {
        recipeId: 87,
        ingredientId: 294,
        measure: 'Small bunch',
      },
      {
        recipeId: 87,
        ingredientId: 390,
        measure: '1 small',
      },
      {
        recipeId: 87,
        ingredientId: 267,
        measure: '3 cloves',
      },
      {
        recipeId: 87,
        ingredientId: 437,
        measure: '400ml',
      },
      {
        recipeId: 87,
        ingredientId: 215,
        measure: 'Pinch',
      },
      {
        recipeId: 87,
        ingredientId: 512,
        measure: '1',
      },
      {
        recipeId: 87,
        ingredientId: 179,
        measure: '300g',
      },
      {
        recipeId: 87,
        ingredientId: 472,
        measure: '400g',
      },
      {
        recipeId: 87,
        ingredientId: 317,
        measure: '600g',
      },
      {
        recipeId: 87,
        ingredientId: 1,
        measure: '300g',
      },
      {
        recipeId: 87,
        ingredientId: 154,
        measure: '8',
      },
      {
        recipeId: 87,
        ingredientId: 101,
        measure: '500g',
      },
      {
        recipeId: 87,
        ingredientId: 257,
        measure: '500g',
      },
      {
        recipeId: 87,
        ingredientId: 112,
        measure: '1 sliced',
      },
      {
        recipeId: 88,
        ingredientId: 27,
        measure: '3 tbsp',
      },
      {
        recipeId: 88,
        ingredientId: 267,
        measure: '8 cloves chopped',
      },
      {
        recipeId: 88,
        ingredientId: 521,
        measure: '3 tbsp',
      },
      {
        recipeId: 88,
        ingredientId: 139,
        measure: '2 tblsp ',
      },
      {
        recipeId: 88,
        ingredientId: 441,
        measure: '3 400g Cans',
      },
      {
        recipeId: 88,
        ingredientId: 295,
        measure: 'Bunch',
      },
      {
        recipeId: 88,
        ingredientId: 497,
        measure: '2 tubs',
      },
      {
        recipeId: 88,
        ingredientId: 447,
        measure: '3 tbsp',
      },
      {
        recipeId: 88,
        ingredientId: 565,
        measure: '85g',
      },
      {
        recipeId: 88,
        ingredientId: 118,
        measure: '2 sliced',
      },
      {
        recipeId: 88,
        ingredientId: 496,
        measure: '1kg',
      },
      {
        recipeId: 88,
        ingredientId: 291,
        measure: '3 tubs',
      },
      {
        recipeId: 88,
        ingredientId: 233,
        measure: 'pinch',
      },
      {
        recipeId: 88,
        ingredientId: 107,
        measure: '400g',
      },
      {
        recipeId: 89,
        ingredientId: 110,
        measure: '1',
      },
      {
        recipeId: 89,
        ingredientId: 181,
        measure: '1',
      },
      {
        recipeId: 89,
        ingredientId: 267,
        measure: '3 cloves',
      },
      {
        recipeId: 89,
        ingredientId: 26,
        measure: '1 tsp ',
      },
      {
        recipeId: 89,
        ingredientId: 247,
        measure: '½ tsp',
      },
      {
        recipeId: 89,
        ingredientId: 40,
        measure: '1 tblsp ',
      },
      {
        recipeId: 89,
        ingredientId: 292,
        measure: '3 Medium',
      },
      {
        recipeId: 89,
        ingredientId: 121,
        measure: '2 small stalks',
      },
      {
        recipeId: 89,
        ingredientId: 569,
        measure: '1',
      },
      {
        recipeId: 89,
        ingredientId: 32,
        measure: '1',
      },
      {
        recipeId: 89,
        ingredientId: 298,
        measure: '2 x 400g tins',
      },
      {
        recipeId: 89,
        ingredientId: 320,
        measure: '250ml',
      },
      {
        recipeId: 89,
        ingredientId: 434,
        measure: '2 sliced',
      },
      {
        recipeId: 89,
        ingredientId: 406,
        measure: '250g',
      },
      {
        recipeId: 90,
        ingredientId: 14,
        measure: '2',
      },
      {
        recipeId: 90,
        ingredientId: 322,
        measure: '200ml',
      },
      {
        recipeId: 90,
        ingredientId: 26,
        measure: '1/2 tsp',
      },
      {
        recipeId: 90,
        ingredientId: 202,
        measure: '2',
      },
      {
        recipeId: 90,
        ingredientId: 289,
        measure: '1/2 ',
      },
      {
        recipeId: 90,
        ingredientId: 27,
        measure: 'Dash',
      },
      {
        recipeId: 90,
        ingredientId: 300,
        measure: 'To serve',
      },
      {
        recipeId: 90,
        ingredientId: 179,
        measure: '1 kg',
      },
      {
        recipeId: 90,
        ingredientId: 55,
        measure: 'For frying',
      },
      {
        recipeId: 91,
        ingredientId: 31,
        measure: '142ml',
      },
      {
        recipeId: 91,
        ingredientId: 521,
        measure: '25g',
      },
      {
        recipeId: 91,
        ingredientId: 391,
        measure: '100g ',
      },
      {
        recipeId: 91,
        ingredientId: 340,
        measure: '25g',
      },
      {
        recipeId: 91,
        ingredientId: 264,
        measure: '2 tbs',
      },
      {
        recipeId: 91,
        ingredientId: 473,
        measure: '4',
      },
      {
        recipeId: 91,
        ingredientId: 180,
        measure: '5',
      },
      {
        recipeId: 91,
        ingredientId: 455,
        measure: 'to serve',
      },
      {
        recipeId: 92,
        ingredientId: 340,
        measure: '½ cup ',
      },
      {
        recipeId: 92,
        ingredientId: 511,
        measure: '1 cup ',
      },
      {
        recipeId: 92,
        ingredientId: 332,
        measure: '2',
      },
      {
        recipeId: 92,
        ingredientId: 556,
        measure: '1 tsp ',
      },
      {
        recipeId: 92,
        ingredientId: 531,
        measure: '2 cups ',
      },
      {
        recipeId: 92,
        ingredientId: 3,
        measure: '1 tsp ',
      },
      {
        recipeId: 92,
        ingredientId: 447,
        measure: '1 1/4 cup',
      },
      {
        recipeId: 92,
        ingredientId: 168,
        measure: '1 1/2 cup ',
      },
      {
        recipeId: 92,
        ingredientId: 389,
        measure: '1 1/2 cup ',
      },
      {
        recipeId: 92,
        ingredientId: 31,
        measure: '1 1/2 cup ',
      },
      {
        recipeId: 93,
        ingredientId: 179,
        measure: '5',
      },
      {
        recipeId: 93,
        ingredientId: 134,
        measure: '1',
      },
      {
        recipeId: 93,
        ingredientId: 267,
        measure: '2 cloves',
      },
      {
        recipeId: 93,
        ingredientId: 161,
        measure: '2',
      },
      {
        recipeId: 93,
        ingredientId: 510,
        measure: ' ',
      },
      {
        recipeId: 93,
        ingredientId: 519,
        measure: ' ',
      },
      {
        recipeId: 93,
        ingredientId: 384,
        measure: ' ',
      },
      {
        recipeId: 93,
        ingredientId: 340,
        measure: '1 tbsp',
      },
      {
        recipeId: 93,
        ingredientId: 55,
        measure: '1 tbsp',
      },
      {
        recipeId: 93,
        ingredientId: 27,
        measure: '1 tbsp',
      },
      {
        recipeId: 94,
        ingredientId: 340,
        measure: '50g',
      },
      {
        recipeId: 94,
        ingredientId: 27,
        measure: '1 tbs',
      },
      {
        recipeId: 94,
        ingredientId: 181,
        measure: '1 kg',
      },
      {
        recipeId: 94,
        ingredientId: 511,
        measure: '1 tsp ',
      },
      {
        recipeId: 94,
        ingredientId: 279,
        measure: '4 sliced',
      },
      {
        recipeId: 94,
        ingredientId: 327,
        measure: '2 tbs',
      },
      {
        recipeId: 94,
        ingredientId: 437,
        measure: '250ml',
      },
      {
        recipeId: 94,
        ingredientId: 452,
        measure: '1L',
      },
      {
        recipeId: 94,
        ingredientId: 296,
        measure: '4 sliced',
      },
      {
        recipeId: 94,
        ingredientId: 11,
        measure: '140g',
      },
      {
        recipeId: 95,
        ingredientId: 71,
        measure: '1lb',
      },
      {
        recipeId: 95,
        ingredientId: 55,
        measure: '5 tbs',
      },
      {
        recipeId: 95,
        ingredientId: 255,
        measure: '1',
      },
      {
        recipeId: 95,
        ingredientId: 163,
        measure: '3',
      },
      {
        recipeId: 95,
        ingredientId: 43,
        measure: '3',
      },
      {
        recipeId: 95,
        ingredientId: 136,
        measure: '3',
      },
      {
        recipeId: 95,
        ingredientId: 67,
        measure: '1 cup ',
      },
      {
        recipeId: 95,
        ingredientId: 177,
        measure: '1 cup ',
      },
      {
        recipeId: 95,
        ingredientId: 132,
        measure: '2 tbs',
      },
      {
        recipeId: 95,
        ingredientId: 182,
        measure: '6',
      },
      {
        recipeId: 95,
        ingredientId: 511,
        measure: '1 tbs',
      },
      {
        recipeId: 95,
        ingredientId: 209,
        measure: '5',
      },
      {
        recipeId: 96,
        ingredientId: 364,
        measure: '400g',
      },
      {
        recipeId: 96,
        ingredientId: 27,
        measure: '3 tbs',
      },
      {
        recipeId: 96,
        ingredientId: 181,
        measure: '1 chopped',
      },
      {
        recipeId: 96,
        ingredientId: 279,
        measure: '2 chopped',
      },
      {
        recipeId: 96,
        ingredientId: 491,
        measure: '2 tbs',
      },
      {
        recipeId: 96,
        ingredientId: 24,
        measure: '800g',
      },
      {
        recipeId: 96,
        ingredientId: 511,
        measure: '1 tbs',
      },
      {
        recipeId: 96,
        ingredientId: 302,
        measure: '1 tbs',
      },
      {
        recipeId: 96,
        ingredientId: 411,
        measure: 'Pinch',
      },
      {
        recipeId: 96,
        ingredientId: 211,
        measure: '2 tbs',
      },
      {
        recipeId: 97,
        ingredientId: 220,
        measure: '450g',
      },
      {
        recipeId: 97,
        ingredientId: 181,
        measure: '1 chopped',
      },
      {
        recipeId: 97,
        ingredientId: 6,
        measure: '1',
      },
      {
        recipeId: 97,
        ingredientId: 267,
        measure: '2 cloves minced',
      },
      {
        recipeId: 97,
        ingredientId: 283,
        measure: '1 tsp ',
      },
      {
        recipeId: 97,
        ingredientId: 19,
        measure: '1 chopped',
      },
      {
        recipeId: 97,
        ingredientId: 440,
        measure: '2 tbs',
      },
      {
        recipeId: 97,
        ingredientId: 123,
        measure: '1 chopped',
      },
      {
        recipeId: 97,
        ingredientId: 55,
        measure: '2 tbs',
      },
      {
        recipeId: 97,
        ingredientId: 177,
        measure: '350ml',
      },
      {
        recipeId: 97,
        ingredientId: 527,
        measure: '200g',
      },
      {
        recipeId: 97,
        ingredientId: 173,
        measure: '1 tbs',
      },
      {
        recipeId: 98,
        ingredientId: 55,
        measure: '1 tbls',
      },
      {
        recipeId: 98,
        ingredientId: 181,
        measure: '1 finely chopped ',
      },
      {
        recipeId: 98,
        ingredientId: 267,
        measure: '2 cloves chopped',
      },
      {
        recipeId: 98,
        ingredientId: 283,
        measure: '1 part ',
      },
      {
        recipeId: 98,
        ingredientId: 294,
        measure: '1 Packet',
      },
      {
        recipeId: 98,
        ingredientId: 247,
        measure: '1 tsp ',
      },
      {
        recipeId: 98,
        ingredientId: 26,
        measure: '1 tsp ',
      },
      {
        recipeId: 98,
        ingredientId: 537,
        measure: '2 tsp',
      },
      {
        recipeId: 98,
        ingredientId: 441,
        measure: '400g',
      },
      {
        recipeId: 98,
        ingredientId: 253,
        measure: '400g',
      },
      {
        recipeId: 98,
        ingredientId: 419,
        measure: 'to serve',
      },
      {
        recipeId: 99,
        ingredientId: 125,
        measure: '1 large',
      },
      {
        recipeId: 99,
        ingredientId: 181,
        measure: '½ cup ',
      },
      {
        recipeId: 99,
        ingredientId: 24,
        measure: '1 cup',
      },
      {
        recipeId: 99,
        ingredientId: 267,
        measure: '6 cloves',
      },
      {
        recipeId: 99,
        ingredientId: 335,
        measure: '1.5 tablespoon',
      },
      {
        recipeId: 99,
        ingredientId: 499,
        measure: '1 tablespoon chopped',
      },
      {
        recipeId: 99,
        ingredientId: 178,
        measure: 'as required',
      },
      {
        recipeId: 100,
        ingredientId: 76,
        measure: '280g',
      },
      {
        recipeId: 100,
        ingredientId: 436,
        measure: '200g',
      },
      {
        recipeId: 100,
        ingredientId: 27,
        measure: '2 tblsp ',
      },
      {
        recipeId: 100,
        ingredientId: 279,
        measure: '2 cloves chopped',
      },
      {
        recipeId: 100,
        ingredientId: 390,
        measure: '1 large',
      },
      {
        recipeId: 100,
        ingredientId: 192,
        measure: '24 Skinned',
      },
      {
        recipeId: 100,
        ingredientId: 536,
        measure: '12',
      },
      {
        recipeId: 100,
        ingredientId: 295,
        measure: 'Handful',
      },
      {
        recipeId: 100,
        ingredientId: 312,
        measure: 'Leaves',
      },
      {
        recipeId: 100,
        ingredientId: 296,
        measure: 'to serve',
      },
      {
        recipeId: 100,
        ingredientId: 44,
        measure: '2 tbsp',
      },
      {
        recipeId: 100,
        ingredientId: 182,
        measure: 'Grated Zest of 2',
      },
      {
        recipeId: 100,
        ingredientId: 521,
        measure: '2 tsp',
      },
      {
        recipeId: 101,
        ingredientId: 71,
        measure: '1kg',
      },
      {
        recipeId: 101,
        ingredientId: 327,
        measure: '2 tbs',
      },
      {
        recipeId: 101,
        ingredientId: 110,
        measure: '2 tbs',
      },
      {
        recipeId: 101,
        ingredientId: 105,
        measure: '200ml',
      },
      {
        recipeId: 101,
        ingredientId: 452,
        measure: '400ml',
      },
      {
        recipeId: 101,
        ingredientId: 181,
        measure: '1 finely sliced',
      },
      {
        recipeId: 101,
        ingredientId: 292,
        measure: '2 chopped',
      },
      {
        recipeId: 101,
        ingredientId: 40,
        measure: '3 sprigs',
      },
      {
        recipeId: 101,
        ingredientId: 345,
        measure: '2 tbs',
      },
      {
        recipeId: 101,
        ingredientId: 473,
        measure: '2 free-range',
      },
      {
        recipeId: 101,
        ingredientId: 349,
        measure: '400g',
      },
      {
        recipeId: 101,
        ingredientId: 344,
        measure: '300g',
      },
      {
        recipeId: 101,
        ingredientId: 340,
        measure: '25g',
      },
      {
        recipeId: 101,
        ingredientId: 178,
        measure: 'pinch',
      },
      {
        recipeId: 101,
        ingredientId: 249,
        measure: 'pinch',
      },
      {
        recipeId: 102,
        ingredientId: 179,
        measure: '1kg',
      },
      {
        recipeId: 102,
        ingredientId: 340,
        measure: 'Knob',
      },
      {
        recipeId: 102,
        ingredientId: 447,
        measure: 'Dash',
      },
      {
        recipeId: 102,
        ingredientId: 11,
        measure: '50g',
      },
      {
        recipeId: 102,
        ingredientId: 442,
        measure: '2 sliced',
      },
      {
        recipeId: 102,
        ingredientId: 327,
        measure: '75g',
      },
      {
        recipeId: 102,
        ingredientId: 322,
        measure: '150ml',
      },
      {
        recipeId: 102,
        ingredientId: 213,
        measure: '2 tbs chopped',
      },
      {
        recipeId: 102,
        ingredientId: 285,
        measure: '250g',
      },
      {
        recipeId: 102,
        ingredientId: 20,
        measure: '250g',
      },
      {
        recipeId: 102,
        ingredientId: 4,
        measure: '250g',
      },
      {
        recipeId: 102,
        ingredientId: 332,
        measure: '6',
      },
      {
        recipeId: 103,
        ingredientId: 471,
        measure: '300g',
      },
      {
        recipeId: 103,
        ingredientId: 340,
        measure: '150g',
      },
      {
        recipeId: 103,
        ingredientId: 557,
        measure: '400g',
      },
      {
        recipeId: 103,
        ingredientId: 473,
        measure: '3',
      },
      {
        recipeId: 103,
        ingredientId: 182,
        measure: '4',
      },
      {
        recipeId: 103,
        ingredientId: 264,
        measure: '300ml ',
      },
      {
        recipeId: 103,
        ingredientId: 455,
        measure: '1 tbls',
      },
      {
        recipeId: 104,
        ingredientId: 309,
        measure: '8 oz ',
      },
      {
        recipeId: 104,
        ingredientId: 178,
        measure: 'pinch',
      },
      {
        recipeId: 104,
        ingredientId: 249,
        measure: 'pinch',
      },
      {
        recipeId: 104,
        ingredientId: 7,
        measure: '1 tsp ',
      },
      {
        recipeId: 104,
        ingredientId: 283,
        measure: '1 tsp ',
      },
      {
        recipeId: 104,
        ingredientId: 6,
        measure: '1 tbs',
      },
      {
        recipeId: 104,
        ingredientId: 357,
        measure: '1/2 cup ',
      },
      {
        recipeId: 104,
        ingredientId: 177,
        measure: '8 cups ',
      },
      {
        recipeId: 104,
        ingredientId: 294,
        measure: '2 oz ',
      },
      {
        recipeId: 105,
        ingredientId: 332,
        measure: '3',
      },
      {
        recipeId: 105,
        ingredientId: 340,
        measure: '2 knobs',
      },
      {
        recipeId: 105,
        ingredientId: 565,
        measure: '1 tsp ',
      },
      {
        recipeId: 105,
        ingredientId: 213,
        measure: '1 tbs chopped',
      },
      {
        recipeId: 105,
        ingredientId: 560,
        measure: '1 tbs chopped',
      },
      {
        recipeId: 105,
        ingredientId: 11,
        measure: '4 tbs',
      },
      {
        recipeId: 106,
        ingredientId: 288,
        measure: '3 tsp',
      },
      {
        recipeId: 106,
        ingredientId: 116,
        measure: '600g',
      },
      {
        recipeId: 106,
        ingredientId: 539,
        measure: '100g ',
      },
      {
        recipeId: 106,
        ingredientId: 209,
        measure: '350g',
      },
      {
        recipeId: 106,
        ingredientId: 568,
        measure: '250g',
      },
      {
        recipeId: 106,
        ingredientId: 279,
        measure: '2 sliced',
      },
      {
        recipeId: 106,
        ingredientId: 188,
        measure: '1',
      },
      {
        recipeId: 106,
        ingredientId: 491,
        measure: '1 tbs',
      },
      {
        recipeId: 106,
        ingredientId: 105,
        measure: '750 ml ',
      },
      {
        recipeId: 106,
        ingredientId: 159,
        measure: '600g',
      },
      {
        recipeId: 106,
        ingredientId: 27,
        measure: '2 tbs',
      },
      {
        recipeId: 106,
        ingredientId: 40,
        measure: 'sprigs of fresh',
      },
      {
        recipeId: 106,
        ingredientId: 420,
        measure: 'sprigs of fresh',
      },
      {
        recipeId: 106,
        ingredientId: 512,
        measure: '2',
      },
      {
        recipeId: 106,
        ingredientId: 136,
        measure: '4',
      },
      {
        recipeId: 107,
        ingredientId: 15,
        measure: '2 tbs',
      },
      {
        recipeId: 107,
        ingredientId: 440,
        measure: '2 tbs',
      },
      {
        recipeId: 107,
        ingredientId: 538,
        measure: '2 tbs',
      },
      {
        recipeId: 107,
        ingredientId: 173,
        measure: '2 tbs',
      },
      {
        recipeId: 107,
        ingredientId: 177,
        measure: '2 tbs',
      },
      {
        recipeId: 107,
        ingredientId: 309,
        measure: '500g',
      },
      {
        recipeId: 107,
        ingredientId: 448,
        measure: '1 tbs',
      },
      {
        recipeId: 107,
        ingredientId: 115,
        measure: '1 tsp ',
      },
      {
        recipeId: 107,
        ingredientId: 389,
        measure: '1 tbs',
      },
      {
        recipeId: 107,
        ingredientId: 6,
        measure: '4 Chopped',
      },
      {
        recipeId: 107,
        ingredientId: 279,
        measure: '6 cloves',
      },
      {
        recipeId: 107,
        ingredientId: 189,
        measure: '220g',
      },
      {
        recipeId: 107,
        ingredientId: 216,
        measure: '100g ',
      },
      {
        recipeId: 108,
        ingredientId: 177,
        measure: '150ml',
      },
      {
        recipeId: 108,
        ingredientId: 511,
        measure: '1 tsp ',
      },
      {
        recipeId: 108,
        ingredientId: 543,
        measure: '15g',
      },
      {
        recipeId: 108,
        ingredientId: 327,
        measure: '225g',
      },
      {
        recipeId: 108,
        ingredientId: 178,
        measure: '1 1/2 tsp ',
      },
      {
        recipeId: 108,
        ingredientId: 27,
        measure: 'Drizzle',
      },
      {
        recipeId: 108,
        ingredientId: 204,
        measure: '80g',
      },
      {
        recipeId: 108,
        ingredientId: 118,
        measure: '70g',
      },
      {
        recipeId: 108,
        ingredientId: 284,
        measure: 'Peeled and Sliced',
      },
      {
        recipeId: 108,
        ingredientId: 160,
        measure: 'Leaves',
      },
      {
        recipeId: 108,
        ingredientId: 175,
        measure: 'Pinch',
      },
      {
        recipeId: 109,
        ingredientId: 309,
        measure: '1.5kg',
      },
      {
        recipeId: 109,
        ingredientId: 340,
        measure: '25g',
      },
      {
        recipeId: 109,
        ingredientId: 27,
        measure: '6 tblsp',
      },
      {
        recipeId: 109,
        ingredientId: 464,
        measure: '2 sliced',
      },
      {
        recipeId: 109,
        ingredientId: 569,
        measure: '3 Large',
      },
      {
        recipeId: 109,
        ingredientId: 555,
        measure: '130g',
      },
      {
        recipeId: 109,
        ingredientId: 463,
        measure: '8',
      },
      {
        recipeId: 109,
        ingredientId: 267,
        measure: '6 cloves sliced',
      },
      {
        recipeId: 109,
        ingredientId: 419,
        measure: '300g',
      },
      {
        recipeId: 109,
        ingredientId: 491,
        measure: 'drizzle',
      },
      {
        recipeId: 109,
        ingredientId: 26,
        measure: '½ tsp',
      },
      {
        recipeId: 109,
        ingredientId: 382,
        measure: '4',
      },
      {
        recipeId: 109,
        ingredientId: 40,
        measure: 'Handful',
      },
      {
        recipeId: 109,
        ingredientId: 384,
        measure: '350ml',
      },
      {
        recipeId: 109,
        ingredientId: 437,
        measure: '180g',
      },
      {
        recipeId: 109,
        ingredientId: 133,
        measure: '2',
      },
      {
        recipeId: 109,
        ingredientId: 516,
        measure: '100g ',
      },
      {
        recipeId: 109,
        ingredientId: 178,
        measure: 'to serve',
      },
      {
        recipeId: 109,
        ingredientId: 249,
        measure: 'to serve',
      },
      {
        recipeId: 110,
        ingredientId: 374,
        measure: '1 kg',
      },
      {
        recipeId: 110,
        ingredientId: 173,
        measure: '1 kg',
      },
      {
        recipeId: 110,
        ingredientId: 24,
        measure: '2',
      },
      {
        recipeId: 110,
        ingredientId: 178,
        measure: 'Pinch',
      },
      {
        recipeId: 110,
        ingredientId: 181,
        measure: '1',
      },
      {
        recipeId: 110,
        ingredientId: 530,
        measure: '1',
      },
      {
        recipeId: 110,
        ingredientId: 499,
        measure: '1  bunch',
      },
      {
        recipeId: 111,
        ingredientId: 253,
        measure: '2 cups ',
      },
      {
        recipeId: 111,
        ingredientId: 292,
        measure: '1 large',
      },
      {
        recipeId: 111,
        ingredientId: 6,
        measure: '2 chopped',
      },
      {
        recipeId: 111,
        ingredientId: 40,
        measure: '4 sprigs',
      },
      {
        recipeId: 111,
        ingredientId: 181,
        measure: '1 Diced',
      },
      {
        recipeId: 111,
        ingredientId: 175,
        measure: '1/2 tsp',
      },
      {
        recipeId: 111,
        ingredientId: 569,
        measure: '2 chopped',
      },
      {
        recipeId: 111,
        ingredientId: 279,
        measure: '4 Mashed',
      },
      {
        recipeId: 111,
        ingredientId: 480,
        measure: '1 tbs',
      },
      {
        recipeId: 111,
        ingredientId: 71,
        measure: '2 Lbs',
      },
      {
        recipeId: 111,
        ingredientId: 177,
        measure: '2L',
      },
      {
        recipeId: 111,
        ingredientId: 179,
        measure: '4',
      },
      {
        recipeId: 111,
        ingredientId: 327,
        measure: '1 cup ',
      },
      {
        recipeId: 111,
        ingredientId: 152,
        measure: '1 cup ',
      },
      {
        recipeId: 112,
        ingredientId: 327,
        measure: '120g',
      },
      {
        recipeId: 112,
        ingredientId: 521,
        measure: '60g',
      },
      {
        recipeId: 112,
        ingredientId: 340,
        measure: '60g',
      },
      {
        recipeId: 112,
        ingredientId: 484,
        measure: '300g',
      },
      {
        recipeId: 112,
        ingredientId: 478,
        measure: '30g',
      },
      {
        recipeId: 112,
        ingredientId: 411,
        measure: '¼ teaspoon',
      },
      {
        recipeId: 112,
        ingredientId: 135,
        measure: 'to serve',
      },
      {
        recipeId: 113,
        ingredientId: 217,
        measure: '3',
      },
      {
        recipeId: 113,
        ingredientId: 478,
        measure: '1 tbs',
      },
      {
        recipeId: 113,
        ingredientId: 250,
        measure: '2 tbs',
      },
      {
        recipeId: 113,
        ingredientId: 166,
        measure: '300g',
      },
      {
        recipeId: 113,
        ingredientId: 326,
        measure: '500g',
      },
      {
        recipeId: 113,
        ingredientId: 497,
        measure: '250g',
      },
      {
        recipeId: 113,
        ingredientId: 264,
        measure: '284ml',
      },
      {
        recipeId: 113,
        ingredientId: 157,
        measure: 'Handful',
      },
      {
        recipeId: 113,
        ingredientId: 391,
        measure: 'Grated',
      },
      {
        recipeId: 114,
        ingredientId: 313,
        measure: '400-500 g',
      },
      {
        recipeId: 114,
        ingredientId: 439,
        measure: '2',
      },
      {
        recipeId: 114,
        ingredientId: 24,
        measure: '2',
      },
      {
        recipeId: 114,
        ingredientId: 121,
        measure: '1/4',
      },
      {
        recipeId: 114,
        ingredientId: 2,
        measure: '1/4 head',
      },
      {
        recipeId: 114,
        ingredientId: 179,
        measure: '3-4',
      },
      {
        recipeId: 114,
        ingredientId: 292,
        measure: '1-2',
      },
      {
        recipeId: 114,
        ingredientId: 541,
        measure: '1',
      },
      {
        recipeId: 114,
        ingredientId: 5,
        measure: '1-2 smoked dried',
      },
      {
        recipeId: 114,
        ingredientId: 382,
        measure: '2',
      },
      {
        recipeId: 114,
        ingredientId: 480,
        measure: '3 cloves',
      },
      {
        recipeId: 114,
        ingredientId: 279,
        measure: '1 head',
      },
      {
        recipeId: 114,
        ingredientId: 32,
        measure: '1',
      },
      {
        recipeId: 114,
        ingredientId: 491,
        measure: '200 ml',
      },
      {
        recipeId: 114,
        ingredientId: 62,
        measure: '30 g',
      },
      {
        recipeId: 114,
        ingredientId: 204,
        measure: '2 tbsp',
      },
      {
        recipeId: 114,
        ingredientId: 178,
        measure: '',
      },
      {
        recipeId: 115,
        ingredientId: 332,
        measure: '4',
      },
      {
        recipeId: 115,
        ingredientId: 148,
        measure: '2 tbs',
      },
      {
        recipeId: 115,
        ingredientId: 460,
        measure: '2',
      },
      {
        recipeId: 115,
        ingredientId: 340,
        measure: 'To serve',
      },
      {
        recipeId: 115,
        ingredientId: 60,
        measure: '8 slices',
      },
      {
        recipeId: 115,
        ingredientId: 289,
        measure: '2 tsp',
      },
      {
        recipeId: 115,
        ingredientId: 417,
        measure: '3 Yolkes',
      },
      {
        recipeId: 115,
        ingredientId: 62,
        measure: '125g',
      },
      {
        recipeId: 116,
        ingredientId: 177,
        measure: '1/2 cup ',
      },
      {
        recipeId: 116,
        ingredientId: 543,
        measure: '2 parts ',
      },
      {
        recipeId: 116,
        ingredientId: 511,
        measure: '1/2 cup ',
      },
      {
        recipeId: 116,
        ingredientId: 447,
        measure: '1/2 cup ',
      },
      {
        recipeId: 116,
        ingredientId: 340,
        measure: '6 tblsp',
      },
      {
        recipeId: 116,
        ingredientId: 332,
        measure: '2',
      },
      {
        recipeId: 116,
        ingredientId: 178,
        measure: '1 ½ tsp',
      },
      {
        recipeId: 116,
        ingredientId: 531,
        measure: '2-1/2 cups',
      },
      {
        recipeId: 116,
        ingredientId: 335,
        measure: 'for frying',
      },
      {
        recipeId: 116,
        ingredientId: 202,
        measure: 'garnish',
      },
      {
        recipeId: 116,
        ingredientId: 411,
        measure: 'garnish',
      },
      {
        recipeId: 117,
        ingredientId: 27,
        measure: '1 tbs',
      },
      {
        recipeId: 117,
        ingredientId: 171,
        measure: '300g',
      },
      {
        recipeId: 117,
        ingredientId: 398,
        measure: '4',
      },
      {
        recipeId: 117,
        ingredientId: 204,
        measure: '500g',
      },
      {
        recipeId: 117,
        ingredientId: 494,
        measure: '1',
      },
      {
        recipeId: 117,
        ingredientId: 516,
        measure: '100g ',
      },
      {
        recipeId: 117,
        ingredientId: 213,
        measure: 'Chopped',
      },
      {
        recipeId: 118,
        ingredientId: 433,
        measure: '8',
      },
      {
        recipeId: 118,
        ingredientId: 181,
        measure: '1 sliced',
      },
      {
        recipeId: 118,
        ingredientId: 27,
        measure: '1/2 cup ',
      },
      {
        recipeId: 118,
        ingredientId: 480,
        measure: '1 tsp ',
      },
      {
        recipeId: 118,
        ingredientId: 249,
        measure: '1 tsp ',
      },
      {
        recipeId: 118,
        ingredientId: 512,
        measure: '1',
      },
      {
        recipeId: 119,
        ingredientId: 453,
        measure: '250g',
      },
      {
        recipeId: 119,
        ingredientId: 340,
        measure: '175g',
      },
      {
        recipeId: 119,
        ingredientId: 447,
        measure: '2 tablespoons',
      },
      {
        recipeId: 119,
        ingredientId: 332,
        measure: '5',
      },
      {
        recipeId: 119,
        ingredientId: 304,
        measure: '175g',
      },
      {
        recipeId: 119,
        ingredientId: 531,
        measure: '125g',
      },
      {
        recipeId: 120,
        ingredientId: 27,
        measure: '2 tbsp',
      },
      {
        recipeId: 120,
        ingredientId: 283,
        measure: '4cm piece finely chopped',
      },
      {
        recipeId: 120,
        ingredientId: 267,
        measure: '2 cloves peeled and chopped',
      },
      {
        recipeId: 120,
        ingredientId: 24,
        measure: '800g peeled and chopped ',
      },
      {
        recipeId: 120,
        ingredientId: 289,
        measure: '2 tbsp',
      },
      {
        recipeId: 120,
        ingredientId: 521,
        measure: '1 tsp',
      },
      {
        recipeId: 120,
        ingredientId: 469,
        measure: '50',
      },
      {
        recipeId: 120,
        ingredientId: 126,
        measure: '1 large',
      },
      {
        recipeId: 120,
        ingredientId: 319,
        measure: '400g',
      },
      {
        recipeId: 120,
        ingredientId: 181,
        measure: '1 medium',
      },
      {
        recipeId: 120,
        ingredientId: 419,
        measure: '2 tbsp',
      },
      {
        recipeId: 120,
        ingredientId: 211,
        measure: '2 tbsp',
      },
      {
        recipeId: 120,
        ingredientId: 294,
        measure: '2 tbsp chopped',
      },
      {
        recipeId: 120,
        ingredientId: 411,
        measure: '½ tsp ground ',
      },
      {
        recipeId: 121,
        ingredientId: 124,
        measure: '900g',
      },
      {
        recipeId: 121,
        ingredientId: 27,
        measure: '2 tbsp',
      },
      {
        recipeId: 121,
        ingredientId: 72,
        measure: '600ml',
      },
      {
        recipeId: 121,
        ingredientId: 476,
        measure: '800g',
      },
      {
        recipeId: 121,
        ingredientId: 327,
        measure: '1 tbsp',
      },
      {
        recipeId: 121,
        ingredientId: 233,
        measure: 'Grating',
      },
      {
        recipeId: 121,
        ingredientId: 264,
        measure: '3 tbsp',
      },
      {
        recipeId: 121,
        ingredientId: 570,
        measure: '200g',
      },
      {
        recipeId: 121,
        ingredientId: 442,
        measure: '1 finely sliced',
      },
      {
        recipeId: 121,
        ingredientId: 524,
        measure: '200g peeled raw',
      },
      {
        recipeId: 121,
        ingredientId: 213,
        measure: 'Large handful',
      },
      {
        recipeId: 121,
        ingredientId: 39,
        measure: 'Handful',
      },
      {
        recipeId: 121,
        ingredientId: 202,
        measure: 'Grated zest of 1',
      },
      {
        recipeId: 121,
        ingredientId: 11,
        measure: '25g grated',
      },
      {
        recipeId: 122,
        ingredientId: 27,
        measure: '1 tbsp',
      },
      {
        recipeId: 122,
        ingredientId: 181,
        measure: '1 chopped',
      },
      {
        recipeId: 122,
        ingredientId: 161,
        measure: '200g',
      },
      {
        recipeId: 122,
        ingredientId: 283,
        measure: 'pinch',
      },
      {
        recipeId: 122,
        ingredientId: 38,
        measure: '2 tblsp ',
      },
      {
        recipeId: 122,
        ingredientId: 287,
        measure: '10',
      },
      {
        recipeId: 122,
        ingredientId: 574,
        measure: '220g',
      },
      {
        recipeId: 122,
        ingredientId: 240,
        measure: '200g',
      },
      {
        recipeId: 122,
        ingredientId: 384,
        measure: '200ml',
      },
      {
        recipeId: 122,
        ingredientId: 294,
        measure: 'Handful',
      },
      {
        recipeId: 123,
        ingredientId: 27,
        measure: '1 tbls',
      },
      {
        recipeId: 123,
        ingredientId: 181,
        measure: '1',
      },
      {
        recipeId: 123,
        ingredientId: 442,
        measure: '1 chopped',
      },
      {
        recipeId: 123,
        ingredientId: 267,
        measure: '3 cloves',
      },
      {
        recipeId: 123,
        ingredientId: 247,
        measure: '4 tsp ground ',
      },
      {
        recipeId: 123,
        ingredientId: 294,
        measure: '2 tsp ground',
      },
      {
        recipeId: 123,
        ingredientId: 108,
        measure: '1 tsp',
      },
      {
        recipeId: 123,
        ingredientId: 411,
        measure: '1/2 tsp',
      },
      {
        recipeId: 123,
        ingredientId: 376,
        measure: '1 tsp',
      },
      {
        recipeId: 123,
        ingredientId: 430,
        measure: '1 tsp',
      },
      {
        recipeId: 123,
        ingredientId: 302,
        measure: '1/2 tsp',
      },
      {
        recipeId: 123,
        ingredientId: 184,
        measure: '1 can',
      },
      {
        recipeId: 123,
        ingredientId: 177,
        measure: '3 cups',
      },
      {
        recipeId: 123,
        ingredientId: 292,
        measure: '3 chopped',
      },
      {
        recipeId: 123,
        ingredientId: 520,
        measure: '1 1/2 cups',
      },
      {
        recipeId: 123,
        ingredientId: 489,
        measure: '1 tsp',
      },
      {
        recipeId: 123,
        ingredientId: 370,
        measure: '1 Small',
      },
      {
        recipeId: 123,
        ingredientId: 310,
        measure: '1 Cup',
      },
      {
        recipeId: 123,
        ingredientId: 274,
        measure: '1 tsp',
      },
      {
        recipeId: 124,
        ingredientId: 71,
        measure: '8 slices',
      },
      {
        recipeId: 124,
        ingredientId: 134,
        measure: '12 florets',
      },
      {
        recipeId: 124,
        ingredientId: 179,
        measure: '1 Packet',
      },
      {
        recipeId: 124,
        ingredientId: 292,
        measure: '1 Packet',
      },
      {
        recipeId: 124,
        ingredientId: 327,
        measure: '140g',
      },
      {
        recipeId: 124,
        ingredientId: 332,
        measure: '4',
      },
      {
        recipeId: 124,
        ingredientId: 447,
        measure: '200ml',
      },
      {
        recipeId: 124,
        ingredientId: 363,
        measure: 'drizzle (for cooking)',
      },
      {
        recipeId: 125,
        ingredientId: 523,
        measure: '1 pound',
      },
      {
        recipeId: 125,
        ingredientId: 27,
        measure: '1/4 cup',
      },
      {
        recipeId: 125,
        ingredientId: 267,
        measure: '3 cloves',
      },
      {
        recipeId: 125,
        ingredientId: 441,
        measure: '1 tin ',
      },
      {
        recipeId: 125,
        ingredientId: 131,
        measure: '1/2 teaspoon',
      },
      {
        recipeId: 125,
        ingredientId: 306,
        measure: '1/2 teaspoon',
      },
      {
        recipeId: 125,
        ingredientId: 160,
        measure: '6 leaves',
      },
      {
        recipeId: 125,
        ingredientId: 77,
        measure: 'spinkling',
      },
      {
        recipeId: 126,
        ingredientId: 326,
        measure: '125g',
      },
      {
        recipeId: 126,
        ingredientId: 521,
        measure: '50g',
      },
      {
        recipeId: 126,
        ingredientId: 430,
        measure: '5 tbs',
      },
      {
        recipeId: 126,
        ingredientId: 417,
        measure: '1 beaten',
      },
      {
        recipeId: 126,
        ingredientId: 471,
        measure: '200g shredded',
      },
      {
        recipeId: 126,
        ingredientId: 551,
        measure: '100g ',
      },
      {
        recipeId: 126,
        ingredientId: 362,
        measure: '50g',
      },
      {
        recipeId: 126,
        ingredientId: 340,
        measure: '100g ',
      },
      {
        recipeId: 126,
        ingredientId: 264,
        measure: '4 tbs',
      },
      {
        recipeId: 126,
        ingredientId: 383,
        measure: '3 tbs',
      },
      {
        recipeId: 126,
        ingredientId: 455,
        measure: '250g',
      },
      {
        recipeId: 126,
        ingredientId: 391,
        measure: '150g',
      },
      {
        recipeId: 127,
        ingredientId: 531,
        measure: '4 cups ',
      },
      {
        recipeId: 127,
        ingredientId: 177,
        measure: '1 1/2 cups ',
      },
      {
        recipeId: 127,
        ingredientId: 178,
        measure: '1/4 tsp',
      },
      {
        recipeId: 127,
        ingredientId: 62,
        measure: '1 cup ',
      },
      {
        recipeId: 127,
        ingredientId: 27,
        measure: '1/4 cup',
      },
      {
        recipeId: 128,
        ingredientId: 5,
        measure: '8',
      },
      {
        recipeId: 128,
        ingredientId: 521,
        measure: '100g ',
      },
      {
        recipeId: 128,
        ingredientId: 340,
        measure: '100g ',
      },
      {
        recipeId: 128,
        ingredientId: 43,
        measure: '2',
      },
      {
        recipeId: 128,
        ingredientId: 136,
        measure: '3 Pods',
      },
      {
        recipeId: 128,
        ingredientId: 411,
        measure: '1 large',
      },
      {
        recipeId: 128,
        ingredientId: 79,
        measure: '2 tbs',
      },
      {
        recipeId: 128,
        ingredientId: 349,
        measure: '500g',
      },
      {
        recipeId: 129,
        ingredientId: 527,
        measure: '3 cups ',
      },
      {
        recipeId: 129,
        ingredientId: 6,
        measure: '6',
      },
      {
        recipeId: 129,
        ingredientId: 279,
        measure: '4',
      },
      {
        recipeId: 129,
        ingredientId: 213,
        measure: '1/4 cup',
      },
      {
        recipeId: 129,
        ingredientId: 247,
        measure: '2 tsp',
      },
      {
        recipeId: 129,
        ingredientId: 3,
        measure: '1 tsp ',
      },
      {
        recipeId: 129,
        ingredientId: 16,
        measure: '1/2 tsp',
      },
      {
        recipeId: 129,
        ingredientId: 531,
        measure: 'Spinkling',
      },
      {
        recipeId: 129,
        ingredientId: 55,
        measure: 'As required',
      },
      {
        recipeId: 130,
        ingredientId: 325,
        measure: '12',
      },
      {
        recipeId: 130,
        ingredientId: 182,
        measure: '1/2 ',
      },
      {
        recipeId: 130,
        ingredientId: 6,
        measure: '1  bunch',
      },
      {
        recipeId: 130,
        ingredientId: 283,
        measure: '1 tbs chopped',
      },
      {
        recipeId: 130,
        ingredientId: 267,
        measure: '3 cloves',
      },
      {
        recipeId: 130,
        ingredientId: 181,
        measure: '1/2 ',
      },
      {
        recipeId: 130,
        ingredientId: 390,
        measure: '3 chopped',
      },
      {
        recipeId: 130,
        ingredientId: 40,
        measure: '1/2 teaspoon',
      },
      {
        recipeId: 130,
        ingredientId: 440,
        measure: '2 tbs',
      },
      {
        recipeId: 130,
        ingredientId: 55,
        measure: '2 tbs',
      },
      {
        recipeId: 130,
        ingredientId: 389,
        measure: '3 tbs',
      },
      {
        recipeId: 130,
        ingredientId: 480,
        measure: '1 tbs',
      },
      {
        recipeId: 130,
        ingredientId: 419,
        measure: '200g',
      },
      {
        recipeId: 130,
        ingredientId: 152,
        measure: '400g',
      },
      {
        recipeId: 130,
        ingredientId: 253,
        measure: '800g',
      },
      {
        recipeId: 131,
        ingredientId: 340,
        measure: '2 tbs',
      },
      {
        recipeId: 131,
        ingredientId: 541,
        measure: '1/3 cup',
      },
      {
        recipeId: 131,
        ingredientId: 49,
        measure: '1 1/2 cups ',
      },
      {
        recipeId: 131,
        ingredientId: 179,
        measure: '2 cups ',
      },
      {
        recipeId: 131,
        ingredientId: 332,
        measure: '3',
      },
      {
        recipeId: 131,
        ingredientId: 547,
        measure: '1 pot',
      },
      {
        recipeId: 131,
        ingredientId: 531,
        measure: '3 cups ',
      },
      {
        recipeId: 131,
        ingredientId: 178,
        measure: '1/4 tsp',
      },
      {
        recipeId: 131,
        ingredientId: 3,
        measure: '1 tbs',
      },
      {
        recipeId: 132,
        ingredientId: 177,
        measure: '2L',
      },
      {
        recipeId: 132,
        ingredientId: 528,
        measure: '300g',
      },
      {
        recipeId: 132,
        ingredientId: 14,
        measure: '100g ',
      },
      {
        recipeId: 132,
        ingredientId: 320,
        measure: '1',
      },
      {
        recipeId: 132,
        ingredientId: 121,
        measure: '2',
      },
      {
        recipeId: 132,
        ingredientId: 292,
        measure: '2',
      },
      {
        recipeId: 132,
        ingredientId: 179,
        measure: '1 large',
      },
      {
        recipeId: 132,
        ingredientId: 181,
        measure: '1 small',
      },
      {
        recipeId: 132,
        ingredientId: 442,
        measure: '1 small',
      },
      {
        recipeId: 132,
        ingredientId: 159,
        measure: '1 cup ',
      },
      {
        recipeId: 132,
        ingredientId: 542,
        measure: '1 pound',
      },
      {
        recipeId: 133,
        ingredientId: 114,
        measure: '4',
      },
      {
        recipeId: 133,
        ingredientId: 283,
        measure: '1 inch',
      },
      {
        recipeId: 133,
        ingredientId: 267,
        measure: '8 cloves',
      },
      {
        recipeId: 133,
        ingredientId: 249,
        measure: '1.5 tsp',
      },
      {
        recipeId: 133,
        ingredientId: 247,
        measure: '1 tsp',
      },
      {
        recipeId: 133,
        ingredientId: 243,
        measure: '½ tsp',
      },
      {
        recipeId: 133,
        ingredientId: 255,
        measure: 'To your taste',
      },
      {
        recipeId: 133,
        ingredientId: 136,
        measure: '2',
      },
      {
        recipeId: 133,
        ingredientId: 511,
        measure: '1 tbsp',
      },
      {
        recipeId: 133,
        ingredientId: 548,
        measure: '2 marble sized',
      },
      {
        recipeId: 133,
        ingredientId: 501,
        measure: '2.5 tbsp',
      },
      {
        recipeId: 133,
        ingredientId: 335,
        measure: 'for frying',
      },
      {
        recipeId: 134,
        ingredientId: 327,
        measure: '300g',
      },
      {
        recipeId: 134,
        ingredientId: 340,
        measure: '75g',
      },
      {
        recipeId: 134,
        ingredientId: 248,
        measure: '100g ',
      },
      {
        recipeId: 134,
        ingredientId: 455,
        measure: '1 tbls',
      },
      {
        recipeId: 134,
        ingredientId: 168,
        measure: '200ml',
      },
      {
        recipeId: 134,
        ingredientId: 567,
        measure: '250g',
      },
      {
        recipeId: 134,
        ingredientId: 280,
        measure: '100g ',
      },
      {
        recipeId: 134,
        ingredientId: 332,
        measure: '4',
      },
      {
        recipeId: 134,
        ingredientId: 556,
        measure: '1 tsp ',
      },
      {
        recipeId: 134,
        ingredientId: 486,
        measure: '400g',
      },
      {
        recipeId: 134,
        ingredientId: 449,
        measure: '200g',
      },
      {
        recipeId: 135,
        ingredientId: 340,
        measure: '1 tbs',
      },
      {
        recipeId: 135,
        ingredientId: 539,
        measure: '4',
      },
      {
        recipeId: 135,
        ingredientId: 181,
        measure: '1 finely sliced',
      },
      {
        recipeId: 135,
        ingredientId: 279,
        measure: '1 chopped',
      },
      {
        recipeId: 135,
        ingredientId: 100,
        measure: '20',
      },
      {
        recipeId: 135,
        ingredientId: 179,
        measure: '400g',
      },
      {
        recipeId: 136,
        ingredientId: 27,
        measure: '2½ tbsp',
      },
      {
        recipeId: 136,
        ingredientId: 252,
        measure: '6 cut into 1.5cm-thick slices',
      },
      {
        recipeId: 136,
        ingredientId: 181,
        measure: '1 large peeled and chopped',
      },
      {
        recipeId: 136,
        ingredientId: 126,
        measure: '1 trimmed and roughly chopped; reserve any fronds to garnish',
      },
      {
        recipeId: 136,
        ingredientId: 399,
        measure: '½ tsp',
      },
      {
        recipeId: 136,
        ingredientId: 267,
        measure: '1 clove, peeled and sliced',
      },
      {
        recipeId: 136,
        ingredientId: 422,
        measure: '2 tsp lightly toasted and then gently crushed',
      },
      {
        recipeId: 136,
        ingredientId: 105,
        measure: '100ml',
      },
      {
        recipeId: 136,
        ingredientId: 441,
        measure: '400g tinned',
      },
      {
        recipeId: 136,
        ingredientId: 521,
        measure: '½ tsp',
      },
      {
        recipeId: 136,
        ingredientId: 199,
        measure: '50g cut in half lengthways',
      },
      {
        recipeId: 136,
        ingredientId: 451,
        measure: '500g',
      },
      {
        recipeId: 136,
        ingredientId: 169,
        measure: '30g roughly crumbled into 0.5cm pieces',
      },
      {
        recipeId: 136,
        ingredientId: 482,
        measure: '1  rinsed and patted dry',
      },
      {
        recipeId: 136,
        ingredientId: 295,
        measure: '50g torn',
      },
      {
        recipeId: 137,
        ingredientId: 244,
        measure: '50g',
      },
      {
        recipeId: 137,
        ingredientId: 202,
        measure: 'zest and juice of 1',
      },
      {
        recipeId: 137,
        ingredientId: 27,
        measure: '2 tblsp ',
      },
      {
        recipeId: 137,
        ingredientId: 464,
        measure: '1 chopped',
      },
      {
        recipeId: 137,
        ingredientId: 267,
        measure: '1 clove peeled crushed',
      },
      {
        recipeId: 137,
        ingredientId: 32,
        measure: '1 thinly sliced',
      },
      {
        recipeId: 137,
        ingredientId: 344,
        measure: '200g',
      },
      {
        recipeId: 137,
        ingredientId: 434,
        measure: '1 sliced',
      },
      {
        recipeId: 137,
        ingredientId: 229,
        measure: '100g shredded',
      },
      {
        recipeId: 137,
        ingredientId: 406,
        measure: '250g pack',
      },
      {
        recipeId: 138,
        ingredientId: 531,
        measure: '250g',
      },
      {
        recipeId: 138,
        ingredientId: 340,
        measure: '125g',
      },
      {
        recipeId: 138,
        ingredientId: 417,
        measure: '1',
      },
      {
        recipeId: 138,
        ingredientId: 178,
        measure: 'Pinch',
      },
      {
        recipeId: 138,
        ingredientId: 137,
        measure: '300g',
      },
      {
        recipeId: 138,
        ingredientId: 447,
        measure: '100ml milk',
      },
      {
        recipeId: 138,
        ingredientId: 332,
        measure: '3',
      },
      {
        recipeId: 138,
        ingredientId: 303,
        measure: '100g',
      },
      {
        recipeId: 138,
        ingredientId: 472,
        measure: '350g',
      },
      {
        recipeId: 138,
        ingredientId: 262,
        measure: '3tbsp',
      },
      {
        recipeId: 138,
        ingredientId: 519,
        measure: '1 tbsp',
      },
      {
        recipeId: 138,
        ingredientId: 160,
        measure: 'Topping',
      },
      {
        recipeId: 139,
        ingredientId: 405,
        measure: '227g',
      },
      {
        recipeId: 139,
        ingredientId: 340,
        measure: '25g',
      },
      {
        recipeId: 139,
        ingredientId: 173,
        measure: '1 tsp ',
      },
      {
        recipeId: 139,
        ingredientId: 303,
        measure: '100g ',
      },
      {
        recipeId: 139,
        ingredientId: 233,
        measure: 'Grated',
      },
      {
        recipeId: 139,
        ingredientId: 427,
        measure: '250g',
      },
      {
        recipeId: 139,
        ingredientId: 213,
        measure: 'Chopped',
      },
      {
        recipeId: 140,
        ingredientId: 394,
        measure: '750g',
      },
      {
        recipeId: 140,
        ingredientId: 559,
        measure: '350g',
      },
      {
        recipeId: 140,
        ingredientId: 327,
        measure: 'Dusting',
      },
      {
        recipeId: 140,
        ingredientId: 521,
        measure: '140g',
      },
      {
        recipeId: 140,
        ingredientId: 178,
        measure: '½ tsp',
      },
      {
        recipeId: 140,
        ingredientId: 233,
        measure: '½ tsp',
      },
      {
        recipeId: 140,
        ingredientId: 411,
        measure: '1 tsp ',
      },
      {
        recipeId: 140,
        ingredientId: 332,
        measure: '2 Beaten ',
      },
      {
        recipeId: 140,
        ingredientId: 340,
        measure: '25g',
      },
      {
        recipeId: 140,
        ingredientId: 447,
        measure: '175g',
      },
      {
        recipeId: 140,
        ingredientId: 455,
        measure: '1 tblsp ',
      },
      {
        recipeId: 141,
        ingredientId: 179,
        measure: '5 Large',
      },
      {
        recipeId: 141,
        ingredientId: 27,
        measure: '2 tbs',
      },
      {
        recipeId: 141,
        ingredientId: 459,
        measure: '1',
      },
      {
        recipeId: 141,
        ingredientId: 106,
        measure: '5',
      },
      {
        recipeId: 141,
        ingredientId: 540,
        measure: '1 tbs',
      },
      {
        recipeId: 141,
        ingredientId: 394,
        measure: '500g',
      },
      {
        recipeId: 141,
        ingredientId: 332,
        measure: '24 Skinned',
      },
      {
        recipeId: 141,
        ingredientId: 178,
        measure: 'Pinch',
      },
      {
        recipeId: 141,
        ingredientId: 249,
        measure: 'Pinch',
      },
      {
        recipeId: 142,
        ingredientId: 340,
        measure: '50g',
      },
      {
        recipeId: 142,
        ingredientId: 365,
        measure: '250g',
      },
      {
        recipeId: 142,
        ingredientId: 533,
        measure: '1 small',
      },
      {
        recipeId: 142,
        ingredientId: 350,
        measure: '50g',
      },
      {
        recipeId: 142,
        ingredientId: 447,
        measure: '150ml',
      },
      {
        recipeId: 142,
        ingredientId: 458,
        measure: '100g ',
      },
      {
        recipeId: 142,
        ingredientId: 326,
        measure: 'to serve',
      },
      {
        recipeId: 143,
        ingredientId: 454,
        measure: '250 Grams',
      },
      {
        recipeId: 143,
        ingredientId: 111,
        measure: '500 Grams',
      },
      {
        recipeId: 143,
        ingredientId: 228,
        measure: 'Topping',
      },
      {
        recipeId: 143,
        ingredientId: 529,
        measure: 'Topping',
      },
      {
        recipeId: 143,
        ingredientId: 312,
        measure: '1 Bulb',
      },
      {
        recipeId: 143,
        ingredientId: 298,
        measure: '1',
      },
      {
        recipeId: 143,
        ingredientId: 208,
        measure: '3rd',
      },
      {
        recipeId: 143,
        ingredientId: 515,
        measure: '100 Grams',
      },
      {
        recipeId: 144,
        ingredientId: 101,
        measure: '1½ kg',
      },
      {
        recipeId: 144,
        ingredientId: 340,
        measure: '50g',
      },
      {
        recipeId: 144,
        ingredientId: 539,
        measure: '150g',
      },
      {
        recipeId: 144,
        ingredientId: 181,
        measure: '1 finely chopped ',
      },
      {
        recipeId: 144,
        ingredientId: 40,
        measure: 'sprigs of fresh',
      },
      {
        recipeId: 144,
        ingredientId: 512,
        measure: '1',
      },
      {
        recipeId: 144,
        ingredientId: 327,
        measure: '1 tbls',
      },
      {
        recipeId: 144,
        ingredientId: 447,
        measure: '150ml',
      },
      {
        recipeId: 144,
        ingredientId: 264,
        measure: '150ml',
      },
      {
        recipeId: 144,
        ingredientId: 179,
        measure: '2 medium',
      },
      {
        recipeId: 144,
        ingredientId: 213,
        measure: 'Chopped',
      },
      {
        recipeId: 145,
        ingredientId: 524,
        measure: '6 large',
      },
      {
        recipeId: 145,
        ingredientId: 27,
        measure: '3 tbs',
      },
      {
        recipeId: 145,
        ingredientId: 437,
        measure: '150ml',
      },
      {
        recipeId: 145,
        ingredientId: 504,
        measure: '200ml',
      },
      {
        recipeId: 145,
        ingredientId: 353,
        measure: '1 small finely diced',
      },
      {
        recipeId: 145,
        ingredientId: 181,
        measure: '1 small finely diced',
      },
      {
        recipeId: 145,
        ingredientId: 267,
        measure: '3 cloves Chopped',
      },
      {
        recipeId: 145,
        ingredientId: 179,
        measure: '1 large',
      },
      {
        recipeId: 145,
        ingredientId: 217,
        measure: '1',
      },
      {
        recipeId: 145,
        ingredientId: 43,
        measure: '1',
      },
      {
        recipeId: 145,
        ingredientId: 512,
        measure: '1',
      },
      {
        recipeId: 145,
        ingredientId: 38,
        measure: '1 1/2 tsp ',
      },
      {
        recipeId: 145,
        ingredientId: 491,
        measure: '2 tbs',
      },
      {
        recipeId: 145,
        ingredientId: 441,
        measure: '400g',
      },
      {
        recipeId: 145,
        ingredientId: 257,
        measure: 'Handful',
      },
      {
        recipeId: 145,
        ingredientId: 86,
        measure: '200g',
      },
      {
        recipeId: 145,
        ingredientId: 40,
        measure: '2',
      },
      {
        recipeId: 145,
        ingredientId: 296,
        measure: 'to serve',
      },
      {
        recipeId: 146,
        ingredientId: 389,
        measure: '2 cups ',
      },
      {
        recipeId: 146,
        ingredientId: 340,
        measure: '¼ cup',
      },
      {
        recipeId: 146,
        ingredientId: 332,
        measure: '2',
      },
      {
        recipeId: 146,
        ingredientId: 556,
        measure: '1 tsp ',
      },
      {
        recipeId: 146,
        ingredientId: 178,
        measure: '1 tsp ',
      },
      {
        recipeId: 146,
        ingredientId: 327,
        measure: '½ cup ',
      },
      {
        recipeId: 146,
        ingredientId: 447,
        measure: '1 1/2 cups ',
      },
      {
        recipeId: 147,
        ingredientId: 71,
        measure: '1/2 lb',
      },
      {
        recipeId: 147,
        ingredientId: 178,
        measure: '1/2 tsp',
      },
      {
        recipeId: 147,
        ingredientId: 538,
        measure: '1 tsp ',
      },
      {
        recipeId: 147,
        ingredientId: 249,
        measure: '1 pinch',
      },
      {
        recipeId: 147,
        ingredientId: 180,
        measure: '1',
      },
      {
        recipeId: 147,
        ingredientId: 381,
        measure: '3 tbs',
      },
      {
        recipeId: 147,
        ingredientId: 335,
        measure: '4 tbs',
      },
      {
        recipeId: 147,
        ingredientId: 283,
        measure: '1 tsp ',
      },
      {
        recipeId: 147,
        ingredientId: 267,
        measure: '1 tsp ',
      },
      {
        recipeId: 147,
        ingredientId: 181,
        measure: '3/4 cup ',
      },
      {
        recipeId: 147,
        ingredientId: 292,
        measure: '1/2 cup ',
      },
      {
        recipeId: 147,
        ingredientId: 459,
        measure: '3/4 cup ',
      },
      {
        recipeId: 147,
        ingredientId: 121,
        measure: '1 cup ',
      },
      {
        recipeId: 147,
        ingredientId: 171,
        measure: '1 cup ',
      },
      {
        recipeId: 147,
        ingredientId: 492,
        measure: '1 tbs',
      },
      {
        recipeId: 147,
        ingredientId: 177,
        measure: '1 cup ',
      },
      {
        recipeId: 147,
        ingredientId: 562,
        measure: '1 tbs',
      },
      {
        recipeId: 147,
        ingredientId: 529,
        measure: '1/2 tsp',
      },
      {
        recipeId: 147,
        ingredientId: 511,
        measure: '1 tsp ',
      },
      {
        recipeId: 147,
        ingredientId: 440,
        measure: '1 tbs',
      },
      {
        recipeId: 148,
        ingredientId: 140,
        measure: '6 chopped',
      },
      {
        recipeId: 148,
        ingredientId: 340,
        measure: '150g',
      },
      {
        recipeId: 148,
        ingredientId: 85,
        measure: '120g',
      },
      {
        recipeId: 148,
        ingredientId: 337,
        measure: '150g',
      },
      {
        recipeId: 149,
        ingredientId: 349,
        measure: '300g',
      },
      {
        recipeId: 149,
        ingredientId: 327,
        measure: 'Dusting',
      },
      {
        recipeId: 149,
        ingredientId: 484,
        measure: '6',
      },
      {
        recipeId: 149,
        ingredientId: 521,
        measure: '100g ',
      },
      {
        recipeId: 149,
        ingredientId: 340,
        measure: '85g',
      },
      {
        recipeId: 149,
        ingredientId: 282,
        measure: 'to serve',
      },
      {
        recipeId: 150,
        ingredientId: 438,
        measure: '225g',
      },
      {
        recipeId: 150,
        ingredientId: 177,
        measure: '175ml Boiling',
      },
      {
        recipeId: 150,
        ingredientId: 556,
        measure: '1 tsp',
      },
      {
        recipeId: 150,
        ingredientId: 365,
        measure: '175g',
      },
      {
        recipeId: 150,
        ingredientId: 425,
        measure: '1 tsp',
      },
      {
        recipeId: 150,
        ingredientId: 332,
        measure: '2',
      },
      {
        recipeId: 150,
        ingredientId: 340,
        measure: '85g',
      },
      {
        recipeId: 150,
        ingredientId: 478,
        measure: '140g',
      },
      {
        recipeId: 150,
        ingredientId: 113,
        measure: '2 tbsp',
      },
      {
        recipeId: 150,
        ingredientId: 447,
        measure: '100ml',
      },
      {
        recipeId: 150,
        ingredientId: 135,
        measure: '1 scoop',
      },
      {
        recipeId: 150,
        ingredientId: 462,
        measure: '175g',
      },
      {
        recipeId: 150,
        ingredientId: 264,
        measure: '225ml',
      },
      {
        recipeId: 151,
        ingredientId: 181,
        measure: '2 quartered',
      },
      {
        recipeId: 151,
        ingredientId: 363,
        measure: '4 tbsp',
      },
      {
        recipeId: 151,
        ingredientId: 267,
        measure: '4 cloves',
      },
      {
        recipeId: 151,
        ingredientId: 283,
        measure: 'Thumb sized peeled and very finely grated',
      },
      {
        recipeId: 151,
        ingredientId: 21,
        measure: '2 tbsp',
      },
      {
        recipeId: 151,
        ingredientId: 26,
        measure: '2 tsp',
      },
      {
        recipeId: 151,
        ingredientId: 255,
        measure: '1',
      },
      {
        recipeId: 151,
        ingredientId: 136,
        measure: '6 bashed to break shells',
      },
      {
        recipeId: 151,
        ingredientId: 512,
        measure: '2',
      },
      {
        recipeId: 151,
        ingredientId: 490,
        measure: '1kg cubed',
      },
      {
        recipeId: 151,
        ingredientId: 83,
        measure: '150ml',
      },
      {
        recipeId: 151,
        ingredientId: 294,
        measure: 'Garnish chopped ',
      },
      {
        recipeId: 152,
        ingredientId: 475,
        measure: '12',
      },
      {
        recipeId: 152,
        ingredientId: 432,
        measure: '½ tbsp',
      },
      {
        recipeId: 152,
        ingredientId: 42,
        measure: '½ tbsp',
      },
      {
        recipeId: 152,
        ingredientId: 106,
        measure: '3 sliced thinly',
      },
      {
        recipeId: 152,
        ingredientId: 514,
        measure: '2 tsp',
      },
      {
        recipeId: 152,
        ingredientId: 267,
        measure: '4 whole',
      },
      {
        recipeId: 152,
        ingredientId: 355,
        measure: 'Leaves',
      },
      {
        recipeId: 152,
        ingredientId: 532,
        measure: 'Leaves',
      },
      {
        recipeId: 152,
        ingredientId: 215,
        measure: '½ tsp dissolved in ½ cup warm milk',
      },
      {
        recipeId: 152,
        ingredientId: 96,
        measure: '2 tbsp',
      },
      {
        recipeId: 152,
        ingredientId: 419,
        measure: '2 Cups',
      },
      {
        recipeId: 152,
        ingredientId: 466,
        measure: '½ cup',
      },
      {
        recipeId: 152,
        ingredientId: 512,
        measure: '½',
      },
      {
        recipeId: 152,
        ingredientId: 411,
        measure: '1 thin piece',
      },
      {
        recipeId: 152,
        ingredientId: 163,
        measure: '3',
      },
      {
        recipeId: 152,
        ingredientId: 136,
        measure: '2',
      },
      {
        recipeId: 152,
        ingredientId: 490,
        measure: '1 lb',
      },
      {
        recipeId: 152,
        ingredientId: 245,
        measure: '1 tsp',
      },
      {
        recipeId: 152,
        ingredientId: 258,
        measure: '1 tbsp',
      },
      {
        recipeId: 153,
        ingredientId: 27,
        measure: '1½ tbsp',
      },
      {
        recipeId: 153,
        ingredientId: 539,
        measure: '3 rashers (100g) chopped dry-cured',
      },
      {
        recipeId: 153,
        ingredientId: 164,
        measure: '12 small',
      },
      {
        recipeId: 153,
        ingredientId: 398,
        measure: '2 (460g)',
      },
      {
        recipeId: 153,
        ingredientId: 325,
        measure: '4 (650g)',
      },
      {
        recipeId: 153,
        ingredientId: 155,
        measure: '2 (280g)',
      },
      {
        recipeId: 153,
        ingredientId: 267,
        measure: '3 finely chopped',
      },
      {
        recipeId: 153,
        ingredientId: 79,
        measure: '3 tbsp',
      },
      {
        recipeId: 153,
        ingredientId: 105,
        measure: '600ml',
      },
      {
        recipeId: 153,
        ingredientId: 384,
        measure: '150ml',
      },
      {
        recipeId: 153,
        ingredientId: 491,
        measure: '2 tsp',
      },
      {
        recipeId: 153,
        ingredientId: 40,
        measure: '3 sprigs',
      },
      {
        recipeId: 153,
        ingredientId: 420,
        measure: '2 sprigs',
      },
      {
        recipeId: 153,
        ingredientId: 382,
        measure: '2',
      },
      {
        recipeId: 153,
        ingredientId: 213,
        measure: 'garnish',
      },
      {
        recipeId: 153,
        ingredientId: 568,
        measure: '250g',
      },
      {
        recipeId: 153,
        ingredientId: 327,
        measure: '2 tbsp',
      },
      {
        recipeId: 153,
        ingredientId: 340,
        measure: '1 tsp',
      },
      {
        recipeId: 154,
        ingredientId: 487,
        measure: '350g',
      },
      {
        recipeId: 154,
        ingredientId: 267,
        measure: '3 parts ',
      },
      {
        recipeId: 154,
        ingredientId: 27,
        measure: '3 tbs',
      },
      {
        recipeId: 154,
        ingredientId: 76,
        measure: '350g',
      },
      {
        recipeId: 154,
        ingredientId: 561,
        measure: 'Small bunch',
      },
      {
        recipeId: 155,
        ingredientId: 247,
        measure: '2 tsp',
      },
      {
        recipeId: 155,
        ingredientId: 110,
        measure: '1 tbs',
      },
      {
        recipeId: 155,
        ingredientId: 464,
        measure: '2 finely chopped',
      },
      {
        recipeId: 155,
        ingredientId: 279,
        measure: '6',
      },
      {
        recipeId: 155,
        ingredientId: 530,
        measure: '3 finely chopped',
      },
      {
        recipeId: 155,
        ingredientId: 569,
        measure: '1 finely chopped ',
      },
      {
        recipeId: 155,
        ingredientId: 233,
        measure: '1 tsp ',
      },
      {
        recipeId: 155,
        ingredientId: 294,
        measure: '2 tsp',
      },
      {
        recipeId: 155,
        ingredientId: 319,
        measure: '1kg',
      },
      {
        recipeId: 155,
        ingredientId: 249,
        measure: '1 tsp ',
      },
      {
        recipeId: 155,
        ingredientId: 327,
        measure: '340g',
      },
      {
        recipeId: 155,
        ingredientId: 178,
        measure: '½ tsp',
      },
      {
        recipeId: 155,
        ingredientId: 447,
        measure: '90 ml ',
      },
      {
        recipeId: 155,
        ingredientId: 222,
        measure: '150g',
      },
      {
        recipeId: 155,
        ingredientId: 473,
        measure: 'Beaten',
      },
      {
        recipeId: 156,
        ingredientId: 46,
        measure: '2 cups',
      },
      {
        recipeId: 156,
        ingredientId: 426,
        measure: '2 tbs',
      },
      {
        recipeId: 156,
        ingredientId: 557,
        measure: '1 – 14-ounce can',
      },
      {
        recipeId: 156,
        ingredientId: 556,
        measure: '1 tsp',
      },
      {
        recipeId: 156,
        ingredientId: 277,
        measure: '1-⅓ cups',
      },
      {
        recipeId: 156,
        ingredientId: 444,
        measure: '1-½ cups',
      },
      {
        recipeId: 157,
        ingredientId: 119,
        measure: '1 large',
      },
      {
        recipeId: 157,
        ingredientId: 332,
        measure: '2 medium',
      },
      {
        recipeId: 157,
        ingredientId: 3,
        measure: 'pinch',
      },
      {
        recipeId: 157,
        ingredientId: 556,
        measure: 'spinkling',
      },
      {
        recipeId: 157,
        ingredientId: 335,
        measure: '1 tsp ',
      },
      {
        recipeId: 157,
        ingredientId: 486,
        measure: '25g',
      },
      {
        recipeId: 157,
        ingredientId: 373,
        measure: '125g',
      },
      {
        recipeId: 158,
        ingredientId: 106,
        measure: '2',
      },
      {
        recipeId: 158,
        ingredientId: 27,
        measure: '1tbsp',
      },
      {
        recipeId: 158,
        ingredientId: 267,
        measure: '1 clove',
      },
      {
        recipeId: 158,
        ingredientId: 358,
        measure: '500g',
      },
      {
        recipeId: 158,
        ingredientId: 171,
        measure: '90g',
      },
      {
        recipeId: 158,
        ingredientId: 302,
        measure: '1tsp',
      },
      {
        recipeId: 158,
        ingredientId: 24,
        measure: '400g can',
      },
      {
        recipeId: 158,
        ingredientId: 316,
        measure: '300ml',
      },
      {
        recipeId: 158,
        ingredientId: 491,
        measure: '1tbsp',
      },
      {
        recipeId: 158,
        ingredientId: 120,
        measure: '1tbsp',
      },
      {
        recipeId: 158,
        ingredientId: 261,
        measure: '350g',
      },
      {
        recipeId: 158,
        ingredientId: 565,
        measure: 'Topping',
      },
      {
        recipeId: 159,
        ingredientId: 14,
        measure: '1.5 pounds sliced',
      },
      {
        recipeId: 159,
        ingredientId: 408,
        measure: '1 package thin',
      },
      {
        recipeId: 159,
        ingredientId: 435,
        measure: '4-6',
      },
      {
        recipeId: 159,
        ingredientId: 209,
        measure: '3 tablespoons minced',
      },
      {
        recipeId: 159,
        ingredientId: 267,
        measure: '1.5 tablespoons minced garlic',
      },
      {
        recipeId: 159,
        ingredientId: 511,
        measure: '¼ cup',
      },
      {
        recipeId: 159,
        ingredientId: 224,
        measure: '1 tablespoon',
      },
      {
        recipeId: 159,
        ingredientId: 440,
        measure: '½ tablespoon thick',
      },
      {
        recipeId: 159,
        ingredientId: 249,
        measure: '½ tablespoon',
      },
      {
        recipeId: 159,
        ingredientId: 27,
        measure: '3 tablespoons',
      },
      {
        recipeId: 159,
        ingredientId: 208,
        measure: 'Sliced',
      },
      {
        recipeId: 159,
        ingredientId: 355,
        measure: 'Leaves',
      },
      {
        recipeId: 159,
        ingredientId: 216,
        measure: 'Crushed',
      },
      {
        recipeId: 160,
        ingredientId: 33,
        measure: '500g',
      },
      {
        recipeId: 160,
        ingredientId: 264,
        measure: '400ml',
      },
      {
        recipeId: 160,
        ingredientId: 545,
        measure: '3 x 7.5cm',
      },
      {
        recipeId: 160,
        ingredientId: 7,
        measure: '1 tbsp',
      },
      {
        recipeId: 160,
        ingredientId: 355,
        measure: 'sprigs of fresh',
      },
      {
        recipeId: 161,
        ingredientId: 27,
        measure: '2 tblsp ',
      },
      {
        recipeId: 161,
        ingredientId: 181,
        measure: '1 finely sliced',
      },
      {
        recipeId: 161,
        ingredientId: 292,
        measure: '2 chopped',
      },
      {
        recipeId: 161,
        ingredientId: 241,
        measure: '500g',
      },
      {
        recipeId: 161,
        ingredientId: 267,
        measure: '2 cloves minced',
      },
      {
        recipeId: 161,
        ingredientId: 247,
        measure: '½ tsp',
      },
      {
        recipeId: 161,
        ingredientId: 283,
        measure: '½ tsp',
      },
      {
        recipeId: 161,
        ingredientId: 215,
        measure: '¼ tsp',
      },
      {
        recipeId: 161,
        ingredientId: 411,
        measure: '1 tsp ',
      },
      {
        recipeId: 161,
        ingredientId: 519,
        measure: '1 tblsp ',
      },
      {
        recipeId: 161,
        ingredientId: 73,
        measure: '100g ',
      },
      {
        recipeId: 161,
        ingredientId: 320,
        measure: '1',
      },
      {
        recipeId: 161,
        ingredientId: 487,
        measure: '1 medium chopped',
      },
      {
        recipeId: 161,
        ingredientId: 240,
        measure: 'Steamed',
      },
      {
        recipeId: 161,
        ingredientId: 213,
        measure: 'Chopped',
      },
      {
        recipeId: 162,
        ingredientId: 171,
        measure: '30g',
      },
      {
        recipeId: 162,
        ingredientId: 246,
        measure: '240g',
      },
      {
        recipeId: 162,
        ingredientId: 209,
        measure: '3',
      },
      {
        recipeId: 162,
        ingredientId: 267,
        measure: '3 cloves',
      },
      {
        recipeId: 162,
        ingredientId: 420,
        measure: '3 sprigs',
      },
      {
        recipeId: 162,
        ingredientId: 47,
        measure: '500g',
      },
      {
        recipeId: 162,
        ingredientId: 440,
        measure: '2 tblsp ',
      },
      {
        recipeId: 162,
        ingredientId: 322,
        measure: '125ml ',
      },
      {
        recipeId: 162,
        ingredientId: 84,
        measure: '350g',
      },
      {
        recipeId: 162,
        ingredientId: 379,
        measure: '4 tbsp',
      },
      {
        recipeId: 162,
        ingredientId: 561,
        measure: '1/2 handful ',
      },
      {
        recipeId: 162,
        ingredientId: 553,
        measure: 'to serve',
      },
      {
        recipeId: 163,
        ingredientId: 559,
        measure: '375g',
      },
      {
        recipeId: 163,
        ingredientId: 332,
        measure: '2 large',
      },
      {
        recipeId: 163,
        ingredientId: 462,
        measure: '175g',
      },
      {
        recipeId: 163,
        ingredientId: 186,
        measure: '100g ',
      },
      {
        recipeId: 163,
        ingredientId: 556,
        measure: '1 tsp ',
      },
      {
        recipeId: 163,
        ingredientId: 340,
        measure: '50g',
      },
      {
        recipeId: 163,
        ingredientId: 31,
        measure: '4 tsp',
      },
      {
        recipeId: 163,
        ingredientId: 260,
        measure: '50g',
      },
      {
        recipeId: 164,
        ingredientId: 179,
        measure: '600g',
      },
      {
        recipeId: 164,
        ingredientId: 434,
        measure: '1 chopped',
      },
      {
        recipeId: 164,
        ingredientId: 292,
        measure: '1 chopped',
      },
      {
        recipeId: 164,
        ingredientId: 459,
        measure: '1 chopped',
      },
      {
        recipeId: 164,
        ingredientId: 125,
        measure: '1 small',
      },
      {
        recipeId: 164,
        ingredientId: 181,
        measure: '1 Large Chopped',
      },
      {
        recipeId: 164,
        ingredientId: 190,
        measure: '800g',
      },
      {
        recipeId: 164,
        ingredientId: 228,
        measure: '1 tbs',
      },
      {
        recipeId: 164,
        ingredientId: 491,
        measure: '1 tbs',
      },
      {
        recipeId: 164,
        ingredientId: 27,
        measure: '80 ml ',
      },
      {
        recipeId: 164,
        ingredientId: 40,
        measure: 'Sprinking',
      },
      {
        recipeId: 164,
        ingredientId: 322,
        measure: '250ml',
      },
      {
        recipeId: 164,
        ingredientId: 249,
        measure: 'Pinch',
      },
      {
        recipeId: 165,
        ingredientId: 542,
        measure: '8',
      },
      {
        recipeId: 165,
        ingredientId: 55,
        measure: '3 tbsp',
      },
      {
        recipeId: 165,
        ingredientId: 327,
        measure: '100g',
      },
      {
        recipeId: 165,
        ingredientId: 332,
        measure: '2 medium',
      },
      {
        recipeId: 165,
        ingredientId: 153,
        measure: '1 tbsp grated',
      },
      {
        recipeId: 165,
        ingredientId: 447,
        measure: '225ml',
      },
      {
        recipeId: 165,
        ingredientId: 536,
        measure: '200g',
      },
      {
        recipeId: 166,
        ingredientId: 362,
        measure: '50g',
      },
      {
        recipeId: 166,
        ingredientId: 172,
        measure: '2 large',
      },
      {
        recipeId: 166,
        ingredientId: 341,
        measure: '200g',
      },
      {
        recipeId: 166,
        ingredientId: 233,
        measure: '1 whole',
      },
      {
        recipeId: 166,
        ingredientId: 186,
        measure: '1kg',
      },
      {
        recipeId: 166,
        ingredientId: 327,
        measure: '140g',
      },
      {
        recipeId: 166,
        ingredientId: 379,
        measure: '100g ',
      },
      {
        recipeId: 166,
        ingredientId: 462,
        measure: '100g ',
      },
      {
        recipeId: 166,
        ingredientId: 332,
        measure: '3 Large',
      },
      {
        recipeId: 166,
        ingredientId: 79,
        measure: '2 tbs',
      },
      {
        recipeId: 166,
        ingredientId: 340,
        measure: '250g',
      },
      {
        recipeId: 167,
        ingredientId: 254,
        measure: '400g',
      },
      {
        recipeId: 167,
        ingredientId: 253,
        measure: '1 can ',
      },
      {
        recipeId: 167,
        ingredientId: 441,
        measure: '1 can ',
      },
      {
        recipeId: 167,
        ingredientId: 57,
        measure: '1 Packet',
      },
      {
        recipeId: 168,
        ingredientId: 27,
        measure: '3 tbsp',
      },
      {
        recipeId: 168,
        ingredientId: 106,
        measure: '2 chopped',
      },
      {
        recipeId: 168,
        ingredientId: 121,
        measure: '2 sticks',
      },
      {
        recipeId: 168,
        ingredientId: 292,
        measure: '300g',
      },
      {
        recipeId: 168,
        ingredientId: 179,
        measure: '500g',
      },
      {
        recipeId: 168,
        ingredientId: 512,
        measure: '4',
      },
      {
        recipeId: 168,
        ingredientId: 491,
        measure: '5 tblsp ',
      },
      {
        recipeId: 168,
        ingredientId: 511,
        measure: '2 tblsp ',
      },
      {
        recipeId: 168,
        ingredientId: 262,
        measure: '2 tblsp ',
      },
      {
        recipeId: 168,
        ingredientId: 441,
        measure: '1½ kg',
      },
      {
        recipeId: 168,
        ingredientId: 204,
        measure: '500g',
      },
      {
        recipeId: 168,
        ingredientId: 320,
        measure: '3',
      },
      {
        recipeId: 168,
        ingredientId: 194,
        measure: '400ml',
      },
      {
        recipeId: 169,
        ingredientId: 179,
        measure: '3 Medium',
      },
      {
        recipeId: 169,
        ingredientId: 27,
        measure: '1 tbs',
      },
      {
        recipeId: 169,
        ingredientId: 539,
        measure: '2 strips',
      },
      {
        recipeId: 169,
        ingredientId: 279,
        measure: 'Minced',
      },
      {
        recipeId: 169,
        ingredientId: 168,
        measure: '1 tbs',
      },
      {
        recipeId: 169,
        ingredientId: 213,
        measure: 'Garnish',
      },
      {
        recipeId: 169,
        ingredientId: 178,
        measure: 'Pinch',
      },
      {
        recipeId: 169,
        ingredientId: 249,
        measure: 'Pinch',
      },
      {
        recipeId: 169,
        ingredientId: 480,
        measure: 'To taste',
      },
      {
        recipeId: 170,
        ingredientId: 161,
        measure: '4 pounded to 1cm thickness',
      },
      {
        recipeId: 170,
        ingredientId: 327,
        measure: '2 tablespoons',
      },
      {
        recipeId: 170,
        ingredientId: 417,
        measure: '1 beaten',
      },
      {
        recipeId: 170,
        ingredientId: 379,
        measure: '100g fine',
      },
      {
        recipeId: 170,
        ingredientId: 55,
        measure: '230ml frying',
      },
      {
        recipeId: 170,
        ingredientId: 363,
        measure: '2 tablespoons',
      },
      {
        recipeId: 170,
        ingredientId: 106,
        measure: '2 sliced',
      },
      {
        recipeId: 170,
        ingredientId: 267,
        measure: '5 chopped cloves',
      },
      {
        recipeId: 170,
        ingredientId: 564,
        measure: '4 teaspoons',
      },
      {
        recipeId: 170,
        ingredientId: 384,
        measure: '600ml',
      },
      {
        recipeId: 170,
        ingredientId: 519,
        measure: '2 teaspoons',
      },
      {
        recipeId: 170,
        ingredientId: 440,
        measure: '4 teaspoons',
      },
      {
        recipeId: 170,
        ingredientId: 512,
        measure: '1',
      },
      {
        recipeId: 170,
        ingredientId: 537,
        measure: '1 teaspoon',
      },
      {
        recipeId: 171,
        ingredientId: 346,
        measure: '650g/1lb 8 oz',
      },
      {
        recipeId: 171,
        ingredientId: 38,
        measure: '1 tsp',
      },
      {
        recipeId: 171,
        ingredientId: 27,
        measure: '2 tsp',
      },
      {
        recipeId: 171,
        ingredientId: 202,
        measure: 'juice of half',
      },
      {
        recipeId: 171,
        ingredientId: 6,
        measure: '4',
      },
      {
        recipeId: 171,
        ingredientId: 431,
        measure: '150g/6oz',
      },
      {
        recipeId: 171,
        ingredientId: 414,
        measure: '80g/3oz',
      },
      {
        recipeId: 171,
        ingredientId: 355,
        measure: '20 chopped',
      },
      {
        recipeId: 171,
        ingredientId: 99,
        measure: '2 tablespoons',
      },
      {
        recipeId: 171,
        ingredientId: 178,
        measure: 'Pinch',
      },
      {
        recipeId: 171,
        ingredientId: 249,
        measure: 'Pinch',
      },
      {
        recipeId: 172,
        ingredientId: 29,
        measure: '800g',
      },
      {
        recipeId: 172,
        ingredientId: 181,
        measure: '1 chopped',
      },
      {
        recipeId: 172,
        ingredientId: 71,
        measure: '300g',
      },
      {
        recipeId: 172,
        ingredientId: 178,
        measure: '1 tsp ',
      },
      {
        recipeId: 172,
        ingredientId: 177,
        measure: '1 Litre',
      },
      {
        recipeId: 172,
        ingredientId: 279,
        measure: '1',
      },
      {
        recipeId: 172,
        ingredientId: 27,
        measure: '1/2 cup ',
      },
      {
        recipeId: 173,
        ingredientId: 14,
        measure: '1lb',
      },
      {
        recipeId: 173,
        ingredientId: 279,
        measure: '3 chopped',
      },
      {
        recipeId: 173,
        ingredientId: 283,
        measure: '1 tsp ',
      },
      {
        recipeId: 173,
        ingredientId: 440,
        measure: '1 tbs',
      },
      {
        recipeId: 173,
        ingredientId: 538,
        measure: '1 tsp ',
      },
      {
        recipeId: 173,
        ingredientId: 292,
        measure: '3 finely chopped',
      },
      {
        recipeId: 173,
        ingredientId: 121,
        measure: '3 finely chopped',
      },
      {
        recipeId: 173,
        ingredientId: 6,
        measure: '6 chopped',
      },
      {
        recipeId: 173,
        ingredientId: 122,
        measure: '1 Packet',
      },
      {
        recipeId: 173,
        ingredientId: 335,
        measure: 'Fry',
      },
      {
        recipeId: 173,
        ingredientId: 177,
        measure: 'Bottle',
      },
      {
        recipeId: 174,
        ingredientId: 27,
        measure: '2 tbs',
      },
      {
        recipeId: 174,
        ingredientId: 340,
        measure: '25g',
      },
      {
        recipeId: 174,
        ingredientId: 71,
        measure: '750g',
      },
      {
        recipeId: 174,
        ingredientId: 327,
        measure: '2 tblsp ',
      },
      {
        recipeId: 174,
        ingredientId: 267,
        measure: '2 cloves minced',
      },
      {
        recipeId: 174,
        ingredientId: 106,
        measure: '175g',
      },
      {
        recipeId: 174,
        ingredientId: 121,
        measure: '150g',
      },
      {
        recipeId: 174,
        ingredientId: 292,
        measure: '150g',
      },
      {
        recipeId: 174,
        ingredientId: 442,
        measure: '2 chopped',
      },
      {
        recipeId: 174,
        ingredientId: 293,
        measure: '200g',
      },
      {
        recipeId: 174,
        ingredientId: 105,
        measure: '150ml',
      },
      {
        recipeId: 174,
        ingredientId: 452,
        measure: '500g',
      },
      {
        recipeId: 174,
        ingredientId: 512,
        measure: '2',
      },
      {
        recipeId: 174,
        ingredientId: 40,
        measure: '3 tbs',
      },
      {
        recipeId: 174,
        ingredientId: 213,
        measure: '3 tblsp chopped',
      },
      {
        recipeId: 174,
        ingredientId: 3,
        measure: '1 tsp ',
      },
      {
        recipeId: 174,
        ingredientId: 350,
        measure: '60g',
      },
      {
        recipeId: 174,
        ingredientId: 177,
        measure: 'Splash',
      },
      {
        recipeId: 175,
        ingredientId: 24,
        measure: '4',
      },
      {
        recipeId: 175,
        ingredientId: 27,
        measure: '2 tbs',
      },
      {
        recipeId: 175,
        ingredientId: 181,
        measure: '1 Diced',
      },
      {
        recipeId: 175,
        ingredientId: 569,
        measure: '1 sliced',
      },
      {
        recipeId: 175,
        ingredientId: 459,
        measure: '1 sliced',
      },
      {
        recipeId: 175,
        ingredientId: 267,
        measure: '3 Cloves Crushed',
      },
      {
        recipeId: 175,
        ingredientId: 247,
        measure: '1 tsp ',
      },
      {
        recipeId: 175,
        ingredientId: 26,
        measure: '1 tsp ',
      },
      {
        recipeId: 175,
        ingredientId: 178,
        measure: '3/4 teaspoon',
      },
      {
        recipeId: 175,
        ingredientId: 376,
        measure: '1/2 teaspoon',
      },
      {
        recipeId: 175,
        ingredientId: 332,
        measure: '4',
      },
      {
        recipeId: 176,
        ingredientId: 340,
        measure: '25g/1oz',
      },
      {
        recipeId: 176,
        ingredientId: 296,
        measure: '8 thin slices',
      },
      {
        recipeId: 176,
        ingredientId: 500,
        measure: '50g/2oz',
      },
      {
        recipeId: 176,
        ingredientId: 411,
        measure: '2 tsp',
      },
      {
        recipeId: 176,
        ingredientId: 447,
        measure: '350ml/12fl',
      },
      {
        recipeId: 176,
        ingredientId: 264,
        measure: '50ml/2fl oz',
      },
      {
        recipeId: 176,
        ingredientId: 332,
        measure: '2 free-range',
      },
      {
        recipeId: 176,
        ingredientId: 511,
        measure: '25g/1oz',
      },
      {
        recipeId: 176,
        ingredientId: 233,
        measure: 'grated, to taste',
      },
      {
        recipeId: 177,
        ingredientId: 340,
        measure: '2 tablespoons',
      },
      {
        recipeId: 177,
        ingredientId: 27,
        measure: '3 tablespoons',
      },
      {
        recipeId: 177,
        ingredientId: 309,
        measure: '5 boneless',
      },
      {
        recipeId: 177,
        ingredientId: 178,
        measure: '1 teaspoon',
      },
      {
        recipeId: 177,
        ingredientId: 370,
        measure: '1 cut into 1/2-inch cubes',
      },
      {
        recipeId: 177,
        ingredientId: 134,
        measure: '1 Head chopped',
      },
      {
        recipeId: 177,
        ingredientId: 171,
        measure: '8-ounce sliced',
      },
      {
        recipeId: 177,
        ingredientId: 249,
        measure: '1 red',
      },
      {
        recipeId: 177,
        ingredientId: 181,
        measure: '1 chopped',
      },
      {
        recipeId: 177,
        ingredientId: 267,
        measure: '3 cloves',
      },
      {
        recipeId: 177,
        ingredientId: 193,
        measure: '1/2 teaspoon',
      },
      {
        recipeId: 177,
        ingredientId: 322,
        measure: '1/2 cup',
      },
      {
        recipeId: 177,
        ingredientId: 447,
        measure: '1/2 cup',
      },
      {
        recipeId: 177,
        ingredientId: 426,
        measure: '1/2 cup',
      },
      {
        recipeId: 177,
        ingredientId: 303,
        measure: '1 cup grated',
      },
      {
        recipeId: 177,
        ingredientId: 142,
        measure: '16 ounces',
      },
      {
        recipeId: 177,
        ingredientId: 213,
        measure: 'chopped',
      },
      {
        recipeId: 178,
        ingredientId: 406,
        measure: '1 cup ',
      },
      {
        recipeId: 178,
        ingredientId: 181,
        measure: '1 large',
      },
      {
        recipeId: 178,
        ingredientId: 292,
        measure: '1 large',
      },
      {
        recipeId: 178,
        ingredientId: 491,
        measure: '1 tbs',
      },
      {
        recipeId: 178,
        ingredientId: 247,
        measure: '2 tsp',
      },
      {
        recipeId: 178,
        ingredientId: 26,
        measure: '1 tsp ',
      },
      {
        recipeId: 178,
        ingredientId: 355,
        measure: '1/2 tsp',
      },
      {
        recipeId: 178,
        ingredientId: 40,
        measure: '1/2 tsp',
      },
      {
        recipeId: 178,
        ingredientId: 175,
        measure: '1/4 tsp',
      },
      {
        recipeId: 178,
        ingredientId: 193,
        measure: '1/4 tsp',
      },
      {
        recipeId: 178,
        ingredientId: 329,
        measure: '4 cups ',
      },
      {
        recipeId: 178,
        ingredientId: 177,
        measure: '1 cup ',
      },
      {
        recipeId: 178,
        ingredientId: 489,
        measure: 'Pinch',
      },
      {
        recipeId: 179,
        ingredientId: 547,
        measure: '1/4 cup',
      },
      {
        recipeId: 179,
        ingredientId: 541,
        measure: '2 tbs',
      },
      {
        recipeId: 179,
        ingredientId: 302,
        measure: '1/2 tbs',
      },
      {
        recipeId: 179,
        ingredientId: 178,
        measure: '1/4 tsp',
      },
      {
        recipeId: 179,
        ingredientId: 296,
        measure: '8 slices',
      },
      {
        recipeId: 179,
        ingredientId: 539,
        measure: '8 slices',
      },
      {
        recipeId: 179,
        ingredientId: 298,
        measure: '8 slices',
      },
      {
        recipeId: 179,
        ingredientId: 118,
        measure: '4 slices',
      },
      {
        recipeId: 179,
        ingredientId: 340,
        measure: '2 1/2 Tbs',
      },
      {
        recipeId: 180,
        ingredientId: 238,
        measure: '1 cup ',
      },
      {
        recipeId: 180,
        ingredientId: 511,
        measure: '1/2 cup ',
      },
      {
        recipeId: 180,
        ingredientId: 417,
        measure: '1',
      },
      {
        recipeId: 181,
        ingredientId: 391,
        measure: '200g',
      },
      {
        recipeId: 181,
        ingredientId: 337,
        measure: '100g ',
      },
      {
        recipeId: 181,
        ingredientId: 63,
        measure: '250g',
      },
      {
        recipeId: 181,
        ingredientId: 567,
        measure: '400g',
      },
      {
        recipeId: 181,
        ingredientId: 332,
        measure: '4 large',
      },
      {
        recipeId: 181,
        ingredientId: 327,
        measure: '140g',
      },
      {
        recipeId: 181,
        ingredientId: 430,
        measure: '50g',
      },
      {
        recipeId: 181,
        ingredientId: 373,
        measure: '200g',
      },
      {
        recipeId: 182,
        ingredientId: 179,
        measure: '2 large',
      },
      {
        recipeId: 182,
        ingredientId: 340,
        measure: '2 tbs',
      },
      {
        recipeId: 182,
        ingredientId: 137,
        measure: '150g',
      },
      {
        recipeId: 182,
        ingredientId: 181,
        measure: '1 large',
      },
      {
        recipeId: 182,
        ingredientId: 569,
        measure: '1 large',
      },
      {
        recipeId: 182,
        ingredientId: 131,
        measure: 'Pinch',
      },
      {
        recipeId: 183,
        ingredientId: 128,
        measure: '100 g',
      },
      {
        recipeId: 183,
        ingredientId: 531,
        measure: '170 g',
      },
      {
        recipeId: 183,
        ingredientId: 216,
        measure: '100 g',
      },
      {
        recipeId: 183,
        ingredientId: 332,
        measure: '2',
      },
      {
        recipeId: 183,
        ingredientId: 62,
        measure: '200 g',
      },
      {
        recipeId: 183,
        ingredientId: 425,
        measure: '1 tbs',
      },
      {
        recipeId: 183,
        ingredientId: 289,
        measure: '1 tbs',
      },
      {
        recipeId: 183,
        ingredientId: 511,
        measure: '150 g',
      },
      {
        recipeId: 183,
        ingredientId: 178,
        measure: '1 tsp',
      },
      {
        recipeId: 184,
        ingredientId: 471,
        measure: '100g ',
      },
      {
        recipeId: 184,
        ingredientId: 362,
        measure: '85g',
      },
      {
        recipeId: 184,
        ingredientId: 340,
        measure: '85g',
      },
      {
        recipeId: 184,
        ingredientId: 83,
        measure: '250ml',
      },
      {
        recipeId: 184,
        ingredientId: 497,
        measure: '750g',
      },
      {
        recipeId: 184,
        ingredientId: 332,
        measure: '2',
      },
      {
        recipeId: 184,
        ingredientId: 202,
        measure: 'Zest of 1',
      },
      {
        recipeId: 184,
        ingredientId: 217,
        measure: 'Zest of 1',
      },
      {
        recipeId: 184,
        ingredientId: 519,
        measure: '250ml',
      },
      {
        recipeId: 184,
        ingredientId: 52,
        measure: 'To serve',
      },
      {
        recipeId: 185,
        ingredientId: 308,
        measure: '1/2 bag',
      },
      {
        recipeId: 185,
        ingredientId: 524,
        measure: '8 oz ',
      },
      {
        recipeId: 185,
        ingredientId: 417,
        measure: '1/2 ',
      },
      {
        recipeId: 185,
        ingredientId: 249,
        measure: 'pinch',
      },
      {
        recipeId: 185,
        ingredientId: 538,
        measure: '2 tsp',
      },
      {
        recipeId: 185,
        ingredientId: 506,
        measure: '2 tbs',
      },
      {
        recipeId: 185,
        ingredientId: 335,
        measure: '4 tbs',
      },
      {
        recipeId: 185,
        ingredientId: 297,
        measure: '1 tsp ',
      },
      {
        recipeId: 185,
        ingredientId: 283,
        measure: '1 tsp ',
      },
      {
        recipeId: 185,
        ingredientId: 181,
        measure: '1/2 cup ',
      },
      {
        recipeId: 185,
        ingredientId: 256,
        measure: '1 cup ',
      },
      {
        recipeId: 185,
        ingredientId: 6,
        measure: '1/2 cup ',
      },
      {
        recipeId: 185,
        ingredientId: 492,
        measure: '1 tbs',
      },
      {
        recipeId: 185,
        ingredientId: 562,
        measure: '1 tbs',
      },
      {
        recipeId: 185,
        ingredientId: 511,
        measure: '1/2 tbs',
      },
      {
        recipeId: 185,
        ingredientId: 501,
        measure: '1/2 tbs',
      },
      {
        recipeId: 185,
        ingredientId: 440,
        measure: '1 tbs',
      },
      {
        recipeId: 186,
        ingredientId: 423,
        measure: '8',
      },
      {
        recipeId: 186,
        ingredientId: 27,
        measure: '2 tbs',
      },
      {
        recipeId: 186,
        ingredientId: 267,
        measure: '3 cloves',
      },
      {
        recipeId: 186,
        ingredientId: 26,
        measure: '1 tbs',
      },
      {
        recipeId: 186,
        ingredientId: 202,
        measure: '1/2 ',
      },
      {
        recipeId: 186,
        ingredientId: 420,
        measure: '4 sprigs',
      },
      {
        recipeId: 186,
        ingredientId: 390,
        measure: '1',
      },
      {
        recipeId: 187,
        ingredientId: 368,
        measure: '450g',
      },
      {
        recipeId: 187,
        ingredientId: 10,
        measure: '100g ',
      },
      {
        recipeId: 187,
        ingredientId: 538,
        measure: '1/2 tbs',
      },
      {
        recipeId: 187,
        ingredientId: 314,
        measure: '1 1/2 tsp ',
      },
      {
        recipeId: 187,
        ingredientId: 197,
        measure: '1/2 tsp',
      },
      {
        recipeId: 187,
        ingredientId: 249,
        measure: '1 tbs',
      },
      {
        recipeId: 187,
        ingredientId: 178,
        measure: '1/2 tsp',
      },
      {
        recipeId: 187,
        ingredientId: 461,
        measure: '1/2 tsp',
      },
      {
        recipeId: 187,
        ingredientId: 440,
        measure: '1 tbs',
      },
      {
        recipeId: 187,
        ingredientId: 177,
        measure: '400ml',
      },
      {
        recipeId: 187,
        ingredientId: 27,
        measure: '2 tbs',
      },
      {
        recipeId: 187,
        ingredientId: 509,
        measure: '2 chopped',
      },
      {
        recipeId: 187,
        ingredientId: 6,
        measure: '4',
      },
      {
        recipeId: 187,
        ingredientId: 267,
        measure: '2 cloves chopped',
      },
      {
        recipeId: 187,
        ingredientId: 283,
        measure: '4 sliced',
      },
      {
        recipeId: 187,
        ingredientId: 506,
        measure: '1 tbs',
      },
      {
        recipeId: 188,
        ingredientId: 179,
        measure: '5',
      },
      {
        recipeId: 188,
        ingredientId: 292,
        measure: '12 ounces',
      },
      {
        recipeId: 188,
        ingredientId: 509,
        measure: '1',
      },
      {
        recipeId: 188,
        ingredientId: 267,
        measure: '2 cloves',
      },
      {
        recipeId: 188,
        ingredientId: 296,
        measure: '1 Slice',
      },
      {
        recipeId: 188,
        ingredientId: 550,
        measure: '1',
      },
      {
        recipeId: 188,
        ingredientId: 440,
        measure: '2',
      },
      {
        recipeId: 188,
        ingredientId: 393,
        measure: '1',
      },
      {
        recipeId: 188,
        ingredientId: 55,
        measure: '1 tsp ',
      },
      {
        recipeId: 188,
        ingredientId: 511,
        measure: '2 tsp',
      },
      {
        recipeId: 188,
        ingredientId: 340,
        measure: '2 tbsp',
      },
      {
        recipeId: 189,
        ingredientId: 531,
        measure: '1 cup ',
      },
      {
        recipeId: 189,
        ingredientId: 178,
        measure: '1/4 tsp',
      },
      {
        recipeId: 189,
        ingredientId: 417,
        measure: '1 Yolk',
      },
      {
        recipeId: 189,
        ingredientId: 340,
        measure: '5 tbs',
      },
      {
        recipeId: 189,
        ingredientId: 181,
        measure: '1/3 cup',
      },
      {
        recipeId: 189,
        ingredientId: 293,
        measure: '1/2 cup ',
      },
      {
        recipeId: 189,
        ingredientId: 396,
        measure: '1/2 lb',
      },
      {
        recipeId: 189,
        ingredientId: 332,
        measure: '2 Beaten ',
      },
      {
        recipeId: 189,
        ingredientId: 249,
        measure: '1/4 tsp',
      },
      {
        recipeId: 190,
        ingredientId: 327,
        measure: '4 cups ',
      },
      {
        recipeId: 190,
        ingredientId: 178,
        measure: '1 tsp ',
      },
      {
        recipeId: 190,
        ingredientId: 564,
        measure: '1 tsp ',
      },
      {
        recipeId: 190,
        ingredientId: 340,
        measure: '250g',
      },
      {
        recipeId: 190,
        ingredientId: 177,
        measure: '1 cup ',
      },
      {
        recipeId: 190,
        ingredientId: 10,
        measure: '900g',
      },
      {
        recipeId: 190,
        ingredientId: 480,
        measure: '1 tsp ',
      },
      {
        recipeId: 190,
        ingredientId: 175,
        measure: '1/2 tsp',
      },
      {
        recipeId: 190,
        ingredientId: 55,
        measure: '2 tbs',
      },
      {
        recipeId: 190,
        ingredientId: 106,
        measure: '1 cup ',
      },
      {
        recipeId: 190,
        ingredientId: 569,
        measure: 'Ground',
      },
      {
        recipeId: 190,
        ingredientId: 267,
        measure: '2 tsp ground',
      },
      {
        recipeId: 190,
        ingredientId: 40,
        measure: '1 tbs',
      },
      {
        recipeId: 190,
        ingredientId: 366,
        measure: '2 tbs',
      },
      {
        recipeId: 190,
        ingredientId: 417,
        measure: '1 beaten',
      },
      {
        recipeId: 191,
        ingredientId: 396,
        measure: '1',
      },
      {
        recipeId: 191,
        ingredientId: 178,
        measure: '3 tbs',
      },
      {
        recipeId: 191,
        ingredientId: 175,
        measure: '3 tbs',
      },
      {
        recipeId: 191,
        ingredientId: 294,
        measure: '1 tbs',
      },
      {
        recipeId: 191,
        ingredientId: 511,
        measure: '1 tbs',
      },
      {
        recipeId: 191,
        ingredientId: 512,
        measure: '1 tsp ',
      },
      {
        recipeId: 191,
        ingredientId: 163,
        measure: '1 tsp ',
      },
      {
        recipeId: 191,
        ingredientId: 26,
        measure: '1 tbs',
      },
      {
        recipeId: 191,
        ingredientId: 267,
        measure: '1 tbs',
      },
      {
        recipeId: 191,
        ingredientId: 181,
        measure: '1 tbs',
      },
      {
        recipeId: 191,
        ingredientId: 39,
        measure: '1 tbs',
      },
      {
        recipeId: 191,
        ingredientId: 191,
        measure: '1 tsp ',
      },
      {
        recipeId: 191,
        ingredientId: 223,
        measure: '1 tbs',
      },
      {
        recipeId: 191,
        ingredientId: 193,
        measure: '1 tsp ',
      },
      {
        recipeId: 192,
        ingredientId: 450,
        measure: '2 Pounds',
      },
      {
        recipeId: 192,
        ingredientId: 55,
        measure: '1/2 cup ',
      },
      {
        recipeId: 192,
        ingredientId: 267,
        measure: '1 clove peeled crushed',
      },
      {
        recipeId: 192,
        ingredientId: 283,
        measure: '1/2 tsp',
      },
      {
        recipeId: 192,
        ingredientId: 40,
        measure: '2 sprigs',
      },
      {
        recipeId: 192,
        ingredientId: 512,
        measure: '1',
      },
      {
        recipeId: 192,
        ingredientId: 569,
        measure: '0.5',
      },
      {
        recipeId: 192,
        ingredientId: 32,
        measure: '0.5',
      },
      {
        recipeId: 192,
        ingredientId: 181,
        measure: '1 sliced',
      },
      {
        recipeId: 192,
        ingredientId: 292,
        measure: '1 chopped',
      },
      {
        recipeId: 192,
        ingredientId: 511,
        measure: '1 tbs',
      },
      {
        recipeId: 192,
        ingredientId: 480,
        measure: '1/2 tsp',
      },
      {
        recipeId: 192,
        ingredientId: 120,
        measure: '1 tsp ',
      },
      {
        recipeId: 192,
        ingredientId: 19,
        measure: '1',
      },
      {
        recipeId: 192,
        ingredientId: 182,
        measure: '1',
      },
      {
        recipeId: 192,
        ingredientId: 210,
        measure: '3/4 cup ',
      },
      {
        recipeId: 192,
        ingredientId: 249,
        measure: 'pinch',
      },
      {
        recipeId: 193,
        ingredientId: 357,
        measure: 'White',
      },
      {
        recipeId: 193,
        ingredientId: 181,
        measure: '1',
      },
      {
        recipeId: 193,
        ingredientId: 182,
        measure: '1',
      },
      {
        recipeId: 193,
        ingredientId: 279,
        measure: '3',
      },
      {
        recipeId: 193,
        ingredientId: 208,
        measure: '1',
      },
      {
        recipeId: 193,
        ingredientId: 292,
        measure: '3 oz ',
      },
      {
        recipeId: 193,
        ingredientId: 393,
        measure: '1 lb',
      },
      {
        recipeId: 193,
        ingredientId: 440,
        measure: '2 oz ',
      },
      {
        recipeId: 194,
        ingredientId: 27,
        measure: '2 tablespoons',
      },
      {
        recipeId: 194,
        ingredientId: 292,
        measure: '2 small cut into chunks',
      },
      {
        recipeId: 194,
        ingredientId: 121,
        measure: '2 small stalks',
      },
      {
        recipeId: 194,
        ingredientId: 181,
        measure: '1 medium finely diced',
      },
      {
        recipeId: 194,
        ingredientId: 267,
        measure: '6 medium cloves sliced',
      },
      {
        recipeId: 194,
        ingredientId: 520,
        measure: '12 ounces (340g)',
      },
      {
        recipeId: 194,
        ingredientId: 382,
        measure: '2',
      },
      {
        recipeId: 194,
        ingredientId: 177,
        measure: '4 cups',
      },
      {
        recipeId: 194,
        ingredientId: 178,
        measure: 'Pinch',
      },
      {
        recipeId: 194,
        ingredientId: 274,
        measure: '2 teaspoons (10ml)',
      },
      {
        recipeId: 194,
        ingredientId: 249,
        measure: 'Pinch',
      },
      {
        recipeId: 194,
        ingredientId: 268,
        measure: '2 large',
      },
      {
        recipeId: 194,
        ingredientId: 420,
        measure: '4 sprigs',
      },
      {
        recipeId: 194,
        ingredientId: 99,
        measure: '1/4 cup ',
      },
      {
        recipeId: 194,
        ingredientId: 213,
        measure: '2 tablespoons',
      },
      {
        recipeId: 195,
        ingredientId: 542,
        measure: '4',
      },
      {
        recipeId: 195,
        ingredientId: 539,
        measure: '4',
      },
      {
        recipeId: 195,
        ingredientId: 171,
        measure: '4',
      },
      {
        recipeId: 195,
        ingredientId: 24,
        measure: '3',
      },
      {
        recipeId: 195,
        ingredientId: 290,
        measure: '2 sliced',
      },
      {
        recipeId: 195,
        ingredientId: 332,
        measure: '2',
      },
      {
        recipeId: 195,
        ingredientId: 296,
        measure: '1 Slice',
      },
      {
        recipeId: 195,
        ingredientId: 82,
        measure: '100g ',
      },
      {
        recipeId: 196,
        ingredientId: 133,
        measure: '2 Juice',
      },
      {
        recipeId: 196,
        ingredientId: 26,
        measure: '4 tsp',
      },
      {
        recipeId: 196,
        ingredientId: 464,
        measure: '2 finely chopped',
      },
      {
        recipeId: 196,
        ingredientId: 325,
        measure: '16 skinnless',
      },
      {
        recipeId: 196,
        ingredientId: 55,
        measure: 'For brushing',
      },
      {
        recipeId: 196,
        ingredientId: 83,
        measure: '300ml ',
      },
      {
        recipeId: 196,
        ingredientId: 283,
        measure: 'large piece',
      },
      {
        recipeId: 196,
        ingredientId: 279,
        measure: '4',
      },
      {
        recipeId: 196,
        ingredientId: 537,
        measure: '¾ tsp',
      },
      {
        recipeId: 196,
        ingredientId: 218,
        measure: '¾ tsp',
      },
      {
        recipeId: 196,
        ingredientId: 448,
        measure: '½ tsp',
      },
      {
        recipeId: 196,
        ingredientId: 243,
        measure: '¼ tsp',
      },
      {
        recipeId: 197,
        ingredientId: 23,
        measure: '200 g',
      },
      {
        recipeId: 197,
        ingredientId: 348,
        measure: '250 g',
      },
      {
        recipeId: 197,
        ingredientId: 386,
        measure: '1  bunch',
      },
      {
        recipeId: 197,
        ingredientId: 183,
        measure: '350 g',
      },
      {
        recipeId: 197,
        ingredientId: 95,
        measure: '3  tablespoons',
      },
      {
        recipeId: 197,
        ingredientId: 149,
        measure: '40 g',
      },
      {
        recipeId: 197,
        ingredientId: 87,
        measure: '200 g',
      },
      {
        recipeId: 197,
        ingredientId: 178,
        measure: 'to taste',
      },
      {
        recipeId: 197,
        ingredientId: 249,
        measure: 'to taste',
      },
      {
        recipeId: 198,
        ingredientId: 45,
        measure: '50g',
      },
      {
        recipeId: 198,
        ingredientId: 340,
        measure: '125g',
      },
      {
        recipeId: 198,
        ingredientId: 521,
        measure: '150g',
      },
      {
        recipeId: 198,
        ingredientId: 202,
        measure: 'Grated',
      },
      {
        recipeId: 198,
        ingredientId: 327,
        measure: '150g',
      },
      {
        recipeId: 198,
        ingredientId: 3,
        measure: '½ tsp',
      },
      {
        recipeId: 198,
        ingredientId: 511,
        measure: '75g',
      },
      {
        recipeId: 198,
        ingredientId: 289,
        measure: '1 tbs',
      },
      {
        recipeId: 198,
        ingredientId: 264,
        measure: '300ml ',
      },
      {
        recipeId: 198,
        ingredientId: 212,
        measure: '100ml',
      },
      {
        recipeId: 198,
        ingredientId: 355,
        measure: 'Garnish with',
      },
      {
        recipeId: 199,
        ingredientId: 526,
        measure: '4 meaty shanks',
      },
      {
        recipeId: 199,
        ingredientId: 531,
        measure: '½ cup',
      },
      {
        recipeId: 199,
        ingredientId: 27,
        measure: '2 tablespoons ',
      },
      {
        recipeId: 199,
        ingredientId: 340,
        measure: '3 tablespoons',
      },
      {
        recipeId: 199,
        ingredientId: 181,
        measure: '1 medium chopped into ½-inch pieces',
      },
      {
        recipeId: 199,
        ingredientId: 121,
        measure: '1 chopped into ½-inch pieces',
      },
      {
        recipeId: 199,
        ingredientId: 353,
        measure: '1 bulb chopped into ½-inch pieces',
      },
      {
        recipeId: 199,
        ingredientId: 267,
        measure: '3 cloves',
      },
      {
        recipeId: 199,
        ingredientId: 207,
        measure: '2 strips',
      },
      {
        recipeId: 199,
        ingredientId: 404,
        measure: '1 ½ teaspoons',
      },
      {
        recipeId: 199,
        ingredientId: 512,
        measure: '1',
      },
      {
        recipeId: 199,
        ingredientId: 437,
        measure: '1 cup',
      },
      {
        recipeId: 199,
        ingredientId: 384,
        measure: '½ cup ',
      },
      {
        recipeId: 199,
        ingredientId: 24,
        measure: '1 cup chopped with juice',
      },
      {
        recipeId: 199,
        ingredientId: 213,
        measure: '2 tablespoons chopped',
      },
      {
        recipeId: 199,
        ingredientId: 418,
        measure: '1 teaspoon grated ',
      },
      {
        recipeId: 200,
        ingredientId: 71,
        measure: '900g',
      },
      {
        recipeId: 200,
        ingredientId: 27,
        measure: '3 tbs',
      },
      {
        recipeId: 200,
        ingredientId: 164,
        measure: '3',
      },
      {
        recipeId: 200,
        ingredientId: 267,
        measure: '2 cloves minced',
      },
      {
        recipeId: 200,
        ingredientId: 539,
        measure: '125g',
      },
      {
        recipeId: 200,
        ingredientId: 40,
        measure: '1 tbs chopped',
      },
      {
        recipeId: 200,
        ingredientId: 512,
        measure: '2',
      },
      {
        recipeId: 200,
        ingredientId: 174,
        measure: '330ml',
      },
      {
        recipeId: 200,
        ingredientId: 452,
        measure: '400ml',
      },
      {
        recipeId: 200,
        ingredientId: 173,
        measure: '2 tbs',
      },
      {
        recipeId: 200,
        ingredientId: 147,
        measure: '8',
      },
      {
        recipeId: 200,
        ingredientId: 327,
        measure: '400g',
      },
      {
        recipeId: 200,
        ingredientId: 178,
        measure: 'pinch',
      },
      {
        recipeId: 200,
        ingredientId: 340,
        measure: '250g',
      },
      {
        recipeId: 200,
        ingredientId: 332,
        measure: 'To Glaze',
      },
      {
        recipeId: 201,
        ingredientId: 309,
        measure: '1 whole',
      },
      {
        recipeId: 201,
        ingredientId: 335,
        measure: '2 quarts neutral frying',
      },
      {
        recipeId: 201,
        ingredientId: 180,
        measure: '1',
      },
      {
        recipeId: 201,
        ingredientId: 531,
        measure: '1 1/2 cups ',
      },
      {
        recipeId: 201,
        ingredientId: 389,
        measure: '1 tablespoon',
      },
      {
        recipeId: 201,
        ingredientId: 178,
        measure: '1 tablespoon',
      },
      {
        recipeId: 201,
        ingredientId: 26,
        measure: '1 tablespoon',
      },
      {
        recipeId: 201,
        ingredientId: 311,
        measure: '2 teaspoons',
      },
      {
        recipeId: 201,
        ingredientId: 376,
        measure: '1 teaspoon',
      },
      {
        recipeId: 201,
        ingredientId: 175,
        measure: '1 teaspoon',
      },
      {
        recipeId: 201,
        ingredientId: 223,
        measure: '1/2 teaspoon',
      },
      {
        recipeId: 201,
        ingredientId: 561,
        measure: '1/2 teaspoon',
      },
      {
        recipeId: 201,
        ingredientId: 550,
        measure: '1/2 teaspoon',
      },
      {
        recipeId: 201,
        ingredientId: 480,
        measure: '1/2 teaspoon',
      },
      {
        recipeId: 201,
        ingredientId: 284,
        measure: '1/2 teaspoon',
      },
      {
        recipeId: 201,
        ingredientId: 160,
        measure: '1/2 teaspoon',
      },
      {
        recipeId: 201,
        ingredientId: 404,
        measure: '1/2 teaspoon',
      },
      {
        recipeId: 202,
        ingredientId: 283,
        measure: '1 tablespoon',
      },
      {
        recipeId: 202,
        ingredientId: 267,
        measure: '1 clove',
      },
      {
        recipeId: 202,
        ingredientId: 440,
        measure: '2 tablespoons',
      },
      {
        recipeId: 202,
        ingredientId: 15,
        measure: '1 tablespoon',
      },
      {
        recipeId: 202,
        ingredientId: 304,
        measure: '2 teaspoon',
      },
      {
        recipeId: 202,
        ingredientId: 446,
        measure: '1/3 cup',
      },
      {
        recipeId: 202,
        ingredientId: 55,
        measure: '1/3 cup',
      },
      {
        recipeId: 202,
        ingredientId: 202,
        measure: '1/3 cup',
      },
      {
        recipeId: 203,
        ingredientId: 181,
        measure: '1 sliced',
      },
      {
        recipeId: 203,
        ingredientId: 27,
        measure: '4 tbsp',
      },
      {
        recipeId: 203,
        ingredientId: 340,
        measure: '25g',
      },
      {
        recipeId: 203,
        ingredientId: 179,
        measure: '400g',
      },
      {
        recipeId: 203,
        ingredientId: 267,
        measure: '6 cloves',
      },
      {
        recipeId: 203,
        ingredientId: 332,
        measure: '8',
      },
      {
        recipeId: 203,
        ingredientId: 213,
        measure: 'Handful',
      },
      {
        recipeId: 203,
        ingredientId: 112,
        measure: '1',
      },
      {
        recipeId: 203,
        ingredientId: 388,
        measure: '4',
      },
      {
        recipeId: 204,
        ingredientId: 513,
        measure: '14 oz jar',
      },
      {
        recipeId: 204,
        ingredientId: 328,
        measure: '3 Cups',
      },
      {
        recipeId: 204,
        ingredientId: 546,
        measure: '6',
      },
      {
        recipeId: 204,
        ingredientId: 155,
        measure: '2',
      },
      {
        recipeId: 205,
        ingredientId: 261,
        measure: '300g',
      },
      {
        recipeId: 205,
        ingredientId: 27,
        measure: '1 tbls',
      },
      {
        recipeId: 205,
        ingredientId: 181,
        measure: '1 finely chopped ',
      },
      {
        recipeId: 205,
        ingredientId: 267,
        measure: '2 cloves minced',
      },
      {
        recipeId: 205,
        ingredientId: 390,
        measure: '1',
      },
      {
        recipeId: 205,
        ingredientId: 491,
        measure: '1 tbls',
      },
      {
        recipeId: 205,
        ingredientId: 231,
        measure: '425g',
      },
      {
        recipeId: 205,
        ingredientId: 516,
        measure: '70g',
      },
      {
        recipeId: 205,
        ingredientId: 565,
        measure: 'Shaved',
      },
      {
        recipeId: 206,
        ingredientId: 173,
        measure: '1 tsp ',
      },
      {
        recipeId: 206,
        ingredientId: 217,
        measure: 'Juice of 2',
      },
      {
        recipeId: 206,
        ingredientId: 521,
        measure: '2 tbs',
      },
      {
        recipeId: 206,
        ingredientId: 445,
        measure: '6',
      },
      {
        recipeId: 206,
        ingredientId: 145,
        measure: '250g',
      },
      {
        recipeId: 206,
        ingredientId: 365,
        measure: '200g',
      },
      {
        recipeId: 206,
        ingredientId: 340,
        measure: '50g',
      },
      {
        recipeId: 206,
        ingredientId: 462,
        measure: '100g ',
      },
      {
        recipeId: 206,
        ingredientId: 411,
        measure: '1 tsp ',
      },
      {
        recipeId: 206,
        ingredientId: 447,
        measure: '6 tblsp',
      },
      {
        recipeId: 207,
        ingredientId: 4,
        measure: '300g',
      },
      {
        recipeId: 207,
        ingredientId: 382,
        measure: '2',
      },
      {
        recipeId: 207,
        ingredientId: 447,
        measure: '300ml ',
      },
      {
        recipeId: 207,
        ingredientId: 332,
        measure: '4',
      },
      {
        recipeId: 207,
        ingredientId: 213,
        measure: 'Handful',
      },
      {
        recipeId: 207,
        ingredientId: 294,
        measure: 'Handful',
      },
      {
        recipeId: 207,
        ingredientId: 55,
        measure: '2 tbs',
      },
      {
        recipeId: 207,
        ingredientId: 181,
        measure: '1 chopped',
      },
      {
        recipeId: 207,
        ingredientId: 564,
        measure: '2 tsp',
      },
      {
        recipeId: 207,
        ingredientId: 357,
        measure: '300g',
      },
      {
        recipeId: 208,
        ingredientId: 93,
        measure: '2 tbsp',
      },
      {
        recipeId: 208,
        ingredientId: 16,
        measure: '1 tsp',
      },
      {
        recipeId: 208,
        ingredientId: 86,
        measure: '4 fillets',
      },
      {
        recipeId: 208,
        ingredientId: 55,
        measure: '1 tsp',
      },
      {
        recipeId: 208,
        ingredientId: 387,
        measure: '8',
      },
      {
        recipeId: 208,
        ingredientId: 206,
        measure: '1 sliced',
      },
      {
        recipeId: 208,
        ingredientId: 235,
        measure: '2 shredded',
      },
      {
        recipeId: 208,
        ingredientId: 488,
        measure: '1 x 300ml',
      },
      {
        recipeId: 208,
        ingredientId: 547,
        measure: '1 pot',
      },
      {
        recipeId: 208,
        ingredientId: 202,
        measure: '1',
      },
      {
        recipeId: 208,
        ingredientId: 267,
        measure: '1 clove finely chopped',
      },
      {
        recipeId: 209,
        ingredientId: 27,
        measure: '1 tblsp ',
      },
      {
        recipeId: 209,
        ingredientId: 181,
        measure: '1 large',
      },
      {
        recipeId: 209,
        ingredientId: 267,
        measure: '1 clove peeled crushed',
      },
      {
        recipeId: 209,
        ingredientId: 120,
        measure: '2 tblsp ',
      },
      {
        recipeId: 209,
        ingredientId: 491,
        measure: '3 tsp',
      },
      {
        recipeId: 209,
        ingredientId: 372,
        measure: '500g',
      },
      {
        recipeId: 209,
        ingredientId: 332,
        measure: '1 large',
      },
      {
        recipeId: 209,
        ingredientId: 379,
        measure: '85g',
      },
      {
        recipeId: 209,
        ingredientId: 18,
        measure: '2 tblsp ',
      },
      {
        recipeId: 209,
        ingredientId: 107,
        measure: '800g',
      },
      {
        recipeId: 209,
        ingredientId: 213,
        measure: '2 tblsp ',
      },
      {
        recipeId: 210,
        ingredientId: 531,
        measure: '100g ',
      },
      {
        recipeId: 210,
        ingredientId: 332,
        measure: '2 large',
      },
      {
        recipeId: 210,
        ingredientId: 447,
        measure: '300ml ',
      },
      {
        recipeId: 210,
        ingredientId: 363,
        measure: '1 tbls',
      },
      {
        recipeId: 210,
        ingredientId: 511,
        measure: 'to serve',
      },
      {
        recipeId: 210,
        ingredientId: 373,
        measure: 'to serve',
      },
      {
        recipeId: 210,
        ingredientId: 145,
        measure: 'to serve',
      },
      {
        recipeId: 211,
        ingredientId: 390,
        measure: '1 large',
      },
      {
        recipeId: 211,
        ingredientId: 283,
        measure: '0.5',
      },
      {
        recipeId: 211,
        ingredientId: 267,
        measure: '1 large',
      },
      {
        recipeId: 211,
        ingredientId: 294,
        measure: 'Bunch',
      },
      {
        recipeId: 211,
        ingredientId: 363,
        measure: '1 tbsp',
      },
      {
        recipeId: 211,
        ingredientId: 155,
        measure: '4',
      },
      {
        recipeId: 211,
        ingredientId: 238,
        measure: '5 tblsp ',
      },
      {
        recipeId: 211,
        ingredientId: 384,
        measure: '150ml',
      },
      {
        recipeId: 211,
        ingredientId: 83,
        measure: '200g',
      },
      {
        recipeId: 212,
        ingredientId: 179,
        measure: '1kg',
      },
      {
        recipeId: 212,
        ingredientId: 447,
        measure: '200ml',
      },
      {
        recipeId: 212,
        ingredientId: 340,
        measure: '50g',
      },
      {
        recipeId: 212,
        ingredientId: 345,
        measure: '2 tbs',
      },
      {
        recipeId: 212,
        ingredientId: 6,
        measure: 'Bunch',
      },
      {
        recipeId: 213,
        ingredientId: 261,
        measure: '320g',
      },
      {
        recipeId: 213,
        ingredientId: 473,
        measure: '6',
      },
      {
        recipeId: 213,
        ingredientId: 178,
        measure: 'As required',
      },
      {
        recipeId: 213,
        ingredientId: 539,
        measure: '150g',
      },
      {
        recipeId: 213,
        ingredientId: 169,
        measure: '50g',
      },
      {
        recipeId: 213,
        ingredientId: 175,
        measure: 'As required',
      },
      {
        recipeId: 214,
        ingredientId: 248,
        measure: '1 1/4 oz ',
      },
      {
        recipeId: 214,
        ingredientId: 511,
        measure: '1 1/4 cup',
      },
      {
        recipeId: 214,
        ingredientId: 556,
        measure: '1 teaspoon',
      },
      {
        recipeId: 214,
        ingredientId: 531,
        measure: 'To your taste',
      },
      {
        recipeId: 214,
        ingredientId: 349,
        measure: '2',
      },
      {
        recipeId: 214,
        ingredientId: 33,
        measure: 'To your taste',
      },
      {
        recipeId: 214,
        ingredientId: 373,
        measure: 'To your taste',
      },
      {
        recipeId: 214,
        ingredientId: 299,
        measure: 'To your taste',
      },
      {
        recipeId: 215,
        ingredientId: 155,
        measure: '2',
      },
      {
        recipeId: 215,
        ingredientId: 292,
        measure: '12 ounces',
      },
      {
        recipeId: 215,
        ingredientId: 346,
        measure: '5',
      },
      {
        recipeId: 215,
        ingredientId: 181,
        measure: '1',
      },
      {
        recipeId: 215,
        ingredientId: 452,
        measure: '1',
      },
      {
        recipeId: 215,
        ingredientId: 118,
        measure: '1 1/2 cup ',
      },
      {
        recipeId: 215,
        ingredientId: 547,
        measure: '2 tbsp',
      },
      {
        recipeId: 215,
        ingredientId: 340,
        measure: ' ',
      },
      {
        recipeId: 215,
        ingredientId: 511,
        measure: ' ',
      },
      {
        recipeId: 215,
        ingredientId: 55,
        measure: ' ',
      },
      {
        recipeId: 215,
        ingredientId: 178,
        measure: ' ',
      },
      {
        recipeId: 215,
        ingredientId: 249,
        measure: ' ',
      },
      {
        recipeId: 216,
        ingredientId: 340,
        measure: 'Knob',
      },
      {
        recipeId: 216,
        ingredientId: 198,
        measure: '2',
      },
      {
        recipeId: 216,
        ingredientId: 539,
        measure: '4',
      },
      {
        recipeId: 216,
        ingredientId: 179,
        measure: '2',
      },
      {
        recipeId: 216,
        ingredientId: 292,
        measure: '1',
      },
      {
        recipeId: 216,
        ingredientId: 293,
        measure: '1/2 ',
      },
      {
        recipeId: 216,
        ingredientId: 2,
        measure: '1/2 ',
      },
      {
        recipeId: 216,
        ingredientId: 512,
        measure: '1',
      },
      {
        recipeId: 216,
        ingredientId: 336,
        measure: '100ml',
      },
      {
        recipeId: 216,
        ingredientId: 384,
        measure: '100g ',
      },
      {
        recipeId: 217,
        ingredientId: 214,
        measure: '500g',
      },
      {
        recipeId: 217,
        ingredientId: 27,
        measure: '3 tablespoons',
      },
      {
        recipeId: 217,
        ingredientId: 541,
        measure: '1',
      },
      {
        recipeId: 217,
        ingredientId: 552,
        measure: 'pinch',
      },
      {
        recipeId: 217,
        ingredientId: 322,
        measure: '250ml',
      },
      {
        recipeId: 217,
        ingredientId: 441,
        measure: '1 (400g) tin',
      },
      {
        recipeId: 217,
        ingredientId: 297,
        measure: '1/2 teaspoon',
      },
      {
        recipeId: 217,
        ingredientId: 251,
        measure: '1 (200g) pack',
      },
      {
        recipeId: 218,
        ingredientId: 179,
        measure: '4 large',
      },
      {
        recipeId: 218,
        ingredientId: 6,
        measure: '1  bunch',
      },
      {
        recipeId: 218,
        ingredientId: 327,
        measure: '100g ',
      },
      {
        recipeId: 218,
        ingredientId: 180,
        measure: '1',
      },
      {
        recipeId: 218,
        ingredientId: 447,
        measure: '150ml',
      },
      {
        recipeId: 218,
        ingredientId: 425,
        measure: '1 tsp ',
      },
      {
        recipeId: 218,
        ingredientId: 340,
        measure: '3 tbs',
      },
      {
        recipeId: 218,
        ingredientId: 55,
        measure: '2 tbs',
      },
      {
        recipeId: 218,
        ingredientId: 536,
        measure: '6',
      },
      {
        recipeId: 218,
        ingredientId: 539,
        measure: '12',
      },
      {
        recipeId: 218,
        ingredientId: 417,
        measure: '6',
      },
      {
        recipeId: 219,
        ingredientId: 531,
        measure: '2 cups ',
      },
      {
        recipeId: 219,
        ingredientId: 511,
        measure: '1/3 cup',
      },
      {
        recipeId: 219,
        ingredientId: 3,
        measure: '3 tsp',
      },
      {
        recipeId: 219,
        ingredientId: 178,
        measure: '½ tsp',
      },
      {
        recipeId: 219,
        ingredientId: 417,
        measure: '1 beaten',
      },
      {
        recipeId: 219,
        ingredientId: 447,
        measure: '¾ cup',
      },
      {
        recipeId: 219,
        ingredientId: 335,
        measure: '3 tbs',
      },
      {
        recipeId: 219,
        ingredientId: 455,
        measure: 'garnish',
      },
      {
        recipeId: 220,
        ingredientId: 396,
        measure: '2',
      },
      {
        recipeId: 220,
        ingredientId: 296,
        measure: '2',
      },
      {
        recipeId: 220,
        ingredientId: 312,
        measure: '1',
      },
      {
        recipeId: 220,
        ingredientId: 298,
        measure: '1',
      },
      {
        recipeId: 220,
        ingredientId: 156,
        measure: '100g ',
      },
      {
        recipeId: 220,
        ingredientId: 118,
        measure: '100g ',
      },
      {
        recipeId: 220,
        ingredientId: 539,
        measure: '100g ',
      },
      {
        recipeId: 220,
        ingredientId: 417,
        measure: '1',
      },
      {
        recipeId: 220,
        ingredientId: 181,
        measure: '1',
      },
      {
        recipeId: 220,
        ingredientId: 249,
        measure: '1',
      },
      {
        recipeId: 221,
        ingredientId: 171,
        measure: '1/3 cup',
      },
      {
        recipeId: 221,
        ingredientId: 200,
        measure: '1/3 cup',
      },
      {
        recipeId: 221,
        ingredientId: 368,
        measure: '2/3 Cup',
      },
      {
        recipeId: 221,
        ingredientId: 14,
        measure: '1/2 cup ',
      },
      {
        recipeId: 221,
        ingredientId: 384,
        measure: '2-1/2 cups',
      },
      {
        recipeId: 221,
        ingredientId: 178,
        measure: '1/2 tsp',
      },
      {
        recipeId: 221,
        ingredientId: 511,
        measure: '1/4 tsp',
      },
      {
        recipeId: 221,
        ingredientId: 538,
        measure: '1 tsp ',
      },
      {
        recipeId: 221,
        ingredientId: 249,
        measure: '1/4 tsp',
      },
      {
        recipeId: 221,
        ingredientId: 529,
        measure: '1/2 tsp',
      },
      {
        recipeId: 221,
        ingredientId: 501,
        measure: '1-½ cups',
      },
      {
        recipeId: 221,
        ingredientId: 440,
        measure: '1 tsp ',
      },
      {
        recipeId: 221,
        ingredientId: 506,
        measure: '1 tbs',
      },
      {
        recipeId: 221,
        ingredientId: 177,
        measure: '2 tbs',
      },
      {
        recipeId: 221,
        ingredientId: 6,
        measure: '1/4 cup',
      },
      {
        recipeId: 222,
        ingredientId: 531,
        measure: '1 cup ',
      },
      {
        recipeId: 222,
        ingredientId: 332,
        measure: '2',
      },
      {
        recipeId: 222,
        ingredientId: 447,
        measure: '1 cup ',
      },
      {
        recipeId: 222,
        ingredientId: 177,
        measure: '3/4 cup ',
      },
      {
        recipeId: 222,
        ingredientId: 178,
        measure: 'Pinch',
      },
      {
        recipeId: 222,
        ingredientId: 511,
        measure: '1 tsp ',
      },
      {
        recipeId: 222,
        ingredientId: 340,
        measure: '3 tbs',
      },
      {
        recipeId: 223,
        ingredientId: 171,
        measure: '150g',
      },
      {
        recipeId: 223,
        ingredientId: 377,
        measure: '50g',
      },
      {
        recipeId: 223,
        ingredientId: 55,
        measure: '4 tbs',
      },
      {
        recipeId: 223,
        ingredientId: 181,
        measure: '40g',
      },
      {
        recipeId: 223,
        ingredientId: 267,
        measure: '2 cloves',
      },
      {
        recipeId: 223,
        ingredientId: 512,
        measure: '1',
      },
      {
        recipeId: 223,
        ingredientId: 320,
        measure: '1tbsp',
      },
      {
        recipeId: 223,
        ingredientId: 547,
        measure: '50 ml ',
      },
      {
        recipeId: 223,
        ingredientId: 148,
        measure: 'Dash',
      },
      {
        recipeId: 223,
        ingredientId: 213,
        measure: 'Top',
      },
      {
        recipeId: 224,
        ingredientId: 309,
        measure: '1.5kg',
      },
      {
        recipeId: 224,
        ingredientId: 390,
        measure: '3 chopped',
      },
      {
        recipeId: 224,
        ingredientId: 267,
        measure: '2 cloves',
      },
      {
        recipeId: 224,
        ingredientId: 283,
        measure: '1 tsp ',
      },
      {
        recipeId: 224,
        ingredientId: 302,
        measure: '1 tsp ',
      },
      {
        recipeId: 224,
        ingredientId: 294,
        measure: '1 tsp ',
      },
      {
        recipeId: 224,
        ingredientId: 26,
        measure: '1 tsp ',
      },
      {
        recipeId: 224,
        ingredientId: 139,
        measure: '2 tbs',
      },
      {
        recipeId: 224,
        ingredientId: 335,
        measure: '2 tbs',
      },
      {
        recipeId: 224,
        ingredientId: 464,
        measure: '1 sliced',
      },
      {
        recipeId: 224,
        ingredientId: 292,
        measure: '2',
      },
      {
        recipeId: 224,
        ingredientId: 439,
        measure: '1',
      },
      {
        recipeId: 224,
        ingredientId: 2,
        measure: '4 leaves',
      },
      {
        recipeId: 224,
        ingredientId: 300,
        measure: '2 tbs',
      },
      {
        recipeId: 224,
        ingredientId: 83,
        measure: '2 tbs',
      },
      {
        recipeId: 224,
        ingredientId: 42,
        measure: '1 tsp ',
      },
      {
        recipeId: 225,
        ingredientId: 179,
        measure: '2',
      },
      {
        recipeId: 225,
        ingredientId: 30,
        measure: '1',
      },
      {
        recipeId: 225,
        ingredientId: 267,
        measure: '2 cloves',
      },
      {
        recipeId: 225,
        ingredientId: 202,
        measure: '1',
      },
      {
        recipeId: 225,
        ingredientId: 14,
        measure: '2',
      },
      {
        recipeId: 225,
        ingredientId: 361,
        measure: '1',
      },
      {
        recipeId: 225,
        ingredientId: 384,
        measure: '1',
      },
      {
        recipeId: 225,
        ingredientId: 55,
        measure: '1 tbsp',
      },
      {
        recipeId: 225,
        ingredientId: 511,
        measure: '1 1/2 tsp ',
      },
      {
        recipeId: 225,
        ingredientId: 340,
        measure: '2 tbsp',
      },
      {
        recipeId: 226,
        ingredientId: 10,
        measure: '1/4 lb',
      },
      {
        recipeId: 226,
        ingredientId: 181,
        measure: '1',
      },
      {
        recipeId: 226,
        ingredientId: 332,
        measure: '3',
      },
      {
        recipeId: 226,
        ingredientId: 465,
        measure: '1 tbs',
      },
      {
        recipeId: 226,
        ingredientId: 112,
        measure: '1/2 ',
      },
      {
        recipeId: 226,
        ingredientId: 178,
        measure: 'To taste',
      },
      {
        recipeId: 226,
        ingredientId: 249,
        measure: 'To taste',
      },
      {
        recipeId: 226,
        ingredientId: 300,
        measure: 'Top',
      },
      {
        recipeId: 227,
        ingredientId: 340,
        measure: '50g',
      },
      {
        recipeId: 227,
        ingredientId: 181,
        measure: '1 chopped',
      },
      {
        recipeId: 227,
        ingredientId: 136,
        measure: '3 Pods',
      },
      {
        recipeId: 227,
        ingredientId: 243,
        measure: '1/4 tsp',
      },
      {
        recipeId: 227,
        ingredientId: 255,
        measure: '1 small',
      },
      {
        recipeId: 227,
        ingredientId: 512,
        measure: 'Sprigs of fresh',
      },
      {
        recipeId: 227,
        ingredientId: 419,
        measure: '450g',
      },
      {
        recipeId: 227,
        ingredientId: 384,
        measure: '1 Litre',
      },
      {
        recipeId: 227,
        ingredientId: 4,
        measure: '750g',
      },
      {
        recipeId: 227,
        ingredientId: 332,
        measure: '3',
      },
      {
        recipeId: 227,
        ingredientId: 213,
        measure: '3 tblsp chopped',
      },
      {
        recipeId: 227,
        ingredientId: 202,
        measure: '1 chopped',
      },
      {
        recipeId: 228,
        ingredientId: 71,
        measure: '1/2 lb',
      },
      {
        recipeId: 228,
        ingredientId: 178,
        measure: 'pinch',
      },
      {
        recipeId: 228,
        ingredientId: 249,
        measure: 'pinch',
      },
      {
        recipeId: 228,
        ingredientId: 538,
        measure: '2 tsp',
      },
      {
        recipeId: 228,
        ingredientId: 417,
        measure: '1/2 ',
      },
      {
        recipeId: 228,
        ingredientId: 381,
        measure: '3 tbs',
      },
      {
        recipeId: 228,
        ingredientId: 335,
        measure: '5 tbs',
      },
      {
        recipeId: 228,
        ingredientId: 28,
        measure: '1/4 lb',
      },
      {
        recipeId: 228,
        ingredientId: 181,
        measure: '1/2 cup ',
      },
      {
        recipeId: 228,
        ingredientId: 297,
        measure: '1 tsp ',
      },
      {
        recipeId: 228,
        ingredientId: 283,
        measure: '1 tsp ',
      },
      {
        recipeId: 228,
        ingredientId: 256,
        measure: '1 cup ',
      },
      {
        recipeId: 228,
        ingredientId: 171,
        measure: '1 cup ',
      },
      {
        recipeId: 228,
        ingredientId: 177,
        measure: '1 cup ',
      },
      {
        recipeId: 228,
        ingredientId: 562,
        measure: '1 tbs',
      },
      {
        recipeId: 228,
        ingredientId: 511,
        measure: '1 tsp ',
      },
      {
        recipeId: 228,
        ingredientId: 440,
        measure: '1 tsp ',
      },
      {
        recipeId: 229,
        ingredientId: 384,
        measure: '3 cups ',
      },
      {
        recipeId: 229,
        ingredientId: 178,
        measure: '1/4 tsp',
      },
      {
        recipeId: 229,
        ingredientId: 511,
        measure: '1/4 tsp',
      },
      {
        recipeId: 229,
        ingredientId: 249,
        measure: 'pinch',
      },
      {
        recipeId: 229,
        ingredientId: 538,
        measure: '1 tsp ',
      },
      {
        recipeId: 229,
        ingredientId: 528,
        measure: '1/3 cup',
      },
      {
        recipeId: 229,
        ingredientId: 171,
        measure: '1/3 cup',
      },
      {
        recipeId: 229,
        ingredientId: 506,
        measure: '1 tbs',
      },
      {
        recipeId: 229,
        ingredientId: 177,
        measure: '2 tbs',
      },
      {
        recipeId: 229,
        ingredientId: 6,
        measure: '1/4 cup',
      },
      {
        recipeId: 230,
        ingredientId: 267,
        measure: '1 clove',
      },
      {
        recipeId: 230,
        ingredientId: 313,
        measure: '2 small',
      },
      {
        recipeId: 230,
        ingredientId: 27,
        measure: '2 tbs',
      },
      {
        recipeId: 230,
        ingredientId: 501,
        measure: '1 tbs',
      },
      {
        recipeId: 230,
        ingredientId: 213,
        measure: 'Leaves',
      },
      {
        recipeId: 230,
        ingredientId: 307,
        measure: '2',
      },
      {
        recipeId: 230,
        ingredientId: 431,
        measure: '2 handfulls',
      },
      {
        recipeId: 230,
        ingredientId: 295,
        measure: 'Small bunch',
      },
      {
        recipeId: 230,
        ingredientId: 17,
        measure: '1',
      },
      {
        recipeId: 230,
        ingredientId: 6,
        measure: '2 chopped',
      },
      {
        recipeId: 230,
        ingredientId: 521,
        measure: '1/2 tsp',
      },
      {
        recipeId: 231,
        ingredientId: 574,
        measure: '400g',
      },
      {
        recipeId: 231,
        ingredientId: 27,
        measure: '1 tblsp ',
      },
      {
        recipeId: 231,
        ingredientId: 26,
        measure: 'pinch',
      },
      {
        recipeId: 231,
        ingredientId: 24,
        measure: '2 small cut chunks',
      },
      {
        recipeId: 231,
        ingredientId: 464,
        measure: '1 finely sliced',
      },
      {
        recipeId: 231,
        ingredientId: 139,
        measure: '2 tsp',
      },
      {
        recipeId: 231,
        ingredientId: 206,
        measure: '1',
      },
      {
        recipeId: 231,
        ingredientId: 182,
        measure: 'Juice of 1',
      },
      {
        recipeId: 231,
        ingredientId: 547,
        measure: '100g ',
      },
      {
        recipeId: 231,
        ingredientId: 38,
        measure: '2 tsp',
      },
      {
        recipeId: 231,
        ingredientId: 546,
        measure: '4',
      },
      {
        recipeId: 231,
        ingredientId: 294,
        measure: 'to serve',
      },
      {
        recipeId: 232,
        ingredientId: 308,
        measure: '6oz/180g',
      },
      {
        recipeId: 232,
        ingredientId: 227,
        measure: '2 tbsp',
      },
      {
        recipeId: 232,
        ingredientId: 562,
        measure: '2 tbsp',
      },
      {
        recipeId: 232,
        ingredientId: 440,
        measure: '2 tsp',
      },
      {
        recipeId: 232,
        ingredientId: 262,
        measure: '2 tsp',
      },
      {
        recipeId: 232,
        ingredientId: 511,
        measure: '2 tsp',
      },
      {
        recipeId: 232,
        ingredientId: 177,
        measure: '2 tbsp',
      },
      {
        recipeId: 232,
        ingredientId: 380,
        measure: '2 tbsp',
      },
      {
        recipeId: 232,
        ingredientId: 267,
        measure: '2 cloves',
      },
      {
        recipeId: 232,
        ingredientId: 309,
        measure: '1 cup',
      },
      {
        recipeId: 232,
        ingredientId: 417,
        measure: '1',
      },
      {
        recipeId: 232,
        ingredientId: 360,
        measure: '4 cups',
      },
      {
        recipeId: 233,
        ingredientId: 24,
        measure: '4 large',
      },
      {
        recipeId: 233,
        ingredientId: 511,
        measure: 'Pinch',
      },
      {
        recipeId: 233,
        ingredientId: 27,
        measure: '4 tbs',
      },
      {
        recipeId: 233,
        ingredientId: 181,
        measure: '1 chopped',
      },
      {
        recipeId: 233,
        ingredientId: 279,
        measure: '2 finely chopped',
      },
      {
        recipeId: 233,
        ingredientId: 490,
        measure: '200g',
      },
      {
        recipeId: 233,
        ingredientId: 411,
        measure: '1 tbs',
      },
      {
        recipeId: 233,
        ingredientId: 491,
        measure: '2 tbs chopped',
      },
      {
        recipeId: 233,
        ingredientId: 357,
        measure: '50g',
      },
      {
        recipeId: 233,
        ingredientId: 384,
        measure: '100ml',
      },
      {
        recipeId: 233,
        ingredientId: 39,
        measure: '4 tbs',
      },
      {
        recipeId: 233,
        ingredientId: 211,
        measure: '2 tbs',
      },
      {
        recipeId: 233,
        ingredientId: 355,
        measure: '1 tbs',
      },
      {
        recipeId: 234,
        ingredientId: 340,
        measure: '50g',
      },
      {
        recipeId: 234,
        ingredientId: 181,
        measure: '1 chopped',
      },
      {
        recipeId: 234,
        ingredientId: 171,
        measure: '100g ',
      },
      {
        recipeId: 234,
        ingredientId: 327,
        measure: '40g',
      },
      {
        recipeId: 234,
        ingredientId: 494,
        measure: '1',
      },
      {
        recipeId: 234,
        ingredientId: 233,
        measure: 'pinch',
      },
      {
        recipeId: 234,
        ingredientId: 495,
        measure: 'pinch',
      },
      {
        recipeId: 234,
        ingredientId: 309,
        measure: '250g',
      },
      {
        recipeId: 234,
        ingredientId: 566,
        measure: '2 Handfuls',
      },
      {
        recipeId: 234,
        ingredientId: 179,
        measure: '2 large',
      },
      {
        recipeId: 235,
        ingredientId: 288,
        measure: '4 tbsp',
      },
      {
        recipeId: 235,
        ingredientId: 14,
        measure: '350g',
      },
      {
        recipeId: 235,
        ingredientId: 181,
        measure: '1 large',
      },
      {
        recipeId: 235,
        ingredientId: 267,
        measure: '10',
      },
      {
        recipeId: 235,
        ingredientId: 292,
        measure: '1 thinly sliced',
      },
      {
        recipeId: 235,
        ingredientId: 422,
        measure: '1 tsp ',
      },
      {
        recipeId: 235,
        ingredientId: 139,
        measure: '2 tblsp ',
      },
      {
        recipeId: 235,
        ingredientId: 329,
        measure: '600ml',
      },
      {
        recipeId: 235,
        ingredientId: 491,
        measure: '1 tblsp ',
      },
      {
        recipeId: 235,
        ingredientId: 420,
        measure: '2 sticks',
      },
      {
        recipeId: 235,
        ingredientId: 213,
        measure: 'Handful',
      },
      {
        recipeId: 235,
        ingredientId: 167,
        measure: '400g',
      },
      {
        recipeId: 235,
        ingredientId: 379,
        measure: '2 tblsp ',
      },
      {
        recipeId: 235,
        ingredientId: 335,
        measure: 'drizzle',
      },
      {
        recipeId: 235,
        ingredientId: 296,
        measure: 'to serve',
      },
      {
        recipeId: 235,
        ingredientId: 134,
        measure: 'to serve',
      },
      {
        recipeId: 236,
        ingredientId: 154,
        measure: '450g',
      },
      {
        recipeId: 236,
        ingredientId: 27,
        measure: '4 tbs',
      },
      {
        recipeId: 236,
        ingredientId: 181,
        measure: '1 large',
      },
      {
        recipeId: 236,
        ingredientId: 353,
        measure: '1 large',
      },
      {
        recipeId: 236,
        ingredientId: 292,
        measure: '2 chopped',
      },
      {
        recipeId: 236,
        ingredientId: 437,
        measure: '150ml',
      },
      {
        recipeId: 236,
        ingredientId: 79,
        measure: '1 tbs',
      },
      {
        recipeId: 236,
        ingredientId: 441,
        measure: '400g',
      },
      {
        recipeId: 236,
        ingredientId: 504,
        measure: '1L',
      },
      {
        recipeId: 236,
        ingredientId: 26,
        measure: '2 pinches',
      },
      {
        recipeId: 236,
        ingredientId: 264,
        measure: '150ml',
      },
      {
        recipeId: 236,
        ingredientId: 524,
        measure: '8',
      },
      {
        recipeId: 237,
        ingredientId: 327,
        measure: '2 tbs',
      },
      {
        recipeId: 237,
        ingredientId: 455,
        measure: '2 tbs',
      },
      {
        recipeId: 237,
        ingredientId: 349,
        measure: '375g',
      },
      {
        recipeId: 237,
        ingredientId: 521,
        measure: '250g',
      },
      {
        recipeId: 237,
        ingredientId: 418,
        measure: '2 strips',
      },
      {
        recipeId: 237,
        ingredientId: 411,
        measure: '1 Stick',
      },
      {
        recipeId: 237,
        ingredientId: 332,
        measure: '2',
      },
      {
        recipeId: 237,
        ingredientId: 473,
        measure: '4',
      },
      {
        recipeId: 237,
        ingredientId: 173,
        measure: '50g',
      },
      {
        recipeId: 237,
        ingredientId: 194,
        measure: '500ml',
      },
      {
        recipeId: 237,
        ingredientId: 533,
        measure: 'Pod of',
      },
      {
        recipeId: 238,
        ingredientId: 327,
        measure: '375g',
      },
      {
        recipeId: 238,
        ingredientId: 521,
        measure: '50g',
      },
      {
        recipeId: 238,
        ingredientId: 543,
        measure: '7g',
      },
      {
        recipeId: 238,
        ingredientId: 447,
        measure: '75g',
      },
      {
        recipeId: 238,
        ingredientId: 332,
        measure: '3 Large',
      },
      {
        recipeId: 238,
        ingredientId: 340,
        measure: '180g',
      },
      {
        recipeId: 238,
        ingredientId: 232,
        measure: '250g',
      },
      {
        recipeId: 238,
        ingredientId: 333,
        measure: '8 slices',
      },
      {
        recipeId: 239,
        ingredientId: 198,
        measure: '4',
      },
      {
        recipeId: 239,
        ingredientId: 531,
        measure: '100g ',
      },
      {
        recipeId: 239,
        ingredientId: 332,
        measure: '2 Beaten ',
      },
      {
        recipeId: 239,
        ingredientId: 379,
        measure: '100g ',
      },
      {
        recipeId: 239,
        ingredientId: 55,
        measure: 'Fry',
      },
      {
        recipeId: 239,
        ingredientId: 366,
        measure: '2 tbs',
      },
      {
        recipeId: 239,
        ingredientId: 120,
        measure: '2 tbs',
      },
      {
        recipeId: 239,
        ingredientId: 562,
        measure: '1 tbs',
      },
      {
        recipeId: 239,
        ingredientId: 521,
        measure: '2 tblsp ',
      },
      {
        recipeId: 240,
        ingredientId: 325,
        measure: '6',
      },
      {
        recipeId: 240,
        ingredientId: 209,
        measure: '16',
      },
      {
        recipeId: 240,
        ingredientId: 283,
        measure: '1 1/2 ',
      },
      {
        recipeId: 240,
        ingredientId: 279,
        measure: '6',
      },
      {
        recipeId: 240,
        ingredientId: 16,
        measure: '8',
      },
      {
        recipeId: 240,
        ingredientId: 243,
        measure: '2 tbs',
      },
      {
        recipeId: 240,
        ingredientId: 247,
        measure: '1 1/2 ',
      },
      {
        recipeId: 240,
        ingredientId: 294,
        measure: '1 1/2 ',
      },
      {
        recipeId: 240,
        ingredientId: 353,
        measure: '1 1/2 ',
      },
      {
        recipeId: 240,
        ingredientId: 132,
        measure: '2 tbs',
      },
      {
        recipeId: 240,
        ingredientId: 152,
        measure: '1 can ',
      },
      {
        recipeId: 240,
        ingredientId: 511,
        measure: '1 tsp ',
      },
      {
        recipeId: 240,
        ingredientId: 177,
        measure: '1 cup ',
      },
      {
        recipeId: 241,
        ingredientId: 340,
        measure: '50g',
      },
      {
        recipeId: 241,
        ingredientId: 565,
        measure: '25g',
      },
      {
        recipeId: 241,
        ingredientId: 447,
        measure: '300ml ',
      },
      {
        recipeId: 241,
        ingredientId: 382,
        measure: '2',
      },
      {
        recipeId: 241,
        ingredientId: 327,
        measure: '5 tbs',
      },
      {
        recipeId: 241,
        ingredientId: 191,
        measure: '½ tsp',
      },
      {
        recipeId: 241,
        ingredientId: 16,
        measure: 'Pod of',
      },
      {
        recipeId: 241,
        ingredientId: 11,
        measure: '140g',
      },
      {
        recipeId: 241,
        ingredientId: 332,
        measure: '3',
      },
      {
        recipeId: 241,
        ingredientId: 371,
        measure: '8 slices',
      },
      {
        recipeId: 241,
        ingredientId: 264,
        measure: '150ml',
      },
      {
        recipeId: 241,
        ingredientId: 496,
        measure: 'to serve',
      },
      {
        recipeId: 242,
        ingredientId: 357,
        measure: '400g',
      },
      {
        recipeId: 242,
        ingredientId: 152,
        measure: '150ml',
      },
      {
        recipeId: 242,
        ingredientId: 177,
        measure: '100ml',
      },
      {
        recipeId: 242,
        ingredientId: 178,
        measure: '1 tsp ',
      },
      {
        recipeId: 242,
        ingredientId: 173,
        measure: '5 tbs',
      },
      {
        recipeId: 242,
        ingredientId: 531,
        measure: '3 tbs',
      },
      {
        recipeId: 242,
        ingredientId: 332,
        measure: '3',
      },
      {
        recipeId: 242,
        ingredientId: 67,
        measure: '200ml',
      },
      {
        recipeId: 242,
        ingredientId: 511,
        measure: '140g',
      },
      {
        recipeId: 243,
        ingredientId: 33,
        measure: '300g',
      },
      {
        recipeId: 243,
        ingredientId: 299,
        measure: '250g',
      },
      {
        recipeId: 243,
        ingredientId: 270,
        measure: '100g ',
      },
      {
        recipeId: 243,
        ingredientId: 373,
        measure: '500g',
      },
      {
        recipeId: 243,
        ingredientId: 521,
        measure: '175g',
      },
      {
        recipeId: 243,
        ingredientId: 296,
        measure: '7 Slices',
      },
      {
        recipeId: 244,
        ingredientId: 524,
        measure: '400g',
      },
      {
        recipeId: 244,
        ingredientId: 440,
        measure: '2 tbs',
      },
      {
        recipeId: 244,
        ingredientId: 491,
        measure: '1 tsp ',
      },
      {
        recipeId: 244,
        ingredientId: 173,
        measure: '1 tsp ',
      },
      {
        recipeId: 244,
        ingredientId: 521,
        measure: '1 tsp ',
      },
      {
        recipeId: 244,
        ingredientId: 363,
        measure: '1 tsp ',
      },
      {
        recipeId: 244,
        ingredientId: 216,
        measure: '85g',
      },
      {
        recipeId: 244,
        ingredientId: 465,
        measure: '3 Large',
      },
      {
        recipeId: 244,
        ingredientId: 389,
        measure: '1 tbs',
      },
      {
        recipeId: 244,
        ingredientId: 279,
        measure: '6 cloves',
      },
      {
        recipeId: 244,
        ingredientId: 189,
        measure: '450g',
      },
      {
        recipeId: 244,
        ingredientId: 283,
        measure: 'to taste',
      },
      {
        recipeId: 245,
        ingredientId: 340,
        measure: '100g ',
      },
      {
        recipeId: 245,
        ingredientId: 531,
        measure: '150g',
      },
      {
        recipeId: 245,
        ingredientId: 452,
        measure: '700ml',
      },
      {
        recipeId: 245,
        ingredientId: 181,
        measure: '30g',
      },
      {
        recipeId: 245,
        ingredientId: 213,
        measure: '1 tbs',
      },
      {
        recipeId: 245,
        ingredientId: 71,
        measure: '400g',
      },
      {
        recipeId: 245,
        ingredientId: 178,
        measure: 'Pinch',
      },
      {
        recipeId: 245,
        ingredientId: 249,
        measure: 'Pinch',
      },
      {
        recipeId: 245,
        ingredientId: 233,
        measure: 'Pinch',
      },
      {
        recipeId: 245,
        ingredientId: 332,
        measure: '2 Beaten ',
      },
      {
        recipeId: 245,
        ingredientId: 379,
        measure: '50g',
      },
      {
        recipeId: 246,
        ingredientId: 531,
        measure: '450g',
      },
      {
        recipeId: 246,
        ingredientId: 521,
        measure: '55g',
      },
      {
        recipeId: 246,
        ingredientId: 543,
        measure: '2 parts ',
      },
      {
        recipeId: 246,
        ingredientId: 178,
        measure: '1/2 tsp',
      },
      {
        recipeId: 246,
        ingredientId: 447,
        measure: '6 oz ',
      },
      {
        recipeId: 246,
        ingredientId: 332,
        measure: '2 Beaten ',
      },
      {
        recipeId: 246,
        ingredientId: 340,
        measure: '30g',
      },
      {
        recipeId: 246,
        ingredientId: 260,
        measure: '140g',
      },
      {
        recipeId: 246,
        ingredientId: 389,
        measure: '85g',
      },
      {
        recipeId: 246,
        ingredientId: 411,
        measure: '1 tsp ',
      },
      {
        recipeId: 246,
        ingredientId: 455,
        measure: 'To Glaze',
      },
      {
        recipeId: 247,
        ingredientId: 349,
        measure: '300g',
      },
      {
        recipeId: 247,
        ingredientId: 180,
        measure: 'Beaten',
      },
      {
        recipeId: 247,
        ingredientId: 473,
        measure: 'Beaten',
      },
      {
        recipeId: 247,
        ingredientId: 55,
        measure: '2 tbs',
      },
      {
        recipeId: 247,
        ingredientId: 71,
        measure: '70 ml ',
      },
      {
        recipeId: 247,
        ingredientId: 428,
        measure: '200g',
      },
      {
        recipeId: 247,
        ingredientId: 106,
        measure: '2 chopped',
      },
      {
        recipeId: 247,
        ingredientId: 327,
        measure: '30g',
      },
      {
        recipeId: 247,
        ingredientId: 452,
        measure: '85 ml ',
      },
      {
        recipeId: 247,
        ingredientId: 178,
        measure: 'pinch',
      },
      {
        recipeId: 247,
        ingredientId: 249,
        measure: 'pinch',
      },
      {
        recipeId: 247,
        ingredientId: 120,
        measure: 'Dash',
      },
      {
        recipeId: 248,
        ingredientId: 179,
        measure: '800g',
      },
      {
        recipeId: 248,
        ingredientId: 106,
        measure: '3',
      },
      {
        recipeId: 248,
        ingredientId: 27,
        measure: '2 tblsp',
      },
      {
        recipeId: 248,
        ingredientId: 384,
        measure: '100ml',
      },
      {
        recipeId: 248,
        ingredientId: 282,
        measure: '1 pot',
      },
      {
        recipeId: 248,
        ingredientId: 565,
        measure: 'Topping',
      },
      {
        recipeId: 248,
        ingredientId: 155,
        measure: '4',
      },
      {
        recipeId: 248,
        ingredientId: 539,
        measure: '4',
      },
      {
        recipeId: 248,
        ingredientId: 496,
        measure: 'Topping',
      },
      {
        recipeId: 248,
        ingredientId: 528,
        measure: 'Topping',
      },
      {
        recipeId: 249,
        ingredientId: 470,
        measure: '1 cups',
      },
      {
        recipeId: 249,
        ingredientId: 181,
        measure: '1',
      },
      {
        recipeId: 249,
        ingredientId: 361,
        measure: '1 small',
      },
      {
        recipeId: 249,
        ingredientId: 294,
        measure: 'sprinking',
      },
      {
        recipeId: 249,
        ingredientId: 496,
        measure: '150g',
      },
      {
        recipeId: 249,
        ingredientId: 84,
        measure: '10',
      },
      {
        recipeId: 249,
        ingredientId: 485,
        measure: '35g',
      },
      {
        recipeId: 249,
        ingredientId: 531,
        measure: '4 tablespoons',
      },
      {
        recipeId: 249,
        ingredientId: 421,
        measure: '300ml',
      },
      {
        recipeId: 249,
        ingredientId: 345,
        measure: '1.5 teaspoons',
      },
      {
        recipeId: 249,
        ingredientId: 501,
        measure: '1 teaspoon',
      },
      {
        recipeId: 250,
        ingredientId: 471,
        measure: '250g',
      },
      {
        recipeId: 250,
        ingredientId: 403,
        measure: '75g',
      },
      {
        recipeId: 250,
        ingredientId: 340,
        measure: '135g',
      },
      {
        recipeId: 250,
        ingredientId: 248,
        measure: '450g',
      },
      {
        recipeId: 250,
        ingredientId: 556,
        measure: '1tsp',
      },
      {
        recipeId: 250,
        ingredientId: 455,
        measure: '100g ',
      },
      {
        recipeId: 250,
        ingredientId: 242,
        measure: '150g',
      },
      {
        recipeId: 250,
        ingredientId: 489,
        measure: '1tsp',
      },
      {
        recipeId: 250,
        ingredientId: 264,
        measure: '300ml ',
      },
      {
        recipeId: 250,
        ingredientId: 234,
        measure: 'drizzle',
      },
      {
        recipeId: 250,
        ingredientId: 457,
        measure: 'Top',
      },
      {
        recipeId: 251,
        ingredientId: 27,
        measure: '1 tbls',
      },
      {
        recipeId: 251,
        ingredientId: 416,
        measure: '4',
      },
      {
        recipeId: 251,
        ingredientId: 106,
        measure: '2 finely chopped',
      },
      {
        recipeId: 251,
        ingredientId: 267,
        measure: '2 cloves minced',
      },
      {
        recipeId: 251,
        ingredientId: 411,
        measure: '2 tsp ground',
      },
      {
        recipeId: 251,
        ingredientId: 327,
        measure: '2 tsp',
      },
      {
        recipeId: 251,
        ingredientId: 105,
        measure: '250ml',
      },
      {
        recipeId: 251,
        ingredientId: 441,
        measure: '800g',
      },
      {
        recipeId: 251,
        ingredientId: 494,
        measure: '1',
      },
      {
        recipeId: 251,
        ingredientId: 420,
        measure: '3 sprigs',
      },
      {
        recipeId: 251,
        ingredientId: 382,
        measure: '2',
      },
      {
        recipeId: 251,
        ingredientId: 511,
        measure: '1 tsp ',
      },
      {
        recipeId: 251,
        ingredientId: 447,
        measure: '2 tbs',
      },
      {
        recipeId: 251,
        ingredientId: 151,
        measure: '600g',
      },
      {
        recipeId: 251,
        ingredientId: 303,
        measure: 'Grated',
      },
      {
        recipeId: 252,
        ingredientId: 176,
        measure: '500g',
      },
      {
        recipeId: 252,
        ingredientId: 384,
        measure: '2 cups',
      },
      {
        recipeId: 252,
        ingredientId: 426,
        measure: '1/2 cup',
      },
      {
        recipeId: 252,
        ingredientId: 89,
        measure: '1 packet',
      },
      {
        recipeId: 252,
        ingredientId: 178,
        measure: '1 tsp',
      },
      {
        recipeId: 252,
        ingredientId: 161,
        measure: '3 diced',
      },
      {
        recipeId: 252,
        ingredientId: 27,
        measure: '2 tbsp',
      },
      {
        recipeId: 252,
        ingredientId: 181,
        measure: '1 small finely diced',
      },
      {
        recipeId: 252,
        ingredientId: 569,
        measure: '2 finely diced',
      },
      {
        recipeId: 252,
        ingredientId: 267,
        measure: '2 cloves minced',
      },
      {
        recipeId: 252,
        ingredientId: 351,
        measure: '1 cup',
      },
      {
        recipeId: 252,
        ingredientId: 213,
        measure: 'garnish chopped',
      },
      {
        recipeId: 253,
        ingredientId: 119,
        measure: '1',
      },
      {
        recipeId: 253,
        ingredientId: 301,
        measure: '3 tbsp',
      },
      {
        recipeId: 253,
        ingredientId: 206,
        measure: '1',
      },
      {
        recipeId: 253,
        ingredientId: 519,
        measure: '2 tblsp ',
      },
      {
        recipeId: 253,
        ingredientId: 289,
        measure: '1 tsp ',
      },
      {
        recipeId: 253,
        ingredientId: 533,
        measure: '1 tsp ',
      },
      {
        recipeId: 253,
        ingredientId: 177,
        measure: '2 tbsp',
      },
      {
        recipeId: 253,
        ingredientId: 489,
        measure: 'pinch',
      },
      {
        recipeId: 254,
        ingredientId: 362,
        measure: '100g ',
      },
      {
        recipeId: 254,
        ingredientId: 340,
        measure: '180g',
      },
      {
        recipeId: 254,
        ingredientId: 462,
        measure: '180g',
      },
      {
        recipeId: 254,
        ingredientId: 217,
        measure: 'Zest of 1',
      },
      {
        recipeId: 254,
        ingredientId: 103,
        measure: '3 tbs',
      },
      {
        recipeId: 254,
        ingredientId: 327,
        measure: '225g',
      },
      {
        recipeId: 254,
        ingredientId: 3,
        measure: '1 tsp ',
      },
      {
        recipeId: 254,
        ingredientId: 332,
        measure: '3 Large',
      },
      {
        recipeId: 254,
        ingredientId: 334,
        measure: '100g ',
      },
      {
        recipeId: 254,
        ingredientId: 447,
        measure: '2 tbs',
      },
      {
        recipeId: 254,
        ingredientId: 92,
        measure: '500g',
      },
      {
        recipeId: 254,
        ingredientId: 65,
        measure: '100g ',
      },
      {
        recipeId: 254,
        ingredientId: 521,
        measure: '2 tsp',
      },
      {
        recipeId: 255,
        ingredientId: 384,
        measure: '450ml',
      },
      {
        recipeId: 255,
        ingredientId: 161,
        measure: '3',
      },
      {
        recipeId: 255,
        ingredientId: 340,
        measure: '75g',
      },
      {
        recipeId: 255,
        ingredientId: 442,
        measure: '2 sliced',
      },
      {
        recipeId: 255,
        ingredientId: 267,
        measure: '2 cloves minced',
      },
      {
        recipeId: 255,
        ingredientId: 327,
        measure: '50g',
      },
      {
        recipeId: 255,
        ingredientId: 447,
        measure: '200ml',
      },
      {
        recipeId: 255,
        ingredientId: 322,
        measure: '3 tbs',
      },
      {
        recipeId: 255,
        ingredientId: 264,
        measure: '150ml',
      },
      {
        recipeId: 255,
        ingredientId: 156,
        measure: '150g',
      },
      {
        recipeId: 255,
        ingredientId: 489,
        measure: 'spinkling',
      },
      {
        recipeId: 255,
        ingredientId: 249,
        measure: 'pinch',
      },
      {
        recipeId: 255,
        ingredientId: 230,
        measure: '1',
      },
      {
        recipeId: 255,
        ingredientId: 36,
        measure: '1 tbls',
      },
      {
        recipeId: 256,
        ingredientId: 27,
        measure: '1 tblsp ',
      },
      {
        recipeId: 256,
        ingredientId: 539,
        measure: '2',
      },
      {
        recipeId: 256,
        ingredientId: 181,
        measure: '1 finely chopped ',
      },
      {
        recipeId: 256,
        ingredientId: 121,
        measure: '1 Stick',
      },
      {
        recipeId: 256,
        ingredientId: 292,
        measure: '1 medium',
      },
      {
        recipeId: 256,
        ingredientId: 267,
        measure: '2 cloves chopped',
      },
      {
        recipeId: 256,
        ingredientId: 10,
        measure: '500g',
      },
      {
        recipeId: 256,
        ingredientId: 491,
        measure: '1 tbls',
      },
      {
        recipeId: 256,
        ingredientId: 441,
        measure: '800g',
      },
      {
        recipeId: 256,
        ingredientId: 519,
        measure: '1 tblsp ',
      },
      {
        recipeId: 256,
        ingredientId: 84,
        measure: '500g',
      },
      {
        recipeId: 256,
        ingredientId: 282,
        measure: '400ml',
      },
      {
        recipeId: 256,
        ingredientId: 23,
        measure: '125g',
      },
      {
        recipeId: 256,
        ingredientId: 303,
        measure: '50g',
      },
      {
        recipeId: 256,
        ingredientId: 295,
        measure: 'Topping',
      },
      {
        recipeId: 257,
        ingredientId: 161,
        measure: '1 1/2 ',
      },
      {
        recipeId: 257,
        ingredientId: 327,
        measure: '3/4 cup ',
      },
      {
        recipeId: 257,
        ingredientId: 417,
        measure: '1',
      },
      {
        recipeId: 257,
        ingredientId: 381,
        measure: '2 tbs',
      },
      {
        recipeId: 257,
        ingredientId: 3,
        measure: '1 tbs',
      },
      {
        recipeId: 257,
        ingredientId: 178,
        measure: '1 tsp ',
      },
      {
        recipeId: 257,
        ingredientId: 311,
        measure: '1/2 tsp',
      },
      {
        recipeId: 257,
        ingredientId: 550,
        measure: '1/4 tsp',
      },
      {
        recipeId: 257,
        ingredientId: 177,
        measure: '3/4 cup ',
      },
      {
        recipeId: 257,
        ingredientId: 384,
        measure: '1/2 cup ',
      },
      {
        recipeId: 257,
        ingredientId: 354,
        measure: '1/4 cup',
      },
      {
        recipeId: 257,
        ingredientId: 440,
        measure: '3 tbs',
      },
      {
        recipeId: 257,
        ingredientId: 519,
        measure: '2 tbs',
      },
      {
        recipeId: 257,
        ingredientId: 115,
        measure: '1 tbs',
      },
      {
        recipeId: 257,
        ingredientId: 538,
        measure: '2 tbs',
      },
      {
        recipeId: 257,
        ingredientId: 323,
        measure: '1/2 tbs',
      },
      {
        recipeId: 257,
        ingredientId: 267,
        measure: '1 clove',
      },
      {
        recipeId: 257,
        ingredientId: 6,
        measure: '2 chopped',
      },
      {
        recipeId: 257,
        ingredientId: 283,
        measure: '1 tsp ',
      },
      {
        recipeId: 258,
        ingredientId: 125,
        measure: '2 large',
      },
      {
        recipeId: 258,
        ingredientId: 434,
        measure: '4',
      },
      {
        recipeId: 258,
        ingredientId: 32,
        measure: '2',
      },
      {
        recipeId: 258,
        ingredientId: 298,
        measure: '4 large',
      },
      {
        recipeId: 258,
        ingredientId: 27,
        measure: '5 tbs',
      },
      {
        recipeId: 258,
        ingredientId: 160,
        measure: 'Bunch',
      },
      {
        recipeId: 258,
        ingredientId: 181,
        measure: '1 medium',
      },
      {
        recipeId: 258,
        ingredientId: 279,
        measure: '3 finely chopped',
      },
      {
        recipeId: 258,
        ingredientId: 139,
        measure: '1 tsp ',
      },
      {
        recipeId: 258,
        ingredientId: 511,
        measure: '1 tsp ',
      },
      {
        recipeId: 259,
        ingredientId: 179,
        measure: '1.5kg',
      },
      {
        recipeId: 259,
        ingredientId: 512,
        measure: '2 leaves',
      },
      {
        recipeId: 259,
        ingredientId: 164,
        measure: '2',
      },
      {
        recipeId: 259,
        ingredientId: 340,
        measure: '3 tbs',
      },
      {
        recipeId: 259,
        ingredientId: 229,
        measure: '750g',
      },
      {
        recipeId: 259,
        ingredientId: 542,
        measure: '2',
      },
      {
        recipeId: 259,
        ingredientId: 447,
        measure: '500ml',
      },
      {
        recipeId: 259,
        ingredientId: 233,
        measure: 'Grated',
      },
      {
        recipeId: 259,
        ingredientId: 178,
        measure: 'Pinch',
      },
      {
        recipeId: 259,
        ingredientId: 249,
        measure: 'Pinch',
      },
      {
        recipeId: 260,
        ingredientId: 427,
        measure: '1 lb',
      },
      {
        recipeId: 260,
        ingredientId: 426,
        measure: '1/2 cup ',
      },
      {
        recipeId: 260,
        ingredientId: 340,
        measure: '1/2 cup ',
      },
      {
        recipeId: 260,
        ingredientId: 565,
        measure: '1/2 cup ',
      },
      {
        recipeId: 260,
        ingredientId: 213,
        measure: '2 tbsp',
      },
      {
        recipeId: 260,
        ingredientId: 175,
        measure: ' ',
      },
      {
        recipeId: 261,
        ingredientId: 179,
        measure: '4 cups ',
      },
      {
        recipeId: 261,
        ingredientId: 340,
        measure: '60ml',
      },
      {
        recipeId: 261,
        ingredientId: 447,
        measure: '½ cup ',
      },
      {
        recipeId: 261,
        ingredientId: 10,
        measure: '450g',
      },
      {
        recipeId: 261,
        ingredientId: 181,
        measure: '1 finely chopped ',
      },
      {
        recipeId: 261,
        ingredientId: 385,
        measure: '500ml',
      },
      {
        recipeId: 261,
        ingredientId: 26,
        measure: 'to taste',
      },
      {
        recipeId: 261,
        ingredientId: 213,
        measure: 'to taste',
      },
      {
        recipeId: 261,
        ingredientId: 178,
        measure: 'Dash',
      },
      {
        recipeId: 261,
        ingredientId: 249,
        measure: 'Dash',
      },
      {
        recipeId: 262,
        ingredientId: 340,
        measure: '2 tbs',
      },
      {
        recipeId: 262,
        ingredientId: 106,
        measure: '2 chopped',
      },
      {
        recipeId: 262,
        ingredientId: 384,
        measure: '4 qt ',
      },
      {
        recipeId: 262,
        ingredientId: 161,
        measure: '1.5kg',
      },
      {
        recipeId: 262,
        ingredientId: 179,
        measure: '4kg',
      },
      {
        recipeId: 262,
        ingredientId: 178,
        measure: '2 tbs',
      },
      {
        recipeId: 262,
        ingredientId: 175,
        measure: '1tbsp',
      },
      {
        recipeId: 263,
        ingredientId: 539,
        measure: '2 sliced',
      },
      {
        recipeId: 263,
        ingredientId: 369,
        measure: '1 lb',
      },
      {
        recipeId: 263,
        ingredientId: 14,
        measure: '1 lb',
      },
      {
        recipeId: 263,
        ingredientId: 531,
        measure: '1/4 cup',
      },
      {
        recipeId: 263,
        ingredientId: 267,
        measure: '3 chopped',
      },
      {
        recipeId: 263,
        ingredientId: 181,
        measure: '1 Diced',
      },
      {
        recipeId: 263,
        ingredientId: 171,
        measure: '1 1/2 cup ',
      },
      {
        recipeId: 263,
        ingredientId: 2,
        measure: '4 cups ',
      },
      {
        recipeId: 263,
        ingredientId: 49,
        measure: '1 Jar',
      },
      {
        recipeId: 263,
        ingredientId: 105,
        measure: '1/4 cup',
      },
      {
        recipeId: 263,
        ingredientId: 512,
        measure: '1',
      },
      {
        recipeId: 263,
        ingredientId: 160,
        measure: '1 tsp ',
      },
      {
        recipeId: 263,
        ingredientId: 404,
        measure: '1 tsp ',
      },
      {
        recipeId: 263,
        ingredientId: 26,
        measure: '1 tbs',
      },
      {
        recipeId: 263,
        ingredientId: 78,
        measure: '1/8 teaspoon',
      },
      {
        recipeId: 263,
        ingredientId: 529,
        measure: '1 dash',
      },
      {
        recipeId: 263,
        ingredientId: 452,
        measure: '5 Cups',
      },
      {
        recipeId: 263,
        ingredientId: 491,
        measure: '2 tbs',
      },
      {
        recipeId: 263,
        ingredientId: 184,
        measure: '1 cup ',
      },
      {
        recipeId: 263,
        ingredientId: 120,
        measure: '1 dash',
      },
      {
        recipeId: 264,
        ingredientId: 216,
        measure: '50g',
      },
      {
        recipeId: 264,
        ingredientId: 465,
        measure: '15g',
      },
      {
        recipeId: 264,
        ingredientId: 524,
        measure: '10g',
      },
      {
        recipeId: 264,
        ingredientId: 335,
        measure: '5 tbs',
      },
      {
        recipeId: 264,
        ingredientId: 177,
        measure: '750 ml ',
      },
      {
        recipeId: 264,
        ingredientId: 132,
        measure: '1/2 tbs',
      },
      {
        recipeId: 264,
        ingredientId: 179,
        measure: '250g',
      },
      {
        recipeId: 264,
        ingredientId: 464,
        measure: '2',
      },
      {
        recipeId: 264,
        ingredientId: 279,
        measure: '4',
      },
      {
        recipeId: 264,
        ingredientId: 2,
        measure: '30g',
      },
      {
        recipeId: 264,
        ingredientId: 360,
        measure: '30g',
      },
      {
        recipeId: 264,
        ingredientId: 368,
        measure: '1',
      },
      {
        recipeId: 264,
        ingredientId: 440,
        measure: '1 tbs',
      },
      {
        recipeId: 264,
        ingredientId: 28,
        measure: '4',
      },
      {
        recipeId: 264,
        ingredientId: 417,
        measure: '1',
      },
      {
        recipeId: 265,
        ingredientId: 161,
        measure: '1',
      },
      {
        recipeId: 265,
        ingredientId: 507,
        measure: '1/4 cup',
      },
      {
        recipeId: 265,
        ingredientId: 417,
        measure: '1',
      },
      {
        recipeId: 265,
        ingredientId: 447,
        measure: '1/4 cup',
      },
      {
        recipeId: 265,
        ingredientId: 531,
        measure: '1/2 cup ',
      },
      {
        recipeId: 265,
        ingredientId: 455,
        measure: '1 tbs',
      },
      {
        recipeId: 265,
        ingredientId: 26,
        measure: '1/2 tsp',
      },
      {
        recipeId: 265,
        ingredientId: 178,
        measure: '1/2 tsp',
      },
      {
        recipeId: 265,
        ingredientId: 175,
        measure: '1/4 tsp',
      },
      {
        recipeId: 265,
        ingredientId: 550,
        measure: '1/4 tsp',
      },
      {
        recipeId: 265,
        ingredientId: 223,
        measure: '1/4 tsp',
      },
      {
        recipeId: 265,
        ingredientId: 16,
        measure: '1/2 tsp',
      },
      {
        recipeId: 265,
        ingredientId: 27,
        measure: '1 cup ',
      },
      {
        recipeId: 265,
        ingredientId: 50,
        measure: '1',
      },
      {
        recipeId: 266,
        ingredientId: 340,
        measure: '200g',
      },
      {
        recipeId: 266,
        ingredientId: 462,
        measure: '200g',
      },
      {
        recipeId: 266,
        ingredientId: 327,
        measure: '200g',
      },
      {
        recipeId: 266,
        ingredientId: 332,
        measure: '4 Beaten',
      },
      {
        recipeId: 266,
        ingredientId: 334,
        measure: '50g',
      },
      {
        recipeId: 266,
        ingredientId: 129,
        measure: '100ml',
      },
      {
        recipeId: 266,
        ingredientId: 341,
        measure: '85g',
      },
      {
        recipeId: 266,
        ingredientId: 65,
        measure: '85g',
      },
      {
        recipeId: 266,
        ingredientId: 186,
        measure: '250g',
      },
      {
        recipeId: 266,
        ingredientId: 467,
        measure: '250g',
      },
      {
        recipeId: 266,
        ingredientId: 486,
        measure: '100g ',
      },
      {
        recipeId: 266,
        ingredientId: 202,
        measure: 'Grated zest of 1',
      },
      {
        recipeId: 266,
        ingredientId: 195,
        measure: '1 ½ tbsp',
      },
      {
        recipeId: 266,
        ingredientId: 54,
        measure: '1 ½ tbsp',
      },
      {
        recipeId: 266,
        ingredientId: 556,
        measure: '1/2 tsp',
      },
      {
        recipeId: 266,
        ingredientId: 3,
        measure: '1/2 tsp',
      },
      {
        recipeId: 267,
        ingredientId: 152,
        measure: '2 cups ',
      },
      {
        recipeId: 267,
        ingredientId: 177,
        measure: '2 cups ',
      },
      {
        recipeId: 267,
        ingredientId: 397,
        measure: '1/4 tsp',
      },
      {
        recipeId: 267,
        ingredientId: 283,
        measure: '1',
      },
      {
        recipeId: 267,
        ingredientId: 512,
        measure: '1',
      },
      {
        recipeId: 267,
        ingredientId: 357,
        measure: '2 cups ',
      },
      {
        recipeId: 267,
        ingredientId: 332,
        measure: '4',
      },
      {
        recipeId: 267,
        ingredientId: 208,
        measure: '1',
      },
      {
        recipeId: 267,
        ingredientId: 216,
        measure: '1 cup ',
      },
      {
        recipeId: 267,
        ingredientId: 482,
        measure: '4 oz ',
      },
      {
        recipeId: 267,
        ingredientId: 55,
        measure: '2 tbs',
      },
      {
        recipeId: 267,
        ingredientId: 181,
        measure: '1',
      },
      {
        recipeId: 267,
        ingredientId: 267,
        measure: '3 cloves',
      },
      {
        recipeId: 267,
        ingredientId: 164,
        measure: '3',
      },
      {
        recipeId: 267,
        ingredientId: 448,
        measure: '2 tsp',
      },
      {
        recipeId: 267,
        ingredientId: 511,
        measure: '3 tbs',
      },
      {
        recipeId: 267,
        ingredientId: 132,
        measure: '1/3 cup',
      },
      {
        recipeId: 268,
        ingredientId: 107,
        measure: '2 cans',
      },
      {
        recipeId: 268,
        ingredientId: 55,
        measure: '3 tbs',
      },
      {
        recipeId: 268,
        ingredientId: 24,
        measure: '2 cups ',
      },
      {
        recipeId: 268,
        ingredientId: 209,
        measure: '5',
      },
      {
        recipeId: 268,
        ingredientId: 267,
        measure: '2 cloves',
      },
      {
        recipeId: 268,
        ingredientId: 213,
        measure: 'Pinch',
      },
      {
        recipeId: 268,
        ingredientId: 555,
        measure: '1/2 kg chopped ',
      },
      {
        recipeId: 269,
        ingredientId: 27,
        measure: '1 tbsp',
      },
      {
        recipeId: 269,
        ingredientId: 402,
        measure: '2 ½ tbsp',
      },
      {
        recipeId: 269,
        ingredientId: 320,
        measure: '1',
      },
      {
        recipeId: 269,
        ingredientId: 152,
        measure: '400ml can',
      },
      {
        recipeId: 269,
        ingredientId: 224,
        measure: '2 tsp',
      },
      {
        recipeId: 269,
        ingredientId: 187,
        measure: '100g',
      },
      {
        recipeId: 269,
        ingredientId: 182,
        measure: '2 juice of 1, the other halved',
      },
      {
        recipeId: 269,
        ingredientId: 192,
        measure: '150g',
      },
      {
        recipeId: 269,
        ingredientId: 294,
        measure: '½ small pack',
      },
      {
        recipeId: 270,
        ingredientId: 365,
        measure: '250g',
      },
      {
        recipeId: 270,
        ingredientId: 178,
        measure: 'pinch',
      },
      {
        recipeId: 270,
        ingredientId: 350,
        measure: '125g',
      },
      {
        recipeId: 270,
        ingredientId: 467,
        measure: '175g',
      },
      {
        recipeId: 270,
        ingredientId: 521,
        measure: '80g',
      },
      {
        recipeId: 270,
        ingredientId: 202,
        measure: 'Zest of 1',
      },
      {
        recipeId: 270,
        ingredientId: 217,
        measure: 'Zest of 1',
      },
      {
        recipeId: 270,
        ingredientId: 447,
        measure: '150ml',
      },
      {
        recipeId: 270,
        ingredientId: 326,
        measure: 'to serve',
      },
      {
        recipeId: 271,
        ingredientId: 155,
        measure: '4 - 6',
      },
      {
        recipeId: 271,
        ingredientId: 74,
        measure: '1 bottle',
      },
      {
        recipeId: 271,
        ingredientId: 247,
        measure: '1½ tablespoon',
      },
      {
        recipeId: 271,
        ingredientId: 108,
        measure: '1 tablespoon',
      },
      {
        recipeId: 271,
        ingredientId: 267,
        measure: '1 teaspoon',
      },
      {
        recipeId: 271,
        ingredientId: 226,
        measure: '1 can',
      },
      {
        recipeId: 271,
        ingredientId: 239,
        measure: '12',
      },
      {
        recipeId: 271,
        ingredientId: 219,
        measure: '2 cups',
      },
      {
        recipeId: 271,
        ingredientId: 305,
        measure: 'Halved',
      },
      {
        recipeId: 271,
        ingredientId: 17,
        measure: 'Sliced and Seeded',
      },
      {
        recipeId: 271,
        ingredientId: 206,
        measure: 'Peeled and Sliced',
      },
      {
        recipeId: 271,
        ingredientId: 237,
        measure: '2 tablespoons',
      },
      {
        recipeId: 271,
        ingredientId: 547,
        measure: '3 tablespoons',
      },
      {
        recipeId: 271,
        ingredientId: 447,
        measure: '1 tablespoon',
      },
      {
        recipeId: 272,
        ingredientId: 267,
        measure: '2 cloves',
      },
      {
        recipeId: 272,
        ingredientId: 489,
        measure: '2 tsp',
      },
      {
        recipeId: 272,
        ingredientId: 27,
        measure: '4 tbs',
      },
      {
        recipeId: 272,
        ingredientId: 202,
        measure: 'Zest and juice of 1',
      },
      {
        recipeId: 272,
        ingredientId: 39,
        measure: '1 tbs',
      },
      {
        recipeId: 272,
        ingredientId: 241,
        measure: '750g',
      },
      {
        recipeId: 272,
        ingredientId: 185,
        measure: 'To serve',
      },
      {
        recipeId: 273,
        ingredientId: 325,
        measure: '1 kg',
      },
      {
        recipeId: 273,
        ingredientId: 294,
        measure: '1 tbs',
      },
      {
        recipeId: 273,
        ingredientId: 247,
        measure: '1 tbs',
      },
      {
        recipeId: 273,
        ingredientId: 136,
        measure: '1 tbs',
      },
      {
        recipeId: 273,
        ingredientId: 16,
        measure: '1 tsp ',
      },
      {
        recipeId: 273,
        ingredientId: 26,
        measure: '2 tsp',
      },
      {
        recipeId: 273,
        ingredientId: 289,
        measure: '2 tbs',
      },
      {
        recipeId: 273,
        ingredientId: 27,
        measure: '3 tbs',
      },
      {
        recipeId: 273,
        ingredientId: 83,
        measure: '1 cup ',
      },
      {
        recipeId: 273,
        ingredientId: 279,
        measure: '1',
      },
      {
        recipeId: 273,
        ingredientId: 312,
        measure: 'Sliced',
      },
      {
        recipeId: 273,
        ingredientId: 298,
        measure: 'Sliced',
      },
      {
        recipeId: 273,
        ingredientId: 185,
        measure: '6',
      },
      {
        recipeId: 274,
        ingredientId: 71,
        measure: '500g',
      },
      {
        recipeId: 274,
        ingredientId: 125,
        measure: '1 large',
      },
      {
        recipeId: 274,
        ingredientId: 83,
        measure: '150g',
      },
      {
        recipeId: 274,
        ingredientId: 417,
        measure: '1 beaten',
      },
      {
        recipeId: 274,
        ingredientId: 565,
        measure: '3 tbs',
      },
      {
        recipeId: 274,
        ingredientId: 298,
        measure: '400g',
      },
      {
        recipeId: 274,
        ingredientId: 491,
        measure: '4 tbs',
      },
      {
        recipeId: 274,
        ingredientId: 179,
        measure: '350g',
      },
      {
        recipeId: 275,
        ingredientId: 71,
        measure: '1lb',
      },
      {
        recipeId: 275,
        ingredientId: 181,
        measure: '1',
      },
      {
        recipeId: 275,
        ingredientId: 494,
        measure: '1',
      },
      {
        recipeId: 275,
        ingredientId: 24,
        measure: '2',
      },
      {
        recipeId: 275,
        ingredientId: 279,
        measure: '4',
      },
      {
        recipeId: 275,
        ingredientId: 491,
        measure: '1 tbs',
      },
      {
        recipeId: 275,
        ingredientId: 357,
        measure: '2 cups ',
      },
      {
        recipeId: 275,
        ingredientId: 28,
        measure: '1/4 cup',
      },
      {
        recipeId: 275,
        ingredientId: 340,
        measure: '1/4 cup',
      },
      {
        recipeId: 275,
        ingredientId: 27,
        measure: '2 cups ',
      },
      {
        recipeId: 275,
        ingredientId: 185,
        measure: '1',
      },
      {
        recipeId: 275,
        ingredientId: 247,
        measure: '1 tbs',
      },
      {
        recipeId: 275,
        ingredientId: 148,
        measure: '3 tbs',
      },
      {
        recipeId: 275,
        ingredientId: 178,
        measure: 'To taste',
      },
      {
        recipeId: 275,
        ingredientId: 249,
        measure: 'To taste',
      },
      {
        recipeId: 276,
        ingredientId: 396,
        measure: '3 Lbs',
      },
      {
        recipeId: 276,
        ingredientId: 346,
        measure: '10',
      },
      {
        recipeId: 276,
        ingredientId: 292,
        measure: '5',
      },
      {
        recipeId: 276,
        ingredientId: 2,
        measure: '1 head',
      },
      {
        recipeId: 277,
        ingredientId: 398,
        measure: '4 Chopped',
      },
      {
        recipeId: 277,
        ingredientId: 106,
        measure: '2 large',
      },
      {
        recipeId: 277,
        ingredientId: 292,
        measure: '5 chopped',
      },
      {
        recipeId: 277,
        ingredientId: 442,
        measure: '1 chopped',
      },
      {
        recipeId: 277,
        ingredientId: 121,
        measure: '1 small',
      },
      {
        recipeId: 277,
        ingredientId: 2,
        measure: '1/4 ',
      },
      {
        recipeId: 277,
        ingredientId: 163,
        measure: '1 whole',
      },
      {
        recipeId: 277,
        ingredientId: 480,
        measure: '1tsp',
      },
      {
        recipeId: 277,
        ingredientId: 512,
        measure: '2',
      },
      {
        recipeId: 277,
        ingredientId: 213,
        measure: '4 sprigs',
      },
      {
        recipeId: 277,
        ingredientId: 39,
        measure: '4 sprigs',
      },
      {
        recipeId: 277,
        ingredientId: 249,
        measure: '1 tsp ',
      },
      {
        recipeId: 277,
        ingredientId: 178,
        measure: '1 tbs',
      },
      {
        recipeId: 278,
        ingredientId: 340,
        measure: '175g',
      },
      {
        recipeId: 278,
        ingredientId: 521,
        measure: '175g',
      },
      {
        recipeId: 278,
        ingredientId: 332,
        measure: '3',
      },
      {
        recipeId: 278,
        ingredientId: 365,
        measure: '250g',
      },
      {
        recipeId: 278,
        ingredientId: 447,
        measure: '3 tbs',
      },
      {
        recipeId: 278,
        ingredientId: 202,
        measure: 'Zest of 1',
      },
      {
        recipeId: 278,
        ingredientId: 318,
        measure: 'To Glaze',
      },
      {
        recipeId: 279,
        ingredientId: 531,
        measure: '350g',
      },
      {
        recipeId: 279,
        ingredientId: 178,
        measure: '1 tsp ',
      },
      {
        recipeId: 279,
        ingredientId: 511,
        measure: '2 tbs',
      },
      {
        recipeId: 279,
        ingredientId: 340,
        measure: '1 cup ',
      },
      {
        recipeId: 279,
        ingredientId: 177,
        measure: '1/2 cup ',
      },
      {
        recipeId: 279,
        ingredientId: 331,
        measure: '450g',
      },
      {
        recipeId: 279,
        ingredientId: 33,
        measure: '450g',
      },
      {
        recipeId: 279,
        ingredientId: 506,
        measure: '3 tbs',
      },
      {
        recipeId: 279,
        ingredientId: 411,
        measure: '1/4 tsp',
      },
      {
        recipeId: 279,
        ingredientId: 289,
        measure: '1 tsp ',
      },
      {
        recipeId: 279,
        ingredientId: 62,
        measure: '2 tbs',
      },
      {
        recipeId: 279,
        ingredientId: 447,
        measure: '2 tbs',
      },
      {
        recipeId: 280,
        ingredientId: 527,
        measure: '2 cups ',
      },
      {
        recipeId: 280,
        ingredientId: 213,
        measure: '1/3 cup',
      },
      {
        recipeId: 280,
        ingredientId: 27,
        measure: 'Dash',
      },
      {
        recipeId: 280,
        ingredientId: 133,
        measure: '3',
      },
      {
        recipeId: 280,
        ingredientId: 279,
        measure: '4',
      },
      {
        recipeId: 280,
        ingredientId: 247,
        measure: 'Sprinking',
      },
      {
        recipeId: 281,
        ingredientId: 332,
        measure: '10',
      },
      {
        recipeId: 281,
        ingredientId: 27,
        measure: '1 tbs',
      },
      {
        recipeId: 281,
        ingredientId: 434,
        measure: '2 finely chopped',
      },
      {
        recipeId: 281,
        ingredientId: 6,
        measure: '3 finely chopped',
      },
      {
        recipeId: 281,
        ingredientId: 569,
        measure: '4',
      },
      {
        recipeId: 281,
        ingredientId: 279,
        measure: '1 clove peeled crushed',
      },
      {
        recipeId: 281,
        ingredientId: 390,
        measure: '1',
      },
      {
        recipeId: 281,
        ingredientId: 248,
        measure: '300g',
      },
      {
        recipeId: 281,
        ingredientId: 447,
        measure: '6 tblsp',
      },
      {
        recipeId: 281,
        ingredientId: 560,
        measure: '4 tbs',
      },
      {
        recipeId: 281,
        ingredientId: 160,
        measure: '2 tbs',
      },
      {
        recipeId: 281,
        ingredientId: 431,
        measure: 'to serve',
      },
      {
        recipeId: 281,
        ingredientId: 565,
        measure: 'to serve',
      },
      {
        recipeId: 282,
        ingredientId: 110,
        measure: '1 tbs',
      },
      {
        recipeId: 282,
        ingredientId: 442,
        measure: '2 finely chopped',
      },
      {
        recipeId: 282,
        ingredientId: 434,
        measure: '1 large',
      },
      {
        recipeId: 282,
        ingredientId: 329,
        measure: '1L',
      },
      {
        recipeId: 282,
        ingredientId: 107,
        measure: '400g',
      },
      {
        recipeId: 282,
        ingredientId: 344,
        measure: '200g',
      },
      {
        recipeId: 282,
        ingredientId: 24,
        measure: '3 chopped',
      },
      {
        recipeId: 282,
        ingredientId: 279,
        measure: '3 chopped',
      },
      {
        recipeId: 282,
        ingredientId: 160,
        measure: 'Small pack',
      },
      {
        recipeId: 282,
        ingredientId: 565,
        measure: '40g',
      },
      {
        recipeId: 283,
        ingredientId: 217,
        measure: '1 large',
      },
      {
        recipeId: 283,
        ingredientId: 521,
        measure: '300g',
      },
      {
        recipeId: 283,
        ingredientId: 27,
        measure: '75 ml ',
      },
      {
        recipeId: 283,
        ingredientId: 531,
        measure: '280g',
      },
      {
        recipeId: 283,
        ingredientId: 3,
        measure: '1 tbs',
      },
      {
        recipeId: 283,
        ingredientId: 332,
        measure: '4 large',
      },
      {
        recipeId: 283,
        ingredientId: 556,
        measure: '2 tsp',
      },
      {
        recipeId: 284,
        ingredientId: 10,
        measure: '500g',
      },
      {
        recipeId: 284,
        ingredientId: 259,
        measure: '250g',
      },
      {
        recipeId: 284,
        ingredientId: 181,
        measure: '1',
      },
      {
        recipeId: 284,
        ingredientId: 267,
        measure: '4 cloves',
      },
      {
        recipeId: 284,
        ingredientId: 213,
        measure: '3 tblsp chopped',
      },
      {
        recipeId: 284,
        ingredientId: 26,
        measure: '1 tbs',
      },
      {
        recipeId: 284,
        ingredientId: 3,
        measure: '3/4 teaspoon',
      },
      {
        recipeId: 284,
        ingredientId: 379,
        measure: '2 tbs',
      },
      {
        recipeId: 284,
        ingredientId: 177,
        measure: '3 tbs',
      },
      {
        recipeId: 284,
        ingredientId: 320,
        measure: '1',
      },
      {
        recipeId: 284,
        ingredientId: 178,
        measure: '1 tsp ',
      },
      {
        recipeId: 284,
        ingredientId: 249,
        measure: '1 tsp ',
      },
      {
        recipeId: 285,
        ingredientId: 179,
        measure: '225g',
      },
      {
        recipeId: 285,
        ingredientId: 353,
        measure: '1 small',
      },
      {
        recipeId: 285,
        ingredientId: 267,
        measure: '1 clove finely chopped',
      },
      {
        recipeId: 285,
        ingredientId: 447,
        measure: '75 ml ',
      },
      {
        recipeId: 285,
        ingredientId: 264,
        measure: '100ml',
      },
      {
        recipeId: 285,
        ingredientId: 340,
        measure: 'For Greasing',
      },
      {
        recipeId: 285,
        ingredientId: 303,
        measure: 'to serve',
      },
    ];
    const now = new Date();
    const recipeIngredientsWithTimestamps = recipeIngredients.map((ri) => ({
      ...ri,
      createdAt: now,
      updatedAt: now,
    }));
    await queryInterface.bulkInsert(
      'recipe_ingredients',
      recipeIngredientsWithTimestamps,
      {}
    );
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('recipe_ingredients', null, {});
  },
};
