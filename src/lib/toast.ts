import { toast as toastShadCN } from "sonner"

export const toast = (message: string) =>
  toastShadCN(message, {
    position: "top-center",
  })
