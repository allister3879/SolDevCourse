import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
  throw new Error("Provide a public key to check the balance of!");
}

let publicKey;
try {
  publicKey = new PublicKey(suppliedPublicKey);
} catch (error) {
  console.error("Invalid wallet address provided.");
  process.exit(1);
}

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

let balanceInLamports;
try {
  balanceInLamports = await connection.getBalance(publicKey);
} catch (error) {
  console.error("Error fetching balance:", error.message);
  process.exit(1);
}

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL} SOL!`
);
