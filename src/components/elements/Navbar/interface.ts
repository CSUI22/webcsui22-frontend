export interface NavbarStateProps {
  isCollapsed: boolean
}

export interface NavbarBodyProps extends NavbarStateProps {
  handleCollapse: () => void
}
