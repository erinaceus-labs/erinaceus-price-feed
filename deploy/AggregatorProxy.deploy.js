const { ethers } = require("hardhat");

module.exports = async ({
    ethers: { getNamedSigners, getContract, utils :{ parseEther} },
    deployments: { deploy },
  }) => {
    
    const { deployer } = (await getNamedSigners());  
    const aggregator = (await getContract("FluxAggregator")).address;
    await deploy("AggregatorProxy", {
      from: deployer.address,
      contract: "AggregatorProxy",
      args: [aggregator],
      log: true,
    });
  };
  
  module.exports.tags = ["AggregatorProxy", "mainnet"];
  module.exports.dependencies = ["FluxAggregator"];