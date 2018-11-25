// @flow

import { css } from "styled-components"

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
}

export const media: any = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args: any[]) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css.call(undefined, ...args)};
    }
  `

  return acc
}, {})
