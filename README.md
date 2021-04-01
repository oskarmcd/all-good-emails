# Pretty good email validator 👌 (with TLDs)

This should hopefully solve your problems if you also want to validate an email and check if the TLD is valid, not just the general email pattern.

Keep your emails all good 👌

## Installation

Install with [npm](https://www.npmjs.com/):

```bash
npm install all-good-emails
```

## Usage
```js
import validate from "all-good-emails"

validate("jane@doe.io") // true
validate("jane@io") // false
validate("jane@doe.oi") // false
```