function calculatePrice(price, preferences) {
  // INFO - "price" is a string, can be like one of these:
  // "160'000 CHF" OR "160'000 CHF/yearly" OR "PRICE UPON REQUEST"

  let cleanPrice = price

  if (preferences.currency == "CHF") {
    return cleanPrice
  }
  // when price is "PRICE UPON REQUEST"
  if (price.includes("REQUEST")) {
    return price
  }

  // START CONVERTING to other currencies
  
  // get price value as a number
  let priceNum = cleanPrice.split(" ")[0]
  // if the property is for Rent and has price such as "160'000 CHF/yearly"
  let isYearly = cleanPrice.split(" ")[1].includes("yearly")

  priceNum = priceNum.replaceAll("'", "")
  // converting string to integer
  priceNum = parseInt(priceNum)
  
  // apply currency rate
  let convertedPrice = priceNum * preferences[preferences.currency]
  cleanPrice = `${convertedPrice} ${preferences.currency}`

  // if property is for rent
  if (isYearly) {
    cleanPrice += '/yearly'
  }

  return cleanPrice
}

export { calculatePrice }