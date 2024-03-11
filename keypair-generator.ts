import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`✅ Finished!`);

/*
First Wallet: 97JqMniYH2as576Z35rZUqyBXNj2cNGh1wxg3sqxaGZb
Second Wallet: Hjb9VMezad78CEHr2PvxCVezX3VBfAgPouuhkhVCb5mB
*/