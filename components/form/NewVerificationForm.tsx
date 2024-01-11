"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CardWrapper } from "@/components/form/card-wrapper"

import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { BeatLoader } from "react-spinners";

const NewVerificationForm = () => {


  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/sign-in"
    >
      <div className="flex w-full items-center justify-center">
        <BeatLoader />
        <FormSuccess />
        <FormError />
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
