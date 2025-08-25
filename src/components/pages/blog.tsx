import Container from "@/components/molecules/container"
import Typography from "@/components/atoms/typography"
import Box from "@/components/atoms/box"
import { Button } from "@/components/atoms/button"
import Link from "next/link"
import { ChevronLeft, FilePlus2 } from "lucide-react"

const Blog = () => {
  return (
    <Container id="blog" as="section" className="mt-10 w-full space-y-5">
      <Box className="w-full flex justify-between items-center">
        <Button variant={"link"} asChild>
          <Link href={"/"}>
            <ChevronLeft />
            Back
          </Link>
        </Button>
      </Box>

      <Box className="w-full flex justify-between">
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
    </Container>
  )
}

export default Blog
