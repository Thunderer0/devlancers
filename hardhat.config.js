// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   paths: {
//     artifacts: "./src/artifacts",
//   },
//   solidity: "0.8.17",
// };
// https://eth-goerli.alchemyapi.io/v2/u0eY6Jrn7GeGV1gMhJMc4QCKohvwZG1T

require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.9",
  networks: {
    ropsten: {
      url: "https://eth-goerli.alchemyapi.io/v2/u0eY6Jrn7GeGV1gMhJMc4QCKohvwZG1T",
      accounts: [
        "7d9b4f759b24688c93e1faad33f87fc3a5f829aafc5d80a3bd98b16c0db604dc",
      ],
    },
  },
};
