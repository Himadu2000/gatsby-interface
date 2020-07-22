/** @jsx jsx */
import { jsx, Interpolation } from "@emotion/core"
import { BaseHeading, BaseHeadingProps } from "../BaseHeading"
import { showCustomCssDeprecationMessage } from "../../utils/maintenance/deprecationMessages"
import { ThemeCss, Theme } from "../../theme"
import { HeadingTone, HeadingVariant } from "./types"
import { useHeadingLevel } from "../AreaWithHeading"

const baseCss: ThemeCss = theme => ({
  fontFamily: theme.fonts.heading,
  margin: 0,
  lineHeight: theme.lineHeights.heading, // Ask Flo about this
})

const modifiedCss: (variant: HeadingVariant, tone: HeadingTone) => ThemeCss = (
  variant,
  tone
) => theme => [
  {
    color: theme.tones[tone].text,
  },
  variant === `PRIMARY` && {
    fontWeight: theme.fontWeights.bold,
  },
  variant === `EMPHASIZED` && {
    fontWeight: theme.fontWeights.extraBold,
  },
  variant === `LIGHT` && {
    fontWeight: 100,
    textTransform: `uppercase`,
  },
]

export type HeadingProps = BaseHeadingProps & {
  tone?: HeadingTone
  variant?: HeadingVariant
  customCss?: Interpolation
}

export function Heading({
  tone = `NEUTRAL`,
  variant = `PRIMARY`,
  as = undefined,
  customCss,
  ...rest
}: HeadingProps) {
  const parentHeadingLevel = useHeadingLevel()

  const tag =
    as ||
    (`h${Math.max(1, parentHeadingLevel)}` as Exclude<
      HeadingProps["as"],
      "span"
    >)
  showCustomCssDeprecationMessage(customCss)

  return (
    <BaseHeading
      as={tag}
      css={(theme: Theme) => [
        baseCss(theme),
        modifiedCss(variant, tone)(theme),
        customCss,
      ]}
      {...rest}
    />
  )
}
