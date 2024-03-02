"use client"

import { ReactNode } from "react"

import clsx from "clsx"

import styles from "./styles.module.css"

interface ButtonProps {
  onClick?: () => void
  className?: string
  children?: ReactNode
}

const Button = (props: ButtonProps) => {
  const { onClick, className, children } = props
  return (
    <button
      className={clsx(styles.button, className)}
      onClick={() => onClick?.()}
    >
      {children}
    </button>
  )
}

export default Button
