import { useQuery } from "@tanstack/react-query"
import { getBlogs } from "@/services/api/blog"

export function useBlogs() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
    staleTime: 60 * 1000,
    refetchOnWindowFocus: false,
  })
}

export function useBlog(slug: string) {
  return useQuery({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const blogs = await getBlogs()

      return blogs.find((blog) => blog.slug === slug)
    },
    staleTime: 60 * 1000,
    refetchOnWindowFocus: false,
  })
}
