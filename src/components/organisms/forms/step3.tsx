import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/forms"
import FormRequired from "@/components/molecules/form-required"
import { Textarea } from "@/components/molecules/textarea"
import { BlogSchemaType } from "@/schemas/blog-schema"
import React from "react"
import { useFormContext } from "react-hook-form"

const Step3 = () => {
  const { control } = useFormContext<BlogSchemaType>()

  return (
    <>
      <FormField
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Content
              <FormRequired />
            </FormLabel>
            <div className="relative w-full space-y-2">
              <FormControl>
                <Textarea
                  className="text-xs placeholder:text-[#78829D]"
                  placeholder="Enter content blog"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </div>
          </FormItem>
        )}
        control={control}
        name="content"
      />
    </>
  )
}

export default Step3
