import React, { FC, MouseEvent, useMemo } from "react"
import { Button, ButtonProps } from "@chakra-ui/react"

// lib
import { usePaginationContext } from "../lib/hooks/usePaginationContext"

export const PaginationPrevious: FC<ButtonProps> = ({
  children,
  disabled: disabledProp,
  ...buttonProps
}) => {
  // provider
  const { actions, state } = usePaginationContext()
  const { changePage } = actions

  const { currentPage, isDisabled: isDisabledGlobal } = state

  // memos
  const isFirst = useMemo(() => currentPage === 1, [currentPage])
  const isDisabled = useMemo(
    () => isFirst || (disabledProp ?? isDisabledGlobal),
    [isFirst, disabledProp, isDisabledGlobal],
  )
  const allProps = useMemo(
    () => ({
      ...buttonProps,
      disabled: isDisabled,
    }),
    [buttonProps, isDisabled],
  )

  // methods
  const getPreviousProps = ({
    onClick,
    disabled,
    ...props
  }: ButtonProps): ButtonProps => ({
    ...props,
    "aria-label": "Previous page",
    "aria-disabled": disabled,
    disabled,
    onClick: (event: MouseEvent<HTMLButtonElement>) => {
      if (!disabled) {
        onClick?.(event)
      }

      handlePreviousClick()
    },
  })

  // handlers
  const handlePreviousClick = (): void => {
    if (!isFirst) changePage(currentPage - 1)
  }

  return (
    <Button className="pagination-previous" {...getPreviousProps(allProps)}>
      {children}
    </Button>
  )
}
