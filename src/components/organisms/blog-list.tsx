"use client"
import Box from "@/components/atoms/box"
import { Input } from "@/components/ui/input"
import { blogs } from "@/utils/constant"
import BlogCard from "./blog-card"

const BlogList = () => {
  return (
    <Box>
      <Input placeholder="Search blog..." />
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
          .map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
      </Box>
    </Box>
  )
}

export default BlogList
