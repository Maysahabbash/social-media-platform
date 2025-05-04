import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import UserProfile from './routes/user_profile';
import Layout from './components/layout';
import Login from './routes/login';
import Register from './routes/register';
import { AuthProvider } from './contexts/useAuth';
import PrivateRoute from './components/private_route';
import CreatePost from './routes/create_post';
import Home from './routes/home';
import Search from './routes/search';
function App() {
  return (
    <ChakraProvider>
      <Router>
        <AuthProvider>
         <Routes>
          <Route element={<Layout><UserProfile/></Layout>} path='/:username' />
           <Route element={<Layout><CreatePost/></Layout>} path='/create/post' />
            <Route element={<Layout><Login/></Layout>} path='/Login'/>
            <Route element={<Layout><Register/></Layout>} path='/register'/>
            <Route element={<Layout><Home/></Layout>} path='/'/>
            <Route element={<Layout><Search/></Layout>} path='/Search'/>



           </Routes>
         </AuthProvider>
       </Router>
    </ChakraProvider>
      
      
   
  );
}

export default App;
