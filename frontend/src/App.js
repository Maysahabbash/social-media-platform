import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import Layout from './components/layout';
import Login from './routes/login';
import Register from './routes/register';

import UserProfile from './routes/user_profile';
import PrivateRoute from './components/private_route';
import CreatePost from './routes/create_post';
import Home from './routes/home';
import Search from './routes/search';
import Settings from './routes/settings';

import { AuthProvider } from './contexts/useAuth';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<Layout><UserProfile/></Layout>} path='/:username' />
            <Route element={<Layout><CreatePost/></Layout>} path='/create/post' />
            <Route element={<Layout><Home/></Layout>} path='/' />
            <Route element={<Layout><Search/></Layout>} path='/search' />
            <Route element={<Layout><Settings/></Layout>} path='/settings' />
            <Route element={<Login/>} path='/login' />
            <Route element={<Register/>} path='/register' />
          </Routes>
        </AuthProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;