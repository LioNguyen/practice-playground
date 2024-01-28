# CLOSURE

- [Closure technique in Javascript](../../../../../playground-javascript/techniques//closure//README.md)

## Notes

- For `throttle`, `let shouldWait = false` must be put outside component, when combining `throttle` with `useState()`. If not, when `useState` is executed, component will re-render & `shouldWait` will be reset
