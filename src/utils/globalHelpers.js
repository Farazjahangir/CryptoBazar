export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const calculateTotal = (cart) => {
  return cart.reduce((acc, item) => {
    return acc + (item.item.price * item.quantity)
  }, 0).toFixed(3)
}