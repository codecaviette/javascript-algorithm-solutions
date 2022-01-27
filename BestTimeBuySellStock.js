/**********************************
Coding challenge: Given an array of Apple stock prices from yesterday, write an efficient function that takes stockPrices and returns the best profit you could have made from one purchase and one sale of one share of Apple stock yesterday.

The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
The values are the price (in US dollars) of one share of Apple stock at that time.
So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.

Ex:
const stockPrices = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)

*/

/**********************************
Solution
*/

// 1. Pseudocode
// Calculate the max profit by finding lowest buy price and highest sell price
  // Must buy THEN sell

// greedy approach (pro: fast/usu one loop)
// regardless of approach, always check for edge cases: if there are not enough prices, throw error
// must buy then sell; cannot buy/sell at same time
// track: minPrice (lowest price to buy), currPrice (to get currProfit), currProfit, maxProfit (to compare to currProfit)
  // to get us started, initialize minPrice to be first item/price in array
  // initialize maxProfit to be second item/price minus first item
    // initialize minPrice = stockPrices[0]
    // initialize maxProfit = stockPrices[1] - stockPrices[0]
// loop thru, starting w i=1 (since we already declared minPrice equal to first array item)
    // set currently-iterated item equal to currPrice
    // find difference btwn currPrice - minPrice == currProfit
    // if currProfit > maxProfit, set maxProfit equal to currProfit
    // if currPrice < minPrice, set minPrice equal to currPrice

// 2. Code
function getMaxProfit(stockPrices) {

  if (stockPrices.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }    

  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  for (let i = 1; i < stockPrices.length; i++) {
    let currPrice = stockPrices[i];

    let currProfit = currPrice - minPrice;

    maxProfit = Math.max(maxProfit, currProfit);
    minPrice = Math.min(currPrice, minPrice);
  }

  return maxProfit;
}

/*
3. BigO time: O(n) bc only one loop

*/