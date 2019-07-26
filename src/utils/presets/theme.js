import { palette } from "./colors"
import { radius } from "./sizes"
import { fontSizes } from "./typography"
import { spaces } from "./spaces"

export const theme = {
  input: {
    border: `1px solid ${palette.grey[300]}`,
    borderRadius: radius.default,
    color: palette.grey[900],
    fontSize: fontSizes.s,
    height: `2.25rem`,
    padding: `0 ${spaces.s}`,
    width: `100%`,

    ":focus": {
      borderColor: palette.purple[400],
      boxShadow: `0 0 0 3px ${palette.purple[200]}`,
      outline: `0`,
      transition: `box-shadow 0.15s ease-in-out`,
    },
  },
}
