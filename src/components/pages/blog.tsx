import Container from "@/components/molecules/container"
import Typography from "@/components/atoms/typography"
import Box from "@/components/atoms/box"
import { Button } from "@/components/atoms/button"
import Link from "next/link"
import { ChevronLeft, FilePlus2 } from "lucide-react"
import BlogList from "@/components/organisms/blog-list"

const Blog = () => {
  return (
    <Container id="blog" className="mt-10 w-full space-y-5">
      <Box className="w-full flex justify-between items-center">
        <Button variant={"link"} asChild>
          <Link href={"/"}>
            <ChevronLeft />
            Back to home
          </Link>
        </Button>
      </Box>

      <Box as="section" className="w-full flex justify-between">
        <Typography as="h3" className="text-xl">
          Explore Blogs
        </Typography>
        <Button size={"sm"} className="cursor-pointer" asChild>
          <Link href={"/blog/create"}>
            Create New Blog
            <FilePlus2 />
          </Link>
        </Button>
      </Box>

      <Box as="section" className="space-y-2">
        <BlogList />
      </Box>
    </Container>
  )
}

export default Blog
