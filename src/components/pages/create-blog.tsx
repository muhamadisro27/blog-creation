"use client"
import Container from "@/components/molecules/container"
import WizzardForm from "@/components/organisms/forms/wizzard-form"
import { FormWizzardProvider } from "@/providers/form-wizzard"

const CreateBlog = () => {
  return (
    <Container id="blog" as="section" className="lg:mt-10 mt-4 w-full">
      <FormWizzardProvider>
        <WizzardForm />
      </FormWizzardProvider>
    </Container>
  )
}

export default CreateBlog
