import React, { ReactNode } from "react"
import { Noto_Color_Emoji } from "next/font/google"

const notoColorEmoji = Noto_Color_Emoji({
  weight: ["400"],
  subsets: ["emoji"],
  display: 'swap',
  fallback: [
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji',
    'Android Emoji',
    'EmojiSymbols'
  ],
})

type Props = {
  className?: string
  children?: ReactNode
}

export const Emoji = ({ className, children }: Props) => {
  return (
    <span className={className} css={[notoColorEmoji.style]}>
      {children}
    </span>
  )
}
