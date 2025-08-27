import Box from "@/components/atoms/box"
import { Button } from "@/components/atoms/button"
import Typography from "@/components/atoms/typography"
import { Card, CardContent, CardHeader } from "@/components/molecules/card"
import TextToggle from "@/components/molecules/text-toggle"
import { useFormWizzard } from "@/providers/form-wizzard"
import { steps } from "@/utils/constant"
import { mapBlogDataToSteps } from "@/utils/string"
import { SquarePen } from "lucide-react"
import { useMemo } from "react"

const Step4 = () => {
  const { form, setCurrentStep, setSteps } = useFormWizzard()
  const values = form.getValues()

  const reviews = useMemo(() => {
    const partialSteps = Object.fromEntries(
      Object.entries(steps).filter(([key]) => Number(key) < 4)
    )
    return mapBlogDataToSteps(values, partialSteps)
  }, [values])

  const onEdit = (step: number) => {
    setCurrentStep(step - 1)

    setSteps((prev) => {
      const updated = { ...prev }

      Object.keys(updated).forEach((key) => {
        const idx = Number(key)

        if (idx < step) {
          updated[idx] = {
            ...updated[idx],
            isCompleted: true,
            isCurrentStep: false,
          }
        } else if (idx === step) {
          updated[idx] = {
            ...updated[idx],
            isCompleted: false,
            isCurrentStep: true,
          }
        } else {
          updated[idx] = {
            ...updated[idx],
            isCompleted: false,
            isCurrentStep: false,
          }
        }
      })

      return updated
    })
  }

  return (
    <Box className="space-y-6">
      <Typography as="h2" className="text-xl font-semibold">
        Review your Blog Post
      </Typography>

      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.values(reviews).map((item) => (
          <Card key={item.step} className="rounded-2xl shadow-md border">
            <CardHeader>
              <Box className="flex justify-between items-center">
                <Typography as="h5" className="text-sm lg:text-base font-medium">
                  {item.title}
                </Typography>

                <Button
                  type="button"
                  variant={"secondary"}
                  className="w-max text-xs md:text-sm cursor-pointer"
                  onClick={() => onEdit(item.step)}
                >
                  Edit
                  <SquarePen />
                </Button>
              </Box>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(item.data).map(([key, value]) => (
                <Box key={key} className="space-y-1 grid grid-cols-2">
                  <Typography className="text-xs md:text-sm capitalize">{key}</Typography>
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
