import dotenv from 'dotenv';
dotenv.config();

import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("MYSECRET_KEY");

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);