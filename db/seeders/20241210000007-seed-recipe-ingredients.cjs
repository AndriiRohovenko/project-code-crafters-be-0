'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const recipeIngredients = [
      {
        recipeId: 20,
        ingredientId: 974,
        measure: "175g",
      },
      {
        recipeId: 20,
        ingredientId: 1155,
        measure: "175g",
      },
      {
        recipeId: 20,
        ingredientId: 999,
        measure: "140g",
      },
      {
        recipeId: 20,
        ingredientId: 996,
        measure: "50g",
      },
      {
        recipeId: 20,
        ingredientId: 637,
        measure: "½ tsp",
      },
      {
        recipeId: 20,
        ingredientId: 966,
        measure: "3 Medium",
      },
      {
        recipeId: 20,
        ingredientId: 1190,
        measure: "½ tsp",
      },
      {
        recipeId: 20,
        ingredientId: 642,
        measure: "¼ teaspoon",
      },
      {
        recipeId: 20,
        ingredientId: 1159,
        measure: "½ tsp",
      },
      {
        recipeId: 20,
        ingredientId: 707,
        measure: "200g",
      },
      {
        recipeId: 20,
        ingredientId: 693,
        measure: "1kg",
      },
      {
        recipeId: 20,
        ingredientId: 1089,
        measure: "Dusting",
      },
      {
        recipeId: 21,
        ingredientId: 915,
        measure: "300g soaked overnight in water",
      },
      {
        recipeId: 21,
        ingredientId: 792,
        measure: "2kg cut into 3cm cubes",
      },
      {
        recipeId: 21,
        ingredientId: 661,
        measure: "120ml",
      },
      {
        recipeId: 21,
        ingredientId: 798,
        measure: "24 Skinned",
      },
      {
        recipeId: 21,
        ingredientId: 926,
        measure: "4 large",
      },
      {
        recipeId: 21,
        ingredientId: 728,
        measure: "2",
      },
      {
        recipeId: 21,
        ingredientId: 793,
        measure: "1",
      },
      {
        recipeId: 21,
        ingredientId: 725,
        measure: "350g",
      },
      {
        recipeId: 21,
        ingredientId: 956,
        measure: "150ml",
      },
      {
        recipeId: 21,
        ingredientId: 1155,
        measure: "1 tsp",
      },
      {
        recipeId: 21,
        ingredientId: 757,
        measure: "4 sprigs",
      },
      {
        recipeId: 21,
        ingredientId: 918,
        measure: "4 sprigs",
      },
      {
        recipeId: 21,
        ingredientId: 1018,
        measure: "450ml",
      },
      {
        recipeId: 22,
        ingredientId: 974,
        measure: "100g ",
      },
      {
        recipeId: 22,
        ingredientId: 1124,
        measure: "900g",
      },
      {
        recipeId: 22,
        ingredientId: 1062,
        measure: "3",
      },
      {
        recipeId: 22,
        ingredientId: 740,
        measure: "2 medium",
      },
      {
        recipeId: 22,
        ingredientId: 926,
        measure: "4 sliced",
      },
      {
        recipeId: 22,
        ingredientId: 961,
        measure: "25g",
      },
      {
        recipeId: 22,
        ingredientId: 754,
        measure: "2 tsp",
      },
      {
        recipeId: 22,
        ingredientId: 1018,
        measure: "500ml",
      },
      {
        recipeId: 22,
        ingredientId: 1016,
        measure: "2",
      },
      {
        recipeId: 22,
        ingredientId: 813,
        measure: "900g",
      },
      {
        recipeId: 23,
        ingredientId: 1074,
        measure: "3/4 cup",
      },
      {
        recipeId: 23,
        ingredientId: 811,
        measure: "1/2 cup",
      },
      {
        recipeId: 23,
        ingredientId: 1023,
        measure: "1/4 cup",
      },
      {
        recipeId: 23,
        ingredientId: 1046,
        measure: "1/2 teaspoon",
      },
      {
        recipeId: 23,
        ingredientId: 931,
        measure: "1/2 teaspoon",
      },
      {
        recipeId: 23,
        ingredientId: 1140,
        measure: "4 Tablespoons",
      },
      {
        recipeId: 23,
        ingredientId: 789,
        measure: "2",
      },
      {
        recipeId: 23,
        ingredientId: 1169,
        measure: "1 (12 oz.)",
      },
      {
        recipeId: 23,
        ingredientId: 1077,
        measure: "3 cups",
      },
      {
        recipeId: 24,
        ingredientId: 919,
        measure: "1 lb",
      },
      {
        recipeId: 24,
        ingredientId: 661,
        measure: "1 tablespoon",
      },
      {
        recipeId: 24,
        ingredientId: 1074,
        measure: "2 tablespoons",
      },
      {
        recipeId: 24,
        ingredientId: 649,
        measure: "2 tablespoons",
      },
      {
        recipeId: 24,
        ingredientId: 1178,
        measure: "4 tablespoons",
      },
      {
        recipeId: 25,
        ingredientId: 689,
        measure: "Dash",
      },
      {
        recipeId: 25,
        ingredientId: 973,
        measure: "1 Can",
      },
      {
        recipeId: 25,
        ingredientId: 813,
        measure: "5 thin cut",
      },
      {
        recipeId: 25,
        ingredientId: 955,
        measure: "2 cups",
      },
      {
        recipeId: 26,
        ingredientId: 961,
        measure: "175g/6oz",
      },
      {
        recipeId: 26,
        ingredientId: 722,
        measure: "75g/2½oz",
      },
      {
        recipeId: 26,
        ingredientId: 670,
        measure: "2-3 tbsp",
      },
      {
        recipeId: 26,
        ingredientId: 1092,
        measure: "1 tbsp",
      },
      {
        recipeId: 26,
        ingredientId: 974,
        measure: "125g/4½oz",
      },
      {
        recipeId: 26,
        ingredientId: 1155,
        measure: "125g/4½oz",
      },
      {
        recipeId: 26,
        ingredientId: 968,
        measure: "125g/4½oz",
      },
      {
        recipeId: 26,
        ingredientId: 864,
        measure: "1",
      },
      {
        recipeId: 26,
        ingredientId: 642,
        measure: "½ tsp",
      },
      {
        recipeId: 26,
        ingredientId: 791,
        measure: "50g/1¾oz",
      },
      {
        recipeId: 27,
        ingredientId: 863,
        measure: "1  bunch",
      },
      {
        recipeId: 27,
        ingredientId: 1173,
        measure: "2 strips",
      },
      {
        recipeId: 27,
        ingredientId: 901,
        measure: "3 cloves Chopped",
      },
      {
        recipeId: 27,
        ingredientId: 815,
        measure: "1 medium",
      },
      {
        recipeId: 27,
        ingredientId: 660,
        measure: "1/2 tsp",
      },
      {
        recipeId: 27,
        ingredientId: 674,
        measure: "1 Sprig",
      },
      {
        recipeId: 27,
        ingredientId: 932,
        measure: "1",
      },
      {
        recipeId: 27,
        ingredientId: 1203,
        measure: "1",
      },
      {
        recipeId: 27,
        ingredientId: 753,
        measure: "4",
      },
      {
        recipeId: 27,
        ingredientId: 689,
        measure: "Splash",
      },
      {
        recipeId: 28,
        ingredientId: 1030,
        measure: "4-5 pound",
      },
      {
        recipeId: 28,
        ingredientId: 812,
        measure: "Dash",
      },
      {
        recipeId: 28,
        ingredientId: 815,
        measure: "3",
      },
      {
        recipeId: 28,
        ingredientId: 901,
        measure: "5 cloves",
      },
      {
        recipeId: 28,
        ingredientId: 674,
        measure: "1 Sprig",
      },
      {
        recipeId: 28,
        ingredientId: 1054,
        measure: "1 sprig ",
      },
      {
        recipeId: 28,
        ingredientId: 1016,
        measure: "4",
      },
      {
        recipeId: 28,
        ingredientId: 1086,
        measure: "2 cups",
      },
      {
        recipeId: 28,
        ingredientId: 926,
        measure: "3 Large",
      },
      {
        recipeId: 28,
        ingredientId: 979,
        measure: "1 Tbsp",
      },
      {
        recipeId: 28,
        ingredientId: 813,
        measure: "4 Mashed",
      },
      {
        recipeId: 29,
        ingredientId: 974,
        measure: "1 cup ",
      },
      {
        recipeId: 29,
        ingredientId: 1107,
        measure: "3",
      },
      {
        recipeId: 29,
        ingredientId: 882,
        measure: "8 oz ",
      },
      {
        recipeId: 29,
        ingredientId: 637,
        measure: "1 tsp ",
      },
      {
        recipeId: 29,
        ingredientId: 1165,
        measure: "3 cups ",
      },
      {
        recipeId: 29,
        ingredientId: 1034,
        measure: "1 Jar",
      }
    ];

    const now = new Date();
    const recipeIngredientsWithTimestamps = recipeIngredients.map(ri => ({
      ...ri,
      createdAt: now,
      updatedAt: now,
    }));

    await queryInterface.bulkInsert('recipe_ingredients', recipeIngredientsWithTimestamps, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recipe_ingredients', null, {});
  }
};
