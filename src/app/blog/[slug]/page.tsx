import DetailBlog from "@/components/pages/detail-blog"
import { getBlogs } from "@/services/api/blog"
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query"
import { FC } from "react"

type Props = {
  params: Promise<{ slug: string }>
}

const Page: FC<Props> = async ({ params }) => {
  const { slug } = await params

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const blogs = await getBlogs()
      return blogs.find((b) => b.slug === slug)
    },
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DetailBlog slug={slug} />
    </HydrationBoundary>
  )
}

export default Page
