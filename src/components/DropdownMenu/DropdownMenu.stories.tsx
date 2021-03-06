/** @jsx jsx */
import { jsx } from "@emotion/core"
import { DecoratorFn } from "@storybook/react"
import {
  DropdownMenu,
  DropdownMenuButton,
  DropdownMenuPopover,
  DropdownMenuLink,
  DropdownMenuItem,
  DropdownMenuItems,
  DropdownMenuButtonStyled,
} from "./"
import React from "react"
import { radios, text } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import { Theme } from "../../theme"
import {
  disableAnimationsDecorator,
  radioKnobOptions,
} from "../../utils/storybook"
import { DropdownMenuSize } from "./DropdownMenu"
import { Notification } from "../Notification"

export default {
  title: `DropdownMenu`,
  component: DropdownMenu,
  subcomponents: {
    DropdownMenuButton,
    DropdownMenuButtonStyled,
    DropdownMenuPopover,
    DropdownMenuItems,
    DropdownMenuLink,
    DropdownMenuItem,
  },
  parameters: {
    componentSubtitle:
      "Dropdown Menus display a list of choices on a temporary surface.",
    layout: `padded`,
  },
  decorators: [
    story => (
      <div
        css={(theme: Theme) => ({
          width: "300px",
          [theme.mediaQueries.phablet]: {
            width: "700px",
          },
        })}
      >
        {story()}
      </div>
    ),
    disableAnimationsDecorator,
  ] as DecoratorFn[],
}

const SIZES: DropdownMenuSize[] = [`AUTO`, `MAX_CONTENT`, `LEGACY`]

export const Basic = () => {
  useOpenMenuOnMount()

  return (
    <div css={{ minHeight: "100vh" }}>
      <DropdownMenu>
        <DropdownMenuButton onKeyDown={console.log}>Actions</DropdownMenuButton>
        <DropdownMenuItems>
          <DropdownMenuItem onSelect={() => action("Select")("First")}>
            First
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => action("Select")("Second")}>
            Second
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => action("Select")("Third")}>
            Third
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => action("Select")("Fourth")}>
            Fourth
          </DropdownMenuItem>
        </DropdownMenuItems>
      </DropdownMenu>
    </div>
  )
}

const items: string[] = ["First", "Second", "Third"]

export const Sandbox = () => {
  return (
    <DropdownMenu>
      <DropdownMenuButton>{text("label", "Actions")}</DropdownMenuButton>
      <DropdownMenuItems
        size={radios(`size`, radioKnobOptions(SIZES), `LEGACY`)}
      >
        {items.map(item => (
          <DropdownMenuItem key={item} onSelect={() => action("Select")(item)}>
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuItems>
    </DropdownMenu>
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

// This is a hack to display multiple menus at the same time
function ForceOpenMenu() {
  const selfRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    let menu: HTMLElement | null = selfRef.current
    while (menu && !menu.hasAttribute("data-reach-menu")) {
      menu = menu.parentElement
    }

    if (menu) {
      menu.removeAttribute("hidden")
    }
  })

  return <div ref={selfRef} />
}

export const Sizes = () => {
  return (
    <React.Fragment>
      <Notification
        tone="WARNING"
        content="This story's only purpose is to demonstrate 'size' prop variants, which is why all menus are forced to be open"
      />
      <br />
      <div
        css={{
          display: `grid`,
          gridTemplateColumns: `1fr 1fr`,
          gridAutoRows: `200px`,
        }}
      >
        {SIZES.map(size => (
          <div key={size}>
            <DropdownMenu>
              <DropdownMenuButton>Size: {size}</DropdownMenuButton>
              <DropdownMenuItems size={size}>
                {items.map(item => (
                  <DropdownMenuItem
                    key={item}
                    onSelect={() => action("Select")(item)}
                  >
                    {item}
                  </DropdownMenuItem>
                ))}
                <ForceOpenMenu />
              </DropdownMenuItems>
            </DropdownMenu>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export const MenuLinks = () => {
  useOpenMenuOnMount()

  return (
    <div css={{ minHeight: "100vh" }}>
      <DropdownMenu>
        <DropdownMenuButton>{text("label", "Actions")}</DropdownMenuButton>
        <DropdownMenuItems>
          {["Ashalmawia", "Addadshashanammu", "Ularradallaku"].map(item => (
            <DropdownMenuLink
              href={`https://www.google.com/search?q=${item}`}
              target="_blank"
              rel="noreferrer noopener"
              key={item}
              onSelect={() => action("Select")(item)}
            >
              {item}
            </DropdownMenuLink>
          ))}
        </DropdownMenuItems>
      </DropdownMenu>
    </div>
  )
}

export const StyledButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuButtonStyled>Actions</DropdownMenuButtonStyled>
      <DropdownMenuItems>
        <DropdownMenuItem onSelect={() => action("Select")("First")}>
          First
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => action("Select")("Second")}>
          Second
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => action("Select")("Third")}>
          Third
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => action("Select")("Fourth")}>
          Fourth
        </DropdownMenuItem>
      </DropdownMenuItems>
    </DropdownMenu>
  )
}

export const WithComponentPlaceholder = () => {
  return (
    <DropdownMenu>
      <DropdownMenuButton>
        <p>This is a complex placeholder</p>
      </DropdownMenuButton>
      <DropdownMenuItems>
        <DropdownMenuItem onSelect={() => action("Select")("First")}>
          First
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => action("Select")("Second")}>
          Second
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => action("Select")("Third")}>
          Third
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => action("Select")("Fourth")}>
          Fourth
        </DropdownMenuItem>
      </DropdownMenuItems>
    </DropdownMenu>
  )
}

function useOpenMenuOnMount() {
  React.useEffect(() => {
    const button = document.querySelector<HTMLButtonElement>("button")
    if (button) {
      // Toggle menu for Chromatic snapshots
      button.focus()
      button.dispatchEvent(
        new KeyboardEvent("keydown", {
          bubbles: true,
          cancelable: true,
          key: "Enter",
          shiftKey: false,
        })
      )
    }
  }, [])
}
