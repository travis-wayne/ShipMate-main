"use client";

import { NewPasswordSchema } from "@/schemas";
import { CardWrapper } from "@/components/form/card-wrapper"

import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { BeatLoader } from "react-spinners";
import { Button } from "../ui/button";

const NewVerificationForm = () => {


  return (
    <CardWrapper
      headerLabel="Omoh! Something don happen!"
      backButtonLabel="Back to login"
      backButtonHref="/auth/sign-in"
    >
      <div className="flex w-full items-center justify-center">
        <div className='mx-auto my-5 flex w-[80%] items-center justify-evenly'>
           <BeatLoader />
        </div>


      </div>
      <Button
            type="submit"
            className="w-full"
          >
            Try again
          </Button>
    </CardWrapper>
  );
};

export default NewVerificationForm;
