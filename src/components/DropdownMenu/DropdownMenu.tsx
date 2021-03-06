/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import {
  Menu,
  MenuProps,
  MenuPopover,
  MenuPopoverProps,
  MenuList,
  MenuListProps,
  MenuButton,
  MenuButtonProps,
  MenuItems,
  MenuItemsProps,
  MenuItem,
  MenuItemProps,
  MenuLink,
  MenuLinkProps,
  useMenuButtonContext,
} from "@reach/menu-button"
import { MdKeyboardArrowDown } from "react-icons/md"
import {
  dropdownCss,
  dropdownButtonCss,
  menuItemCss,
  dropdownButtonIconCss,
  dropdownSizeCss,
} from "./DropdownMenu.styles"
import { DisableReachStyleCheck } from "../../utils/helpers/DisableReachStyleCheck"
import { ThemeCss } from "../../theme"

export type DropdownMenuProps = MenuProps

export const DropdownMenu: React.FC<DropdownMenuProps> = props => (
  <React.Fragment>
    <DisableReachStyleCheck reachComponent="menu-button" />
    <Menu {...props} />
  </React.Fragment>
)

export type DropdownMenuButtonProps = MenuButtonProps

export const DropdownMenuButton: React.FC<DropdownMenuButtonProps> = props => (
  <MenuButton {...props} />
)

export type DropdownMenuButtonStyledProps = DropdownMenuButtonProps

export const DropdownMenuButtonStyled: React.FC<DropdownMenuButtonProps> = ({
  children,
  ...props
}) => (
  <DropdownMenuButton {...props} css={dropdownButtonCss}>
    {children}
    <MdKeyboardArrowDown css={dropdownButtonIconCss} />
  </DropdownMenuButton>
)

export type DropdownMenuSize = `AUTO` | `MAX_CONTENT` | `LEGACY`

export type DropdownMenuItemsProps = MenuListProps & {
  size?: DropdownMenuSize
}

export const DropdownMenuItems: React.FC<DropdownMenuItemsProps> = ({
  size = `LEGACY`,
  ...rest
}) => {
  const finalCss: ThemeCss = theme => [
    dropdownCss(theme),
    dropdownSizeCss[size](theme),
  ]
  return <MenuList {...rest} css={finalCss}></MenuList>
}

export type DropdownMenuItemsLowLevelProps = MenuItemsProps & {
  size?: DropdownMenuSize
}

export const DropdownMenuItemsLowLevel: React.FC<DropdownMenuItemsLowLevelProps> = ({
  size = `LEGACY`,
  ...rest
}) => {
  const finalCss: ThemeCss = theme => [
    dropdownCss(theme),
    dropdownSizeCss[size](theme),
  ]
  return <MenuItems {...rest} css={finalCss}></MenuItems>
}

export type DropdownMenuItemProps = MenuItemProps

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = props => (
  <MenuItem {...props} css={menuItemCss} />
)

export type DropdownMenuLinkProps = import("@reach/utils").PropsWithAs<
  "a",
  MenuLinkProps
>

export const DropdownMenuLink = React.forwardRef<
  HTMLAnchorElement,
  DropdownMenuLinkProps
>(function DropdownMenuLink(props, ref) {
  return <MenuLink ref={ref} {...props} css={menuItemCss} />
})

export type DropdownMenuPopoverProps = MenuPopoverProps

export function DropdownMenuPopover(props: DropdownMenuPopoverProps) {
  return <MenuPopover {...props} />
}

export function useDropdownMenuContext() {
  return useMenuButtonContext()
}
