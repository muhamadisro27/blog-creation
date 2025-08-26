import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/molecules/card"
import { Badge } from "@/components/molecules/badge"
import Link from "next/link"
import Typography from "@/components/atoms/typography"
import { FC } from "react"
import { BlogType } from "@/types/blog"
import Box from "@/components/atoms/box"
import { formatDateTime } from "@/utils/date"

type BlogProps = {
  blog: BlogType
}

const BlogCard: FC<BlogProps> = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.slug}`} className="group">
      <Card className="transition-all group-hover:shadow-md">
        <CardHeader>
          <Typography className="min-h-[48px] group-hover:underline" as="h5">
            {blog.title}
          </Typography>
          <Box className="flex justify-between">
            <Typography
              as="span"
              className="text-xs text-gray-800 dark:text-gray-400"
            >
              {blog.author}
            </Typography>
            <Typography
              as="span"
              className="text-xs text-gray-800 dark:text-gray-400"
            >
              {blog.publishedAt ? formatDateTime(blog.publishedAt) : ""}
            </Typography>
          </Box>
        </CardHeader>
        <CardContent>
          <Typography className="dark:text-gray-400 min-h-[52px] text-gray-800 text-sm leading-6.5 line-clamp-2 text-justify">
            {blog.summary}
          </Typography>
        </CardContent>

        <CardFooter>
          <Badge>{blog.category}</Badge>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default BlogCard
