require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy');
require('hardhat-deploy-ethers');
require('hardhat-contract-sizer');
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.4",
        optimizer: {
          enabled: true,
          runs: 10,
        },
      },
      ]
    },
    networks: {
      hardhat: {
        chainId: 31337,
        forking: {
          enabled: true,
          url: 'https://rpc2.bahamut.io',
          // blockNumber: 2010107,
        },
        mining: {
          auto: true,
          interval: 0
        },
        allowUnlimitedContractSize: true
      },
      // 'bsc-testnet': {
      //   chainId: 97,
      //   gasMultiplier: 1,
      //   accounts: [process.env.USER1_PVT_KEY],
      //   url: 'https://bsc-testnet.public.blastapi.io',
      // },
      bsc: {
        chainId: 56,
        // accounts: [process.env.PRIVATE_KEY],
        url: "https://rpc.ankr.com/bsc",
      },
      bahamut: {
        chainId: 5165,
        accounts: [process.env.USER5_PVT_KEY],
        url: "https://5165.rpc.thirdweb.com",
      },
      'sepholia': {
        chainId: 11155111,
        accounts: [process.env.USER1_PVT_KEY, process.env.USER2_PVT_KEY, process.env.USER3_PVT_KEY],
        url: "https://ethereum-sepolia.publicnode.com",
      },
      ocean: {
      	chainId: 4058,
      	accounts: [process.env.USER1_PVT_KEY, process.env.USER2_PVT_KEY, process.env.USER3_PVT_KEY],
      	url: 'https://rpc1.ocean.bahamut.io',
      	tags: ["hardhat"],
      },
      avalanch: {
      	chainId: 43113,
      	accounts: [process.env.USER1_PVT_KEY],
      	url: 'https://api.avax-test.network/ext/C/rpc',
      	tags: ["hardhat"],
      },
    },
    etherscan: {
      apiKey: {
        bahamut: process.env.API_KEY
      },
      customChains: [
        {
          network: "ocean",
          chainId: 4058,
          urls: {
            apiURL: "https://ocean.ftnscan.com/api",
            browserURL: "https://ocean.ftnscan.com/"
          }
        },
        {
          network: "bahamut",
          chainId: 5165,
          urls: {
            apiURL: "https://api.ftnscan.com/api",
            browserURL: "https://ftnscan.com/"
          }
        }
      ]
    },
    mocha: {
      timeout: 100000,
      forbidOnly: false,
    },

    namedAccounts: {
      deployer: {
        default: 0,
      },
      owner: {
        default: 1,
      },
      subOwner: {
        default: 2,
      },
      consumer: {
        default: 5,
      },
      user1: {
        default: 6,
      },
      user2: {
        default: 7,
      },
      user3: {
        default: 8,
      },
      user4: {
        default: 9,
      },
      user5: {
        default: 10,
      },
      user6: {
        default: 11,
      },
      oracle: {
        default: 12,
      },
      random: {
        default: 13,
      },
    },

    contractSizer: {
      alphaSort: false,
      runOnCompile: false,
      disambiguatePaths: false,
    },

    gasReporter: {
      currency: 'AMD',
      token: 'FTN',
      gasPrice: 30,
      enabled: false,
      rst: true,
      coinmarketcap: '36ea2dee-5a73-45cf-82e8-ab9d066f01f3'
    },
};
