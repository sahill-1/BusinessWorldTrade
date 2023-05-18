import React, {useState} from 'react';
import {
  Button, Checkbox, Flex, FormControl, FormLabel,
  Heading, Input, Link, Stack, Image, ChakraProvider,
} from '@chakra-ui/react';
import loginImage from "../images/login page 4-01.jpg";

export default function LogIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  

  return (
    
    <ChakraProvider>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
            <FormControl id="email" >
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" >
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>
              <Button type='submit' colorScheme={'blue'} variant={'solid'}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
        
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={loginImage}
          />
        </Flex>
      </Stack>
    </ChakraProvider> 
  );
}
