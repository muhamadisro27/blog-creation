import Box from "@/components/atoms/box"
import Typography from "@/components/atoms/typography"
import { Card, CardContent, CardHeader } from "@/components/molecules/card"
import TextToggle from "@/components/molecules/text-toggle"
import { useFormWizzard } from "@/providers/form-wizzard"
import { steps } from "@/utils/constant"
import { mapBlogDataToSteps } from "@/utils/string"
import { useMemo } from "react"

const Step4 = () => {
  const { form } = useFormWizzard()
  const values = form.getValues()

  const reviews = useMemo(() => {
    const partialSteps = Object.fromEntries(
      Object.entries(steps).filter(([key]) => Number(key) < 4)
    )
    return mapBlogDataToSteps(values, partialSteps)
  }, [values])

  return (
    <Box className="space-y-6">
      <Typography as="h2" className="text-xl font-semibold">
        Review your Blog Post
      </Typography>

      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.values(reviews).map((item) => (
          <Card key={item.step} className="rounded-2xl shadow-md border">
            <CardHeader>
              <Typography as="h5" className="text-base font-medium">
                {item.title}
              </Typography>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(item.data).map(([key, value]) => (
                <Box key={key} className="space-y-1 grid grid-cols-2">
                  <Typography className="text-sm capitalize">{key}</Typography>
                  <TextToggle text={value} maxLength={200} />
                </Box>
              ))}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

export default Step4
