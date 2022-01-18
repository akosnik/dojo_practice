import React from 'react'


const CryptoCoinsUsingFetch = () => {

  fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(response => {
      console.log("Here is the api response", response)
    })
    .catch(err => {
      console.log("There was an error:", err)
    })

  console.log("Post fetch log")

  return (
    <>
      <h1>Crypto Coins Using Fetch</h1>
    </>
  )
}


export default CryptoCoinsUsingFetch;