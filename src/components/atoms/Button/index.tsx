"use client"

import type React from "react"
import { ButtonHTMLAttributes, forwardRef, MouseEvent, ReactNode } from "react"

import clsx from "clsx"

import styles from "./styles.module.css"

interface BaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: "primary" | "secondary" | "transparent" | "text" | "link"
  accent?: "light" | "dark"
  rounded?: boolean
  size?: "small" | "medium" | "large"
  loading?: boolean
  disabled?: boolean
  block?: boolean
  icon?: ReactNode
  iconRight?: boolean
  textWeight?: "normal" | "demi" | "bold"
  fullWidth?: boolean
  fs?: "small" | "medium" | "large"
}

// Conditional types for variant and url
interface LinkVariantProps {
  variant: "link"
  url: string // make url required when variant is 'link'
  disabled?: never // disable should not be used with link variant
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

interface NonLinkVariantProps {
  variant?: Exclude<BaseProps["variant"], "link">
  url?: never
  onClick?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export type ButtonProps = BaseProps & (LinkVariantProps | NonLinkVariantProps)

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant,
      accent,
      rounded,
      size,
      loading,
      disabled,
      block,
      icon,
      iconRight,
      textWeight,
      fullWidth,
      fs,
      url,
      onClick,
      ...attrs
    },
    ref
  ) => {
    const ariaAttrs = {
      "aria-busy": loading ? true : undefined,
      "aria-disabled": disabled ? true : undefined,
      ...(attrs["aria-label"] ? { "aria-label": attrs["aria-label"] } : {}),
    }

    if (variant === "link" && url) {
      return (
        <a
          {...ariaAttrs}
          href={url}
          //TODO: add support for icon, iconRight, loading, textWeight, block, variant, accent, size, disabled, fullWidth, fs, rounded
          className={clsx(styles.button, className)}
          rel="noopener noreferrer"
          target="_blank"
          onClick={onClick}
        >
          {children}
        </a>
      )
    }

    return (
      <button
        {...attrs}
        {...ariaAttrs}
        //TODO: add support for icon, iconRight, loading, textWeight, block, variant, accent, size, disabled, fullWidth, fs, rounded
        className={clsx(styles.button, className)}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)

export default Button

Button.displayName = "Button"
