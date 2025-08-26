import api from "@/lib/axios"
import { BlogType } from "@/types/blog"

export const getBlogs = async () => (await api.get<BlogType[]>("/blogs")).data
