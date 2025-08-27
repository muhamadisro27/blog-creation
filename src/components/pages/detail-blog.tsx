"use client"
import Container from "@/components/molecules/container"
import { FC } from "react"
import Box from "@/components/atoms/box"
import { Button } from "@/components/atoms/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import Breadcrumb from "@/components/organisms/breadcrumb-article"
import Typography from "@/components/atoms/typography"
import { Card, CardContent, CardHeader } from "@/components/molecules/card"
import { formatDateTime } from "@/utils/date"
import { useBlog } from "@/services/queries/blog"
import { Badge } from "@/components/molecules/badge"

type DetailBlogProps = {
  slug: string
}

const DetailBlog: FC<DetailBlogProps> = ({ slug }) => {
  const { data: blog } = useBlog(slug)

  if (!blog) {
    return (
      <Container>
        <Box className="w-full flex justify-between items-center">
          <Button variant={"link"} asChild>
            <Link href={"/blog"}>
              <ChevronLeft />
              Back to blog page
            </Link>
          </Button>

          <Breadcrumb lastItem={slug} />
        </Box>

        <Box className="w-full m-auto min-h-100 flex flex-col justify-center items-center">
          <Typography className="text-center max-w-xl">
            Blog with keyword &quot;{slug}&quot; is not found.
          </Typography>
        </Box>
      </Container>
    )
  }

  return (
    <Container>
      <Box className="w-full flex md:flex-row flex-col justify-between items-center space-y-2">
        <Button variant={"link"} asChild>
          <Link href={"/blog"}>
            <ChevronLeft />
            Back to blog page
          </Link>
        </Button>

        <Breadcrumb lastItem={slug} />
      </Box>

      <Card className="transition-all group-hover:shadow-md mt-7 flex flex-col">
        <CardHeader>
          <Typography className="md:text-2xl text-lg">{blog?.title}</Typography>
          <Box className="flex flex-col space-y-2 mt-4">
            <Badge>{blog?.category}</Badge>
            <Typography
              as="span"
              className="md:text-sm text-xs text-gray-800 dark:text-gray-400"
            >
              {blog?.author}
            </Typography>
            <Typography
              as="span"
              className="md:text-sm text-xs text-gray-800 dark:text-gray-400"
            >
              {blog?.publishedAt && formatDateTime(blog?.publishedAt)}
            </Typography>
          </Box>
        </CardHeader>
        <CardContent>
          <Typography className="text-justify text-xs md:text-sm leading-7 break-words whitespace-pre-line">
            {blog?.content}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default DetailBlog
