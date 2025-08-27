import Link from "next/link"
import {
  Breadcrumb as BreadcrumbShadCN,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/molecules/breadcrumb"
import { ChevronRightIcon } from "lucide-react"
import { ComponentPropsWithoutRef, FC } from "react"

type BreadcrumbProps = {
  lastItem?: string
} & ComponentPropsWithoutRef<typeof BreadcrumbShadCN>

const Breadcrumb: FC<BreadcrumbProps> = ({ lastItem, ...props }) => {
  return (
    <BreadcrumbShadCN {...props}>
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
            <BreadcrumbItem className="text-gray-400 dark:text-gray-400 line-clamp-1">{lastItem}</BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </BreadcrumbShadCN>
  )
}

export default Breadcrumb
