import { valid } from "../index";

test("oskar@mcdermott.com is valid", () => {
  expect(valid("oskar@mcdermott.com")).toBe(true);
});

test("oskar@mcdermott.co.uk is valid", () => {
  expect(valid("oskar@mcdermott.co.uk")).toBe(true);
});

test("oskar@ mcdermott.co.uk is invalid", () => {
  expect(valid("oskar@ mcdermott.co.uk")).toBe(false);
});

test("OSKARMCDERMOTT@GMAIL.COM is valid", () => {
  expect(valid("OSKARMCDERMOTT@GMAIL.COM")).toBe(true);
});

test("OSKARMCDERMOTTGMAIL.COM is invalid", () => {
  expect(valid("OSKARMCDERMOTTGMAIL.COM")).toBe(false);
});

test("OSKARMCDERMOTT@GMAIL.VERMÖGENSBERATER is valid", () => {
  expect(valid("OSKARMCDERMOTT@GMAIL.VERMÖGENSBERATER")).toBe(true);
});

test("OSKARMCDERMOTT@GMAIL.政府 is valid", () => {
  expect(valid("OSKARMCDERMOTT@GMAIL.政府")).toBe(true);
});
