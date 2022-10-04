const { deterministicPartitionKey } = require("./dpk");
const { deterministicPartitionKey: oldDeterministicPartitionKey } = require("./dpk.old");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("oldDeterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = oldDeterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});


describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when 'false' is given", () => {
    const trivialKey = deterministicPartitionKey(false);
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when 'null' is given", () => {
    const trivialKey = deterministicPartitionKey(null);
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when '0' is given", () => {
    const trivialKey = deterministicPartitionKey(0);
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when '0' as string is given", () => {
    const expected = '5ae8f97ede3b9ae9f4b496c125d45d34edf13ce2f9e29c1c085ae0f499820173b86d731c4ca453d2e119b4ff63d3afd3ed5fdb9753fe222ef300d4f465f522ea'
    const trivialKey = deterministicPartitionKey('0');
    expect(trivialKey).toBe(expected);
  });
});

// TESTTING AGAINST THE OLD FUNCTION

describe("deterministicPartitionKey", () => {
  it("Returns same output as oldDeterministicPartitionKey when no input is given", () => {
    const trivialKey = deterministicPartitionKey();
    const oldTrivialKey = oldDeterministicPartitionKey();
    expect(trivialKey).toBe(oldTrivialKey);
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns same output as oldDeterministicPartitionKey when 0 is given", () => {
    const trivialKey = deterministicPartitionKey(0);
    const oldTrivialKey = oldDeterministicPartitionKey(0);
    expect(trivialKey).toBe(oldTrivialKey);
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns same output as oldDeterministicPartitionKey when '0' is given", () => {
    const trivialKey = deterministicPartitionKey('0');
    const oldTrivialKey = oldDeterministicPartitionKey('0');
    expect(trivialKey).toBe(oldTrivialKey);
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns same output as oldDeterministicPartitionKey when false is given", () => {
    const trivialKey = deterministicPartitionKey(false);
    const oldTrivialKey = oldDeterministicPartitionKey(false);
    expect(trivialKey).toBe(oldTrivialKey);
  });
});
describe("deterministicPartitionKey", () => {
  it("Returns same output as oldDeterministicPartitionKey when true is given", () => {
    const trivialKey = deterministicPartitionKey(true);
    const oldTrivialKey = oldDeterministicPartitionKey(true);
    expect(trivialKey).toBe(oldTrivialKey);
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns same output as oldDeterministicPartitionKey when 'hello world' is given", () => {
    const trivialKey = deterministicPartitionKey('hello world');
    const oldTrivialKey = oldDeterministicPartitionKey('hello world');
    expect(trivialKey).toBe(oldTrivialKey);
  });
});

describe("deterministicPartitionKey", () => {
  const event  = {
    partitionKey: "hello world"
  }

  it("Returns same output as oldDeterministicPartitionKey when event object is given", () => {
    const trivialKey = deterministicPartitionKey(event);
    const oldTrivialKey = oldDeterministicPartitionKey(event);
    expect(trivialKey).toBe(oldTrivialKey);
  });
});

describe("deterministicPartitionKey", () => {
  const event = JSON.stringify({  partitionKey: "hello world" })
  it("Returns same output as oldDeterministicPartitionKey when event json  is given", () => {
    const trivialKey = deterministicPartitionKey(event);
    const oldTrivialKey = oldDeterministicPartitionKey(event);
    expect(trivialKey).toBe(oldTrivialKey);
  });
});