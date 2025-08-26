"use client"
import Container from "@/components/molecules/container"
import { FC } from "react"
import Box from "@/components/atoms/box"
import { Button } from "@/components/atoms/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import BreadcrumbArticle from "@/components/organisms/breadcrumb-article"
import Typography from "@/components/atoms/typography"
import { Card, CardContent, CardHeader } from "@/components/molecules/card"
import { formatDateTime } from "@/utils/date"
import { useBlog } from "@/services/queries/blog"

type DetailBlogProps = {
  slug: string
}

const DetailBlog: FC<DetailBlogProps> = ({ slug }) => {
  const { data: blog } = useBlog(slug)

  return (
    <Container>
      <Box className="w-full flex justify-between items-center">
        <Button variant={"link"} asChild>
          <Link href={"/blog"}>
            <ChevronLeft />
            Back To blog page
          </Link>
        </Button>

        <BreadcrumbArticle lastItem={slug} />
      </Box>

      <Card className="transition-all group-hover:shadow-md mt-7 flex flex-col">
        <CardHeader>
          <Typography className="text-2xl">{blog?.title}</Typography>
          <Box className="flex flex-col space-y-2 mt-4">
            <Typography
              as="span"
              className="text-sm text-gray-800 dark:text-gray-400"
            >
              {blog?.author}
            </Typography>
            <Typography
              as="span"
              className="text-sm text-gray-800 dark:text-gray-400"
            >
              {blog?.publishedAt && formatDateTime(blog?.publishedAt)}
            </Typography>
          </Box>
        </CardHeader>
        <CardContent>
          <Typography className="text-justify text-sm">
            {blog?.content}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default DetailBlog
