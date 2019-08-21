/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import { Fragment } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { colors, spaces, fontFamilies, fontSizes } from "../../utils/presets"

const iconAnimation = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`

function Navigation({ children, options }) {
  return (
    <nav
      css={{
        height: `100%`,
        width: `100%`,
      }}
    >
      {options ? (
        <Navigation.List>
          {options.map(option => {
            const Icon = option.svg && option.svg
            return (
              <Fragment>
                <Navigation.Item
                  active={option.active && option.active}
                  onClick={option.onClick && option.onClick}
                  to={option.to && option.to}
                >
                  {Icon && option.active && <Icon />}
                  {option.label && option.label}
                </Navigation.Item>
                {option.subItems && (
                  <Navigation.List
                    variant="SUB"
                    open={option.active}
                    totalOptions={option.subItems.length}
                  >
                    {option.subItems.map(subItem => (
                      <Navigation.SubItem
                        active={subItem.active && subItem.active}
                        onClick={subItem.onClick && subItem.onClick}
                        to={subItem.to && subItem.to}
                      >
                        {subItem.label && subItem.label}
                      </Navigation.SubItem>
                    ))}
                  </Navigation.List>
                )}
              </Fragment>
            )
          })}
        </Navigation.List>
      ) : (
        { children }
      )}
    </nav>
  )
}

Navigation.propTypes = {
  children: PropTypes.node,
  options: PropTypes.array,
}

Navigation.List = ({
  children,
  variant = `FULL`,
  open = true,
  totalOptions = 1,
}) => {
  const variantStyles = {
    SUB: {
      transition: `all 0.5s ease-in-out`,
      overflow: `hidden`,
      height: open ? `calc(${totalOptions} * 2.5rem)` : `0`,
    },
  }

  return (
    <ul
      css={{
        paddingInlineStart: `0`,
        ...variantStyles[variant],
      }}
    >
      {children}
    </ul>
  )
}

Navigation.List.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf([`FULL`, `SUB`]),
  totalOptions: PropTypes.number,
  open: PropTypes.bool,
}

const baseItemStyles = active => {
  return {
    fontFamily: fontFamilies.headerFontFamily,
    fontSize: fontSizes.s,
    color: active ? colors.purple[50] : colors.grey[60],
    listStyle: `none`,
  }
}

Navigation.Item = ({ active, onClick, to, children }) => (
  <li
    css={{
      ...baseItemStyles(active),
      lineHeight: `1.375rem`,
      padding: `${spaces.m} 0`,
      "first-of-type": {
        paddingTop: `0`,
      },
      "last-of-type": {
        paddingBottom: `0`,
      },
      svg: {
        verticalAlign: `middle`,
        position: `absolute`,
        left: `30%`,
        animation: `${iconAnimation} 0.6s linear`,
      },
    }}
  >
    {to ? (
      <Link
        to={to}
        onClick={onClick}
        css={{
          color: `inherit`,
          textDecoration: `none`,
        }}
      >
        {children}
      </Link>
    ) : (
      children
    )}
  </li>
)

Navigation.Item.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
}

Navigation.SubItem = ({ active, onClick, to, children }) => (
  <li
    css={{
      ...baseItemStyles(active),
      lineHeight: `2.5rem`,
      padding: `0 ${spaces.m}`,
      borderLeft: active
        ? `1px solid ${colors.purple[50]}`
        : `1px solid ${colors.grey[30]}`,
    }}
  >
    {to ? (
      <Link
        to={to}
        onClick={onClick}
        css={{
          color: `inherit`,
          lineHeight: `1.375rem`,
          textDecoration: `none`,
          listStyle: `none`,
        }}
      >
        {children}
      </Link>
    ) : (
      children
    )}
  </li>
)

Navigation.SubItem.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
}

export default Navigation
