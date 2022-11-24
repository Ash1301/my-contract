
async function main() {

	const [deployer] = await ethers.getSigners();

	console.log(
	"Deploying contract with the account:",
	deployer.address
	);

	console.log("Account balance:", (await deployer.getBalance()).toString());

	const TheCont = await ethers.getContractFactory("TheCont");
	const contract = await TheCont.deploy();

	console.log("Contract adress:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
	console.error(error);
	process.exit(1);
  });