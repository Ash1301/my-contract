require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const Private_Key = "084bb49cf1a90ed1a441ee8de3757200a070e34f1e924cbd6634bc61135602d2"

module.exports = {
  solidity: "0.8.0",
  networks: {
  	goerli: {
  		url: `https://flashy-lingering-liquid.ethereum-goerli.discover.quiknode.pro/0da012af4256bc3b5fdb804bed279998e3cd651a/`,
  		accounts: [Private_Key]
  	}
  }
};