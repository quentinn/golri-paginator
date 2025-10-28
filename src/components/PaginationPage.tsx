import React, { FC, ReactElement, MouseEvent, useMemo } from "react"
import { Button, Flex, ButtonProps } from "@chakra-ui/react"

// lib
import { SEPARATORS } from "../lib/constants"
import { usePaginationContext } from "../lib/hooks/usePaginationContext"

// components
import FiChevronLeft from "./FiChevronLeft"
import FiChevronRight from "./FiChevronRight"
import { PaginationSeparator } from "./PaginationSeparator"

export type PageProps = {
  page: number
  separator?: ReactElement<ButtonProps>
  _current?: ButtonProps
}

// constants
const buttonStyles: ButtonProps = {
  minW: "auto",
  px: 1,
  cursor: "pointer",
}

export const PaginationPage: FC<PageProps & ButtonProps> = ({
  page,
  disabled: disabledProp,
  separator,
  _current = {},
  ...buttonProps
}) => {
  // provider
  const { actions, state } = usePaginationContext()
  const { changePage } = actions
  const { currentPage, isDisabled: isDisabledGlobal } = state

  // methods
  const getPageProps = ({
    onClick,
    disabled,
    ...props
  }: ButtonProps): ButtonProps => ({
    ...props,
    "aria-disabled": disabled,
    "aria-current": isCurrent,
    "aria-label": pageLabel,
    disabled,
    onClick: (event: MouseEvent<HTMLButtonElement>) => {
      if (!disabled) {
        onClick?.(event)
      }

      changePage(page)
    },
  })

  // memos
  const isCurrent = useMemo(() => currentPage === page, [currentPage, page])
  const isDisabled = useMemo(
    () => disabledProp ?? isDisabledGlobal,
    [isDisabledGlobal, disabledProp],
  )
  const isSeparatorDisabled = useMemo(
    () => separator?.props?.disabled ?? isDisabledGlobal,
    [isDisabledGlobal, separator?.props?.disabled],
  )
  const currentStyles = useMemo(
    () => (isCurrent ? _current : {}),
    [isCurrent, _current],
  )
  const isLeftSeparator = useMemo(() => page === SEPARATORS.left, [page])
  const isRightSeparator = useMemo(() => page === SEPARATORS.right, [page])
  const pageLabel = useMemo(
    () => (isCurrent ? `Current page, page ${page}` : `Go to page ${page}`),
    [isCurrent, page],
  )
  const allProps = useMemo(
    () => ({
      ...buttonStyles,
      ...buttonProps,
      ...currentStyles,
      disabled: isDisabled,
    }),
    [buttonProps, currentStyles, isDisabled],
  )

  if (isLeftSeparator) {
    return (
      <PaginationSeparator
        hoverIcon={FiChevronLeft}
        disabled={isSeparatorDisabled}
        separatorPosition="left"
        {...(separator?.props ?? {})}
      />
    )
  }

  if (isRightSeparator) {
    return (
      <PaginationSeparator
        hoverIcon={FiChevronRight}
        disabled={isSeparatorDisabled}
        separatorPosition="right"
        {...(separator?.props ?? {})}
      />
    )
  }

  return (
    <Flex as="li">
      <Button className="pagination-page" {...getPageProps(allProps)}>
        {page}
      </Button>
    </Flex>
  )
}
