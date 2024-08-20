
module.exports = async ({
    ethers: { getNamedSigners, getContract, utils :{ parseEther} },
    deployments: { deploy },
  }) => {
    
    const { deployer } = (await getNamedSigners());  
    await deploy("FluxAggregator", {
      from: deployer.address,
      contract: "FluxAggregator",
      args: [parseEther("0.00001"), 4000, 0, 2500000000, 8, "PRICE FEED FTN/USD"],
      log: true,
    });
  };
  
  module.exports.tags = ["FluxAggregator", "mainnet"];