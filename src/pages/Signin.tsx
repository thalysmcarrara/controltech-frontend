import {
  Center, Box, Image, Flex, FormControl, FormLabel, Input, FormErrorMessage, Button,
} from '@chakra-ui/react';
import { AxiosError } from 'axios';
import Joi from 'joi';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { api, UserAuthResponse } from '../services/api';

interface ErrorParams {
  key: string;
  message: string;
}

interface FormError {
  isError: boolean;
  message: string;
}

interface FormErrors {
  email: FormError
  password: FormError
}

interface FormShape {
  email: string;
  password: string;
}

const formSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().min(8).required(),
});

const formInitialState: FormShape = {
  email: '',
  password: '',
};

const formErrorInitialState: FormErrors = {
  email: {
    isError: false,
    message: '',
  },
  password: {
    isError: false,
    message: '',
  },
};

export default function Signin() {
  const [form, setForm] = useState(formInitialState);
  const [formError, setFormError] = useState(formErrorInitialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const mapErrors = ({ key, message }: ErrorParams) => {
    setFormError({
      ...formError,
      [key]: {
        isError: true,
        message,
      },
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const { error } = formSchema.validate(form);

    if (error) {
      const key = error.details[0].context?.key || '';
      mapErrors({ key, message: error.message });
      setIsSubmitting(false);
      return;
    }

    setFormError(formErrorInitialState);

    try {
      const { data: { token } } = await api.post<UserAuthResponse>('/users/authenticate', form);
      localStorage.setItem('controltech@token', JSON.stringify(token));
      navigate('/dashboard/report');
    } catch (error) {
      const resolvedError = error as AxiosError;
      toast(resolvedError.response?.data.message, {
        theme: 'dark',
        type: 'error',
      });
      setIsSubmitting(false);
    }
  };

  const handleInputChange = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    const { name, value } = currentTarget;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <Center w="100vw" h="100vh">
      <Flex
        as="form"
        flexDirection="column"
        w="300px"
        alignItems="center"
        bg="gray.800"
        p="6"
        borderRadius="2xl"
      >
        <Box mb="30px" bg="white" w="fit-content" rounded="full">
          <Image className="logo" height="100px" src="./assets/controltechlogo.png" alt="logo controltech" />
        </Box>

        <FormControl isInvalid={formError.email.isError} mb="30px">
          <FormLabel htmlFor="email" mb="1">Email</FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            placeholder="Digite seu email"
            variant="filled"
            _hover={{
              bg: 'gray.900',
            }}
            bg="gray.900"
            focusBorderColor="blue.900"
          />
          {formError.email.isError
          && <FormErrorMessage>{formError.email.message}</FormErrorMessage>}
        </FormControl>

        <FormControl isInvalid={formError.password.isError} mb="30px">
          <FormLabel htmlFor="password" mb="1">Senha</FormLabel>
          <Input
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
            placeholder="Digite sua senha"
            variant="filled"
            _hover={{
              bg: 'gray.900',
            }}
            bg="gray.900"
            focusBorderColor="blue.900"
          />
          {formError.password.isError
          && <FormErrorMessage>{formError.password.message}</FormErrorMessage> }
        </FormControl>

        <Button w="100%" colorScheme="facebook" onClick={handleSubmit} isLoading={isSubmitting}>Login</Button>
      </Flex>
    </Center>
  );
}
