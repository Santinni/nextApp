import * as React from "react"
import type { SVGProps } from "react"
const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 9 5"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m1.5 5 3-3.351L7.5 5H9L4.502 0h-.004L0 5z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgChevronUp
