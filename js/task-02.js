const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const vegetables = ingredients[0]

const allIngredients = ingredients.map((item) => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.classList.add('item');
  ingredientsEl.textContent = `${item}`;
  return ingredientsEl
});
// console.log(...allIngredients)
const ingr = document.querySelector('#ingredients')
ingr.append(...allIngredients)
