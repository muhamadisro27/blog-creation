import { FC, useState } from "react"
import Typography from "@/components/atoms/typography"

type TextToggleProps = {
  text: string | null
  maxLength?: number
}

const TextToggle: FC<TextToggleProps> = ({ text, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  if (!text)
    return (
      <Typography className="italic" as="span">
        —
      </Typography>
    )

  const shouldTruncate = text.length > maxLength
  const displayText =
    isExpanded || !shouldTruncate ? text : text.slice(0, maxLength) + "..."

  return (
    <Typography as="span" className="text-sm break-words">
      {displayText}
      {shouldTruncate && (
        <Typography
          className="text-xs pt-1 hover:underline cursor-pointer dark:text-gray-400 hover:dark:text-gray-300 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show less" : "Show more"}
        </Typography>
      )}
    </Typography>
  )
}

export default TextToggle
