"use client"

import { usePathname } from "next/navigation"
import Container from "@/components/molecules/container"
import { useMemo } from "react"
import Box from "@/components/atoms/box"
import { Button } from "@/components/atoms/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import BreadcrumbArticle from "@/components/organisms/breadcrumb-article"
import Typography from "@/components/atoms/typography"
import { Card, CardContent, CardHeader } from "@/components/molecules/card"

const DetailBlog = () => {
  const pathname = usePathname()

  const slug = useMemo(() => {
    return pathname.split("/")[2]
  }, [pathname])

  return (
    <Container>
      <Box className="w-full flex justify-between items-center">
        <Button variant={"link"} asChild>
          <Link href={"/"}>
            <ChevronLeft />
            Back
          </Link>
        </Button>

        <BreadcrumbArticle lastItem={slug} />
      </Box>

      <Card className="transition-all group-hover:shadow-md mt-7 flex flex-col">
        <CardHeader>
          <Typography className="text-2xl">
            AI Tools Every Developer Should Try in 2025
          </Typography>
          <Box className="flex flex-col space-y-2 mt-4">
            <Typography
              as="span"
              className="text-sm text-gray-800 dark:text-gray-400"
            >
              Muhamad Isro Sabanur
            </Typography>
            <Typography
              as="span"
              className="text-sm text-gray-800 dark:text-gray-400"
            >
              1725859200000
            </Typography>
          </Box>
        </CardHeader>
        <CardContent>
          <Typography className="text-justify text-sm">
            From code generation to debugging assistants, AI tools are now
            essential for modern developers.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default DetailBlog
