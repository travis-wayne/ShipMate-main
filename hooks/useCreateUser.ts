// useCreateUser.ts
import { RegisterSchema } from '@/schemas';
import { useMutation } from 'react-query';
import * as z from "zod";

const createUser = async (values: z.infer<typeof RegisterSchema>) => {
  // Implement your logic to create a user here
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error || 'Failed to create user');
  }

  return response.json();
};

const useCreateUser = () => {
  return useMutation(createUser);
};

export { useCreateUser };
