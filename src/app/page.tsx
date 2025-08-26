import Home from "@/components/pages/home"
import { getBlogs } from "@/services/api/blog"
import { revalidate } from "@/utils/constant"
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query"

export default async function Page() {
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
      <Home />
    </HydrationBoundary>
  )
}
