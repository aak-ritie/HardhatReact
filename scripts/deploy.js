const hre = require("hardhat");

async function main() {
  const Ticket = await hre.ethers.getContractFactory("Tickets");
  const ticket = await Ticket.deploy();
  await ticket.waitForDeployment();
  console.log(`Ticket deployed to:", ${ticket.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
