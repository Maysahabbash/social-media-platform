import { Flex, VStack, FormControl, Input, Button, FormLabel, Heading, Text} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";


const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const {auth_login} = useAuth();

    const handleLogin = () => {
      auth_login(username, password)
 
      
    }
    const handleNav = () => {
      navigate('/register')
  }






    return (
        <Flex w='100%' h='calc(100vh - 90px)' justifyContent='center' alignItems='center'>
        <VStack alignItems='center' w='95%' maxW='400px' gap='30px'>
          <Heading fontFamily='sans-serif'>Welcome Back!</Heading>
          
          <FormControl>
            <FormLabel htmlFor='username' fontFamily='sans-serif'>
              Username
            </FormLabel>
            <Input 
              id='username' 
              autoComplete='username'  // Added attribute

              bg='white' 
              type='text' 
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
  
          <FormControl>
            <FormLabel htmlFor='password' fontFamily='sans-serif'>
              Password
            </FormLabel>
            <Input 
              id='password' 
              autoComplete='current-password'  // Added attribute

              bg='white' 
              type='password' 
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
  
          <Button onClick={handleLogin} bgColor='pink' w='100%'>Login</Button>
          <Text onClick={handleNav} fontSize='14px' color='gray.500'>Don't have an account? Sign up</Text>

        </VStack>
      </Flex>
  


    
    )
}



export default Login;