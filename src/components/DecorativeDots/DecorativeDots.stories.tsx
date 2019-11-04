import React from "react"

import { storiesOf } from "@storybook/react"
import { number } from "@storybook/addon-knobs"

import { StoryUtils } from "../../utils/storybook"
import DecorativeDots from "./DecorativeDots"
import README from "./README.md"

storiesOf(`DecorativeDots`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
      includePropTables: [DecorativeDots],
    },
  })
  .add(`Default`, () => (
      <StoryUtils.Container>
        <DecorativeDots
          width={number(`width`, 300)}
          height={number(`height`, 200)}
          dotSize={number(`dotSize`, 20, {
            range: true,
            min: 4,
            max: 40,
            step: 1,
          })}
          angle={number(`angle`, 0, { range: true, min: 0, max: 360, step: 1 })}
          fadeStrength={number(`fadeStrength`, 0.25, {
            range: true,
            min: 0,
            max: 0.5,
            step: 0.01,
          })}
        />
      </StoryUtils.Container>
    ))
