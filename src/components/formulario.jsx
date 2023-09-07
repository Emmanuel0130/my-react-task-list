import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Box, Heading, Text } from '@chakra-ui/react';

const LoginForm = ({ onLogin }) => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    // Procesar datos de inicio de sesión
    onLogin(data);
  };

  return (
    <Box maxW="400px" mx="auto">
      <Heading as="h2" mb="4">
        SIGN IN
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Name"
              mb="4"
              required
            />
          )}
        />
        <Controller
          name="Email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              type="email"
              placeholder="Email"
              mb="4"
              required
            />
          )}
        />
        <Button type="submit" colorScheme="blue">
          WELCOME
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
