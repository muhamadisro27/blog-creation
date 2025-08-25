import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/molecules/breadcrumb"
import { ChevronRightIcon } from "lucide-react"
import { ComponentPropsWithoutRef, FC } from "react"

type BreadcrumbArticleProps = {
  lastItem?: string
} & ComponentPropsWithoutRef<typeof Breadcrumb>

const BreadcrumbArticle: FC<BreadcrumbArticleProps> = ({ lastItem, ...props }) => {
  return (
    <Breadcrumb {...props}>
      <BreadcrumbList>
        <BreadcrumbItem className="text-gray-800 dark:text-gray-300 ">
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRightIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem className="text-gray-800 dark:text-gray-300 ">
          <BreadcrumbLink asChild>
            <Link href="/blog">Blog</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {Boolean(lastItem) && (
          <>
            <BreadcrumbSeparator>
              <ChevronRightIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem className="text-gray-400 dark:text-gray-400 truncate">{lastItem}</BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadcrumbArticle
