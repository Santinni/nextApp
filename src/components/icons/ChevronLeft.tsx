import * as React from "react"
import type { SVGProps } from "react"
const SvgChevronLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5 7.5-3.351-3L5 1.5V0L0 4.498v.004L5 9z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgChevronLeft
