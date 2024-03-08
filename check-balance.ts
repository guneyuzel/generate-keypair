import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("97JqMniYH2as576Z35rZUqyBXNj2cNGh1wxg3sqxaGZb");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

if (PublicKey.isOnCurve(publicKey.toBytes()) == false) {
    console.log("Invalid Address");
} else {
  console.log(
    `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
  );
}
