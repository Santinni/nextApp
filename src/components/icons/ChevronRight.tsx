import * as React from "react"
import type { SVGProps } from "react"
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 5 9"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m0 1.5 3.352 3L0 7.5V9l5-4.498v-.004L0 0z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgChevronRight
