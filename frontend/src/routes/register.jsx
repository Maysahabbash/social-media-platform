import { Flex, VStack, FormControl, Input, Button, FormLabel, Heading,} from "@chakra-ui/react";
import { login } from "../api/endpoints";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const navigate = useNavigate();

    const handleRegister = async () => {
      const data = await login(username, password)
      if(data.success){
         navigate(`/${username}`)
      }else{
        alert('invalid')
      }
      
    }





    return (
        <Flex w='100%' h='calc(100vh - 90px)' justifyContent='center' alignItems='center'>
        <VStack alignItems='center' w='95%' maxW='400px' gap='20px'>
          <Heading fontFamily='sans-serif'></Heading>
          
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
            <FormLabel htmlFor='username' fontFamily='sans-serif'>
              Email
            </FormLabel>
            <Input 
              id='email' 
              autoComplete='username'  // Added attribute

              bg='white' 
              type='text' 
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='username' fontFamily='sans-serif'>
              First Name
            </FormLabel>
            <Input 
              id='first_name' 
              autoComplete='username'  // Added attribute

              bg='white' 
              type='text' 
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='username' fontFamily='sans-serif'>
              Last Name
            </FormLabel>
            <Input 
              id='last_name' 
              autoComplete='username'  // Added attribute

              bg='white' 
              type='text' 
              onChange={(e) => setLastName(e.target.value)}
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
          <FormControl>
            <FormLabel htmlFor='password' fontFamily='sans-serif'>
             Confirm Password
            </FormLabel>
            <Input 
              id='password' 
              autoComplete='current-password'  // Added attribute

              bg='white' 
              type='password' 
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>

  
          <Button onClick={handleRegister} bgColor='pink' w='100%'>Register</Button>
        </VStack>
      </Flex>
  


    
    )
}



export default Register;