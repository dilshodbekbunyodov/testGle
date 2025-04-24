import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';

import Login from './pages/Auth.jsx';

import NotFound from './pages/404.jsx'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='*' exact={true} element={<NotFound/>} />


                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="dashboard" element={<Dashboard/>}/>
                </Route>


                <Route path="/login">
                    <Route index element={<Login/>}/>
                </Route>

            </Routes>

            <ToastContainer />
        </Router>
    )
}

export default App;