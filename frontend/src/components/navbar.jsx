import { Flex, HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";




const Navbar = () => {
    const nav = useNavigate();
        const handleNavigate = (route) => {
        nav(`/${route}`);  
    }

    return(
        <Flex w='100vw' h='90px' bg='#F08080' justifyContent='center' alignItems='center'>
            <HStack w='90%' justifyContent='space-between'>
                <Text fontSize='24px' fontWeight='bold' fontFamily='fantasy'>Social404</Text>
                <HStack>
                    <Text 
                        onClick={() => handleNavigate('maysa')}  _hover={{ cursor: 'pointer' }} > <IoPersonCircleOutline size={'30px'}/>

                        
                    

                    </Text>
                </HStack>
            </HStack>
        </Flex>
    )
}

export default Navbar;