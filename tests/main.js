import assert from "assert";
import '../imports/startup/server'

const tests = [
  {
    numbers: [1, 4, 6, 3, 2],
    index: 2
  },
  {
    numbers: [],
    index: -1
  },
  {
    numbers: [1, 2, 3],
    index: -1
  },
  {
    numbers: [1, 2, 0, 0, 3],
    index: 2
  },
  {
    numbers: [1],
    index: 0
  },
  {
    numbers: [0, 1],
    index: 1
  },
  {
    numbers: [1, 0],
    index: 0
  },
  {
    numbers: [1, 1, 1],
    index: 1
  },
  {
    numbers: [8, 1, 5, 4, 3, 2],
    index: 2
  },
  {
    numbers: [5, -1, 100, 6, -2],
    index: 2
  },
  {
    numbers: [-8, 5, -3, -5],
    index: 1
  }
]

const callMethod = (methodName, numbers) => {
  return new Promise((resolve, reject) => {
    Meteor.call(methodName, numbers, (error, result) => {
      if (error) {
        reject(error)
      }
      else {
        resolve(result)
      }
    })
  })
};

describe("goodbettertest", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "goodbettertest");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });

    it("testing findPivotIndex method", async () => {
      for (const { numbers, index } of tests) {
        let result = await callMethod('findPivotIndex', numbers)
        console.log(result, index)
        assert.strictEqual(result, index);
      }
    });
  }
});


