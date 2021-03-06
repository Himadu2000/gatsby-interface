/** @jsx jsx */
import { jsx } from "@emotion/core"
import { ThemeCss } from "../../theme"

const baseCss: ThemeCss = theme => ({
  display: `flex`,
  alignItems: `center`,
  background: theme.colors.teal[5],
  color: theme.colors.blackFade[70],
  fontSize: theme.fontSizes[1],
  fontFamily: theme.fonts.system,

  [`&:not(:first-child)`]: {
    borderTop: `1px solid ${theme.colors.teal[10]}`,
  },
})

const contentCss: ThemeCss = theme => ({
  paddingTop: theme.space[5],
  paddingBottom: theme.space[5],
  paddingLeft: theme.space[9],
  paddingRight: 0,
})

export type AnnouncementProps = Omit<JSX.IntrinsicElements["div"], "ref">

export function Announcement(props: AnnouncementProps) {
  return (
    <div css={baseCss} {...props}>
      <div css={contentCss}>{props.children}</div>
      <AnnouncementDecoration />
    </div>
  )
}

function AnnouncementDecoration() {
  return (
    <svg
      width="104"
      height="60"
      view-box="0 0 104 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.75">
        <circle
          opacity="0.5"
          cx="47.4997"
          cy="29.5"
          r="5.50048"
          fill="#FFDF37"
        />
        <ellipse
          opacity="0.25"
          cx="61.5005"
          cy="15.5002"
          rx="5.50048"
          ry="5.50048"
          fill="#BC027F"
        />
        <circle
          opacity="0.15"
          cx="5.49991"
          cy="15.4997"
          r="5.49991"
          fill="#159BF3"
        />
        <ellipse
          opacity="0.15"
          cx="47.4992"
          cy="1.49991"
          rx="5.49991"
          ry="5.49991"
          fill="#B17ACC"
        />
        <ellipse
          opacity="0.5"
          cx="61.4995"
          cy="57.5005"
          rx="5.50048"
          ry="5.50048"
          fill="#59C156"
        />
        <ellipse
          opacity="0.25"
          cx="47.4997"
          cy="43.4997"
          rx="5.50048"
          ry="5.50048"
          fill="#FB8400"
        />
        <circle
          opacity="0.15"
          cx="61.4995"
          cy="43.4997"
          r="5.50048"
          fill="#663399"
        />
        <ellipse
          opacity="0.25"
          cx="19.4997"
          cy="43.4992"
          rx="5.49991"
          ry="5.4999"
          fill="#05F7F4"
        />
        <circle
          opacity="0.25"
          cx="34"
          cy="29.5005"
          r="5.50048"
          fill="#FFD280"
        />
        <ellipse
          opacity="0.15"
          rx="5.49991"
          ry="5.49991"
          transform="matrix(1 -8.74227e-08 -8.74228e-08 -1 75.4999 57.5003)"
          fill="#159BF3"
        />
        <ellipse
          opacity="0.15"
          rx="5.50048"
          ry="5.50048"
          transform="matrix(1 -8.74229e-08 -8.74227e-08 -1 103.5 29.5002)"
          fill="#A1DA9E"
        />
        <ellipse
          opacity="0.25"
          rx="5.4999"
          ry="5.49991"
          transform="matrix(1 -8.74229e-08 -8.74227e-08 -1 89.4997 29.5008)"
          fill="#159BF3"
        />
        <ellipse
          opacity="0.25"
          rx="5.50048"
          ry="5.50048"
          transform="matrix(1 -8.74229e-08 -8.74227e-08 -1 103.5 43.5)"
          fill="#FB8400"
        />
      </g>
    </svg>
  )
}
