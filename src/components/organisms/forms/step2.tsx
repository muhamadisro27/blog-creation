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
} from "@/components/molecules/select"
import { Textarea } from "@/components/molecules/textarea"
import { cn } from "@/lib/utils"
import { BlogSchemaType } from "@/schemas/blog-schema"
import { blog_categories } from "@/utils/constant"
import { useId } from "react"
import { useFormContext } from "react-hook-form"

const Step2 = () => {
  const { control } = useFormContext<BlogSchemaType>()
  const categoryId = useId()
  return (
    <>
      <FormField
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel isError={Boolean(fieldState.error)}>
              Summary
              <FormRequired />
            </FormLabel>
            <div className="relative w-full space-y-2">
              <FormControl>
                <Textarea
                  className="text-sm placeholder:text-[#78829D]"
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
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel isError={Boolean(fieldState.error)} htmlFor={categoryId}>
              Category
              <FormRequired />
            </FormLabel>
            <div className="relative w-full space-y-2">
              <FormControl>
                <Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger
                    id={categoryId}
                    className={cn(
                      "w-full",
                      fieldState.error ? "border-destructive" : ""
                    )}
                  >
                    <SelectValue
                      className="text-xs"
                      placeholder="Select category"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(blog_categories).map((category) => (
                      <SelectItem
                        className="text-sm"
                        key={category.value}
                        value={category.value}
                      >
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
