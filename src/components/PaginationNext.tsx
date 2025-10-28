import React, { FC, useMemo, useContext, MouseEvent } from "react"
import { Button, ButtonProps } from "@chakra-ui/react"

// lib
import { PaginationContext } from "../lib/providers/PaginationProvider"

export const PaginationNext: FC<ButtonProps> = ({
  children,
  disabled: disabledProp,
  ...buttonProps
}) => {
  // provider
  const { actions, state } = useContext(PaginationContext)
  const { changePage } = actions
  const { currentPage, pagesCount, isDisabled: isDisabledGlobal } = state

  // memos
  const isLast = useMemo(
    () => currentPage > pagesCount - 1,
    [currentPage, pagesCount],
  )
  const isDisabled = useMemo(
    () => isLast || (disabledProp ?? isDisabledGlobal),
    [isLast, disabledProp, isDisabledGlobal],
  )
  const allProps = useMemo(
    () => ({
      ...buttonProps,
      disabled: isDisabled,
    }),
    [buttonProps, isDisabled],
  )

  // methods
  const getNextProps = ({
    onClick,
    disabled,
    ...props
  }: ButtonProps): ButtonProps => ({
    ...props,
    "aria-label": "Next page",
    "aria-disabled": disabled,
    disabled,
    onClick: (event: MouseEvent<HTMLButtonElement>) => {
      if (!disabled) {
        onClick?.(event)
      }

      handleNextClick()
    },
  })

  // handlers
  const handleNextClick = (): void => {
    if (!isLast) changePage(currentPage + 1)
  }

  return (
    <Button className="pagination-next" {...getNextProps(allProps)}>
      {children}
    </Button>
  )
}
