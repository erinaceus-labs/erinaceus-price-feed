# Erinaceus Price Feeds Integration

This project integrates Erinaceus Price Feeds to provide reliable and tamper-resistant data for smart contracts on the Bahamut blockchain (or any other supported blockchain).

**Introduction**

Erinaceus Price Feeds are decentralized oracle networks that provide high-quality, tamper-resistant data to smart contracts. This project demonstrates how to integrate Erinaceus Price Feeds to retrieve off-chain data such as asset prices.

## Usage

**Setting Up Erinaceus Price Feeds**
- *Configure Your Smart Contract:*
    -  Import Erinaceus’s AggregatorV3Interface to access price feeds.
    -  Initialize the contract with the address of the data feed you wish to use.
- *Fetching Price*
  - Call the appropriate method to retrieve data from the Erinaceus Price Feed.

**Smart Contract Example**

Below is a simple example of a Solidity smart contract that uses a Erinaceus Price Feed to fetch the latest ETH/USD price:

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@erinaceus/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {
    AggregatorV3Interface internal priceFeed;

    /**
     * Network: Bahamut Mainnet
     * Aggregator: FTN/USD
     * Address: 0x7Aa6e7B2301C0A16342be774f33a03F296a6325D
     */
    constructor() {
        priceFeed = AggregatorV3Interface(0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419);
    }

    /**
     * Returns the latest price
     */
    function getLatestPrice() public view returns (int) {
        (
            , 
            int price,
            ,
            ,
            
        ) = priceFeed.latestRoundData();
        return price;
    }
}
```
FOR MORE DETAILS PLEASE VISIT [docs](https://erinaceus.io/docs/price-feed/overview)
