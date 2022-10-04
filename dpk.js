const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const DEFAULT_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let partitionKey;

  // If there is no parameter OR Null or 0 or ''
  if (!event) {
    return DEFAULT_PARTITION_KEY;
  }

  if (event.partitionKey) {
    partitionKey = typeof event.partitionKey !== "string" ? JSON.stringify(partitionKey) : event.partitionKey;

    if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
      partitionKey = crypto.createHash("sha3-512").update(partitionKey).digest("hex");
    }
  } else {
    const data = JSON.stringify(event);
    partitionKey = crypto.createHash("sha3-512").update(data).digest("hex");
  }

  return partitionKey;
};