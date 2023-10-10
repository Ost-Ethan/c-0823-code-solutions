const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const priceList = prices.map(getPrices);
const stringPricesArray = prices.map(stringPrices);
console.log('Price objects:', priceList);
console.log('Formatted prices:', stringPricesArray);

function getPrices(prices) {
  const salePrice = prices / 2;
  return { prices, salePrice };
}

function stringPrices(prices, index) {
  const normalizedPrice = prices.toFixed(2);
  const priceString = normalizedPrice.toString();
  return priceString;
}
