import Container from "@/components/molecules/container"
import { Button } from "@/components/atoms/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import BlogCard from "@/components/organisms/blog-card"
import Box from "@/components/atoms/box"
import Typography from "@/components/atoms/typography"
import { blogs } from "@/utils/constant"

const Home = () => {
  return (
    <Container id="article-highlight" as="section" className="mt-10 w-full">
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
          .filter((blog) => blog.publishedAt != null)
          .sort((a, b) => {
            if (!a.publishedAt) return 1
            if (!b.publishedAt) return -1

            return (
              new Date(a.publishedAt).getTime() -
              new Date(b.publishedAt).getTime()
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
