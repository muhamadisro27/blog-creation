import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/forms"
import Typography from "@/components/atoms/typography"
import FormRequired from "@/components/molecules/form-required"
import { Input } from "@/components/molecules/input"
import { useDebounce } from "@/hooks/use-debounce"
import { BlogSchemaType } from "@/schemas/blog-schema"
import { slugify } from "@/utils/string"
import { useEffect } from "react"
import { useFormContext } from "react-hook-form"

const Step1 = () => {
  const { control, watch, setValue } = useFormContext<BlogSchemaType>()

  const title = watch("title")
  const debounceTitle = useDebounce(title)

  useEffect(() => {
    setValue("slug", slugify(debounceTitle))
  }, [debounceTitle, setValue])

  return (
    <>
      <FormField
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel isError={Boolean(fieldState.error)}>
              Title
              <FormRequired />
            </FormLabel>
            <div className="relative w-full space-y-2">
              <FormControl>
                <Input
                  className="text-sm placeholder:text-[#78829D]"
                  placeholder="Enter title blog"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </div>
          </FormItem>
        )}
        control={control}
        name="title"
      />

      <FormField
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel isError={Boolean(fieldState.error)}>Slug</FormLabel>
            <div className="relative w-full space-y-2">
              <FormControl>
                <Input
                  disabled
                  className="text-sm placeholder:text-[#78829D]"
                  {...field}
                />
              </FormControl>
              <Typography className="text-xs dark:text-gray-500">
                Auto-generated from title
              </Typography>
              <FormMessage />
            </div>
          </FormItem>
        )}
        control={control}
        name="slug"
      />

      <FormField
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel isError={Boolean(fieldState.error)}>
              Author
              <FormRequired />
            </FormLabel>
            <div className="relative w-full space-y-2">
              <FormControl>
                <Input
                  className="text-sm placeholder:text-[#78829D]"
                  placeholder="Enter author blog"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </div>
          </FormItem>
        )}
        control={control}
        name="author"
      />
    </>
  )
}

export default Step1
