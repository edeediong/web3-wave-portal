const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account: ", deployer.address)
    console.log("Account balance: ", accountBalance.toString());

    const musicLoverFactory = await hre.ethers.getContractFactory("MusicLover"); // Compiles the contract
    const musicLover = await musicLoverFactory.deploy(); // creates a unique/fresh eth network for the contract everytime it's executed
    await musicLover.deployed(); // Wait till contract is deployed

    console.log("MusicLover address:", musicLover.address); // address of deployed contract
}

const runMain = async () => {
    try {
        await main();
        process.exit(0); // exit Node process without error
    } catch (error) {
        console.log(error);
        process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error 
    }
    // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
};

runMain();