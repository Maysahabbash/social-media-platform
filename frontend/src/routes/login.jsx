import { Flex, VStack, FormControl, Input, Button, FormLabel, Heading,} from "@chakra-ui/react";
import { login } from "../api/endpoints";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleLogin = async () => {
      const data = await login(username, password)
      if(data.success){
         navigate(`/${username}`)
      }else{
        alert('invalid')
      }
      
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
        </VStack>
      </Flex>
  


    
    )
}



export default Login;