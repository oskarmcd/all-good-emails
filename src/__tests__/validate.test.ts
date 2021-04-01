import validate from "../index";

test("oskar@mcdermott.com is valid", () => {
  expect(validate("oskar@mcdermott.com")).toBe(true);
});

test("oskar@mcdermott.co.uk is valid", () => {
  expect(validate("oskar@mcdermott.co.uk")).toBe(true);
});

test("oskar@ mcdermott.co.uk is invalid", () => {
  expect(validate("oskar@ mcdermott.co.uk")).toBe(false);
});

test("OSKARMCDERMOTT@GMAIL.COM is valid", () => {
  expect(validate("OSKARMCDERMOTT@GMAIL.COM")).toBe(true);
});

test("OSKARMCDERMOTTGMAIL.COM is invalid", () => {
  expect(validate("OSKARMCDERMOTTGMAIL.COM")).toBe(false);
});

test("OSKARMCDERMOTT@GMAIL.VERMÖGENSBERATER is valid", () => {
  expect(validate("OSKARMCDERMOTT@GMAIL.VERMÖGENSBERATER")).toBe(true);
});

test("OSKARMCDERMOTT@GMAIL.政府 is valid", () => {
  expect(validate("OSKARMCDERMOTT@GMAIL.政府")).toBe(true);
});

test("oskar.mcdermott@gmail.com is valid", () => {
  expect(validate("oskar.mcdermott@gmail.com")).toBe(true);
});

test("name@fullname.xyz is valid", () => {
  expect(validate("name@fullname.xyz")).toBe(true);
});

test("name+service@fullname.xyz is valid", () => {
  expect(validate("name+service@fullname.xyz")).toBe(true);
});
