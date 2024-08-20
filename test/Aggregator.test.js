const { expect } = require('chai');
const {
  ethers: {
    getContract,
    getContractAt,
    getNamedSigners,
    utils: {
      parseEther, 
      parseUnits,
    },
    provider,
  },
  deployments: { fixture },
} = require('hardhat');
const {
  mine,
} = require('@nomicfoundation/hardhat-network-helpers');

describe("Aggregator", function () {
  let aggregator, wFTN, deployer, user1, user2, user3, user4, user5, user6;
  const setupFixture = async () => {
    await fixture('mainnet');
    aggregator = await getContract("FluxAggregator");
    proxy = await getContract("AggregatorProxy");
    wFTN = await getContractAt("IWFTN", "0xA4C1277426Fb596003b13aFFf70C3e40a829Ca20");
    return [aggregator, wFTN, proxy];
  };

  beforeEach('Before All: ', async function () {
    ({ deployer, user1, user2, user3, user4, user5, user6 } =
      await getNamedSigners());

    [aggregator, wFTN, proxy] = await setupFixture();
    console.log(await proxy.aggregator())
    await proxy.proposeAggregator(deployer.address)
    await proxy.confirmAggregator(deployer.address)
    console.log(await proxy.aggregator())
    await wFTN.deposit({value: parseEther("1")})
    await wFTN.transfer(aggregator.address, parseEther("1"));
    await aggregator.updateAvailableFunds();
    await aggregator.changeOracles([], [user1.address, user2.address], [deployer.address, deployer.address], 1, 2, 0);
  });
  describe("flow", function () {
    it("Flow test", async function () {
      await aggregator.setRequesterPermissions(deployer.address, true, 0);
      round = await aggregator.callStatic.requestNewRound()
      console.log("🚀 ~ round:", round)
      await aggregator.connect(user1).submit(round, 100)
      console.log((await aggregator.latestRoundData()).answer.toString());
      await aggregator.connect(user2).submit(round, 500)
      console.log((await aggregator.latestRoundData()).answer.toString());
      await aggregator.changeOracles([], [user3.address, user4.address, user5.address, user6.address], [deployer.address, deployer.address, deployer.address, deployer.address], 6, 6, 0);
      round = await aggregator.callStatic.requestNewRound()
      await aggregator.updateFutureRounds( parseEther("0.001"), 1, 6 , 0, 60000)
      console.log("aaaaaaaaaaaa", await aggregator.oracleRoundState(user5.address, 0))
      await aggregator.connect(user5).submit(round, 1000)
      console.log("aaaaaaaaaaaa", await aggregator.oracleRoundState(user5.address, 0))
      await aggregator.connect(user5).submit(round, 800)
      await aggregator.connect(user2).submit(round, 400)
      await aggregator.connect(user4).submit(round, 500)
      await aggregator.connect(user1).submit(round, 50)
      await aggregator.connect(user6).submit(round, 800)
      console.log((await aggregator.latestRoundData()).answer.toString());
    });
  });
});
