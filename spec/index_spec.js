var validate = require('../');

describe("IP", function() {
  it("valid", function() {
    expect(validate("192.168.0.0/24", "192.168.0.5")).toBe(true);
    expect(validate("192.168.0.0/24", "192.168.0.255")).toBe(true);
    expect(validate("192.168.0.0/28", "192.168.0.1")).toBe(true);
    expect(validate("192.168.0.0/28", "192.168.0.15")).toBe(true);
  });
  it("not valid", function() {
    expect(validate("192.168.0.0/24", "192.168.1.5")).toBe(false);
    expect(validate("192.168.0.0/24", "192.168.1.255")).toBe(false);
    expect(validate("192.168.0.0/28", "192.168.0.16")).toBe(false);
    expect(validate("192.168.0.0/28", "192.168.0.32")).toBe(false);
  });
});
