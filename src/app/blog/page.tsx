import { getBlogs } from "@/services/api/blog"
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query"
import { revalidate } from "@/utils/constant"
import Blog from "@/components/pages/blog"

const Page = async () => {
  const queryClient = new QueryClient()

  try {
    await queryClient.prefetchQuery({
      queryKey: ["blogs"],
      queryFn: getBlogs,
      staleTime: revalidate * 1000,
    })
  } catch (error) {
    console.error("Failed to prefetch blogs:", error)
    queryClient.setQueryData(["blogs"], [])
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Blog />
    </HydrationBoundary>
  )
}

export default Page
