require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  paths: {
    artifacts: "./artifacts",
  },
};
