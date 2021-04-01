# Pretty good email validator (with TLDs)

This should hopefully solve your problems if you also want to validate an email and check if the TLD is valid, not just the general email pattern.

## Usage
```
import { validate } from "email-tld-validator"

validate("jane@doe.io") // true
validate("jane@doe.oi") // false
```