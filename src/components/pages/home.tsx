"use client"

import Container from "@/components/molecules/container"
import { Button } from "@/components/atoms/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import BlogCard from "@/components/organisms/blog-card"
import Box from "@/components/atoms/box"
import Typography from "@/components/atoms/typography"
import { useBlogs } from "@/services/queries/blog"

const Home = () => {
  const { data: blogs } = useBlogs()

  if (!blogs) {
    return <></>
  }

  return (
    <Container id="article-highlight" as="section" className="mt-2 w-full">
      <Box className="flex justify-between">
        <Typography as="h3" className="text-xl">
          Highlight Blogs
        </Typography>
        <Button variant={"secondary"} asChild>
          <Link href={"/blog"}>
            Explore Blog
            <ChevronRight />
          </Link>
        </Button>
      </Box>

      <Box className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs
          .sort((a, b) => {
            if (!a.publishedAt) return 1
            if (!b.publishedAt) return -1

            return (
              new Date(b.publishedAt).getTime() -
              new Date(a.publishedAt).getTime()
            )
          })
          .slice(0, 3)
          .map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
      </Box>
    </Container>
  )
}

export default Home
