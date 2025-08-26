import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/forms"
import FormRequired from "@/components/molecules/form-required"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { BlogSchemaType } from "@/schemas/blog-schema"
import { blog_categories } from "@/utils/constant"
import { useFormContext } from "react-hook-form"

const Step2 = () => {
  const { control } = useFormContext<BlogSchemaType>()

  return (
    <>
      <FormField
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Summary
              <FormRequired />
            </FormLabel>
            <div className="relative w-full space-y-2">
              <FormControl>
                <Textarea
                  className="text-xs placeholder:text-[#78829D]"
                  placeholder="Enter summary blog"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </div>
          </FormItem>
        )}
        control={control}
        name="summary"
      />

      <FormField
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Category
              <FormRequired />
            </FormLabel>
            <div className="relative w-full space-y-2">
              <FormControl>
                <Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(blog_categories).map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </div>
          </FormItem>
        )}
        control={control}
        name="category"
      />
    </>
  )
}

export default Step2
