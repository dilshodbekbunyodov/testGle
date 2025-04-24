import {Outlet, NavLink, useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {LogOut} from "../features/Login/login.js";
import {getUserData} from "../services/jwtService.js";
import './Layout.css';

const Layout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const local = getUserData()

    const logOutFunc = () => {
        dispatch(LogOut())
        navigate('/login')
    }

    return (
        <div className="layout">
            <div className="sidebar flex flex-col">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className='mt-auto'>
                    <small className='leading-[17px] mb-[10px] block'>{local?.full_name}</small>
                    <button onClick={logOutFunc} className={'text-white'}>Log out</button>
                </div>
            </div>

            <div className="content">
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;