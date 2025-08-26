"use client"

import Container from "@/components/molecules/container"
import Typography from "@/components/atoms/typography"
import Box from "@/components/atoms/box"
import { Button } from "@/components/atoms/button"
import Link from "next/link"
import { ChevronLeft, FilePlus2 } from "lucide-react"
import BlogList from "@/components/organisms/blog-list"
import { useBlogs } from "@/services/queries/blog"
import BlogNotFound from "@/components/molecules/not-found/blogs"

const Blog = () => {
  const { data: blogs } = useBlogs()

  return (
    <Container id="blog" className="mt-2 w-full space-y-5">
      <Box className="w-full flex flex-col xl:flex-row justify-between items-center">
        <Button variant={"link"} asChild>
          <Link href={"/"}>
            <ChevronLeft />
            Back to home
          </Link>
        </Button>
      </Box>

      <Box
        as="section"
        className="w-full flex flex-col space-y-3 xl:flex-row items-center justify-between"
      >
        <Typography as="h3" className="xl:text-xl text-lg">
          Explore Blogs
        </Typography>
        <Button size={"sm"} className="cursor-pointer w-max" asChild>
          <Link href={"/blog/create"}>
            Create New Blog
            <FilePlus2 />
          </Link>
        </Button>
      </Box>

      <Box as="section" className="space-y-2">
        {blogs && blogs?.length > 0 ? (
          <BlogList blogs={blogs} />
        ) : (
          <BlogNotFound />
        )}
      </Box>
    </Container>
  )
}

export default Blog
