import { validate } from "../../src/v1/validate";

test("should be a cpf valid", function () {
    const isValid = validate("867.985.490-55")
    expect(isValid).toBeTruthy();
});

test("should validate a cpf with first digit equal zero", function () {
    const isValid = validate("802.209.960-08");
    expect(isValid).toBeTruthy();
});

test("should validate a cpf with second digit equal zero", function () {
    const isValid = validate("553.852.760-30");
    expect(isValid).toBeTruthy();
});

test("should not try to validate a cpf greater than 14 characters", function () {
    const isValid = validate("553.852.760-300");
    expect(isValid).toBeFalsy();
});

test("should not validate a cpf with the same characters", function () {
    const isValid = validate("111.111.111-11");
    expect(isValid).toBeFalsy();
});

test("should not validate a null cpf", function () {
    const isValid = validate(null);
    expect(isValid).toBeFalsy();
});

test("should not validate a undefined cpf", function () {
    const isValid = validate(undefined);
    expect(isValid).toBeFalsy();
});
