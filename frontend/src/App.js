import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import UserProfile from './routes/user_profile';
import Layout from './components/layout';
import Login from './routes/login';
import Register from './routes/register';
import { Authprovider } from './contexts/useAuth';
function App() {
  return (
    <ChakraProvider>
       <Router>
        <Authprovider>
        <Routes>
            <Route element={<Layout><UserProfile/></Layout>} path='/:username'/>
            <Route element={<Layout><Login/></Layout>} path='/Login'/>
            <Route element={<Layout><Register/></Layout>} path='/register'/>
           </Routes>
        </Authprovider>
        </Router>
     </ChakraProvider>
      
      
   
  );
}

export default App;
