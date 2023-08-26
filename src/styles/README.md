# `/styles`

Styles are written fully in TypeScript using
[`@vanilla-extract/css`](https://vanilla-extract.style/).

Ideally try to order declarations according to
[`idiomatic-css`](https://github.com/necolas/idiomatic-css#declaration-order) principles.

## Structure

| Directory   | Description                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------- |
| `/atomic`   | Utility classes ([Atomic CSS](https://antfu.me/posts/reimagine-atomic-css))                   |
| `/global`   | Global and preflight styles                                                                   |
| `/internal` | Helper functions for generating styles, etc. (not meant to be used outside of this directory) |
