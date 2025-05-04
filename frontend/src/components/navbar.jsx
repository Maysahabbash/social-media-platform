import { Flex, HStack, Text } from "@chakra-ui/react"; //chakra-ui-docs
import { useNavigate } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5"; //React icons library

import { IoMdAddCircleOutline } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";



const Navbar = () => {
    const nav = useNavigate();
        const handleNavigate = (route) => {
        nav(`/${route}`);  
    }

    return(
        <Flex w='100vw' h='90px' bg='pink' justifyContent='center' alignItems='center'>
        <HStack w='90%' justifyContent='space-between' color='white'>
            <Text fontSize='24px' fontWeight='bold'>Moments</Text>
            <HStack gap='20px'>
                <Text onClick={handleNavigate}><IoPersonCircleOutline size='20px' /></Text>
                <Text onClick={(route) => handleNavigate('create/post')}><IoMdAddCircleOutline size='22px' /></Text>
                <Text onClick={(route) => handleNavigate('')}><FaHouse size='20px' /></Text>
                <Text onClick={(route) => handleNavigate('search')}><IoSearch size='20px' /></Text>


                </HStack>
            </HStack>
        </Flex>
    )
}

export default Navbar;