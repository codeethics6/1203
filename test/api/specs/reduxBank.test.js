const { request, expect } = require("../../../api.config");

describe("GET /api/transaction", function () {
  this.timeout(5000);
  it("returns all Bank accounts", async function () {
    const response = await request.get("/api/transaction");

    expect(response.status).to.eql(200);
    
  });
});

describe("POST /api/transaction", function () {
  it("Post transaction", async function () {
    const response = await request
      .post("/api/transaction")
      .send({"transactionType":"Deposit","amount":550,"accountId":1});

    expect(response.status).to.eql(200);

    
  });
});
