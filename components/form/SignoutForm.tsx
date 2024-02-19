"use client"

import { NewPasswordSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { BeatLoader } from "react-spinners"
import * as z from "zod"

import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"
import { CardWrapper } from "@/components/form/card-wrapper"

import { Button } from "../ui/button"

const SignoutForm = () => {
  return (
    <CardWrapper
      headerLabel="Are you sure you want to leave?"
      backButtonLabel="Back to Home"
      backButtonHref="/"
    >
      <div className='mx-auto my-5 flex w-[80%] items-center justify-evenly'>
        </div>
      <div className="flex w-full items-center justify-center">
        <FormSuccess />
        <FormError />
        <div className="flex w-full items-center gap-x-2">
          <Button
            size="lg"
            className="w-full"
            variant="outline"
          // onClick={() => onClick("google")}
          >
            Yes
          </Button>
          <Button
            size="lg"
            className="w-full"
          // onClick={() => onClick("github")}
          >
            No
          </Button>
        </div>
      </div>
    </CardWrapper>
  )
}

export default SignoutForm
