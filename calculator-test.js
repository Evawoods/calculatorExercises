
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 30000,
    years: 7,
    rate: 3.1
  };
  expect(calculateMonthlyPayment(values)).toEqual('397.75')
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 30525,
    years: 5,
    rate: 6.9
  };
  expect(calculateMonthlyPayment(values)).toEqual('602.99')
});

/// etc
it("should handle high interest rates", function() {
  const values = {
    amount: 1260,
    years: 10,
    rate: 70
  };
  expect(calculateMonthlyPayment(values)).toEqual('73.58')
});

it("should handle long loan terms", function() {
  const values ={
    amount: 1260,
    years: 40,
    rate: 2.1
  };
  expect(calculateMonthlyPayment(values)).toEqual('3.88')
});