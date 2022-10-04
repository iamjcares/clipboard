const crypto = require("crypto");
const {deterministicPartitionKey} = require("./dpk");

console.log(deterministicPartitionKey(true));

let candidate = crypto.createHash("sha3-512").update("e1ae35beb68c48c36f3d47bbac95bd26ed299b74bab293b020572c7145762cafe2c61a1419c2e05e67208f1e7f28d05b3593b61daf4de23d2e4abca82f320fda").digest("hex");

console.log(candidate, candidate.length);