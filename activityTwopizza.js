const expr = 'Pepperoni';
const topping = `Mushroom`;
switch (expr) {
  case `Mushroom`:
     console.log(`${topping}should not be on a pizza`);
    break;
  case 'Garlic':
  case 'Cheese':
    console.log('These are important ingredients for my pizza');
    break;
  default:
    console.log(`I don't mind ${expr}.`);
}