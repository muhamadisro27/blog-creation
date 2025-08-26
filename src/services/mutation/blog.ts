import api from "@/lib/axios"
import { BlogRequestBody } from "@/types/blog"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export const useCreateBlog = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationKey: ["create-blog"],
    mutationFn: async (body: BlogRequestBody) =>
      (await api.post("/blogs", body)).data,
    onSuccess: () => {
      toast.success("Sucessfully create new blog !", {
        position: "top-center",
      })
      queryClient.invalidateQueries({ queryKey: ["blogs"] })

      router.push("/blog")
    },
    onError: (error) => {
      const err = error

      if (err instanceof AxiosError) {
        console.error(error.message)
        toast.error("Something went wrong with api service !", {
          position: "top-center",
        })
      }
    },
  })
}
