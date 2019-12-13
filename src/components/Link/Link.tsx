/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby"
import { getLinkStyles, LinkVariant } from "../../theme/styles/link"
import { BaseAnchorProps } from "../BaseAnchor"

export type LinkProps = (GatsbyLinkProps<any> | BaseAnchorProps) & {
  variant?: LinkVariant;
}

function Link(props: GatsbyLinkProps<any>): JSX.Element
function Link(props: BaseAnchorProps): JSX.Element
function Link({ children, target, variant, ...rest }: LinkProps) {
  const commonProps = {
    css: getLinkStyles(variant),
  }

  if (isGatsbyLink(rest)) {
    return (
      <GatsbyLink {...rest} ref={undefined}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a
      target={target}
      rel={target === `_blank` ? `noopener noreferrer` : ``}
      {...commonProps}
      {...rest}
    >
      {children}
    </a>
  )
}

export default Link

/**
 * An awesome tidbit from React TypeScript Cheatsheet
 * https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/blob/master/ADVANCED.md#typing-a-component-that-accepts-different-props
 */
function isGatsbyLink(props: LinkProps): props is GatsbyLinkProps<any> {
  return "to" in props
}
