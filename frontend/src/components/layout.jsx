
import { Box, VStack } from "@chakra-ui/react" //chakra-ui-docs
import Navbar from "./navbar"
const Layout = ({children}) => {
    return(
        <VStack w='100vw'minH='100vh' bg='#FAF0E6'>
         <Navbar/>
            <Box w='100%'>
                {children}
            </Box>
        </VStack>   
    )
}
export default Layout