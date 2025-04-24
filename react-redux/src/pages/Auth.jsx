import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from '../features/Login/login.js'
import {useNavigate} from "react-router-dom";
import {toast} from 'react-toastify';


const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [data, setData] = useState({
        phone: '998990893954',
        password: '1234'
    })

    const onSubmit = async (evt) => {
        evt.preventDefault();

        try {
            const res = await dispatch(login(data))
            if (res && res.success) {
                navigate('/')
                toast.success('success')
            }
        } catch (e) {
            toast.error(e.message)
        }
    }

    const onChange = (e) => {
        const {value, name} = e.target

        setData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    return (
        <div className={'h-[100vh] w-[100vw] flex justify-center items-center bg-[#FCFCFC]'}>
            <div className={'shadow p-[20px] rounded-lg w-[500px]'}>
                <h5 className={'mb-[20px] text-[25px]'}>Login</h5>

                <form onSubmit={onSubmit}>
                    <label className={'flex flex-col'}>
                        <small>Номер телефона</small>
                        <input
                            onChange={onChange}
                            value={data.phone}
                            name='phone'
                            type="text"
                            className={'border rounded-lg border-[#ccc] py-[8px] px-[10px] mt-[5px] focus:outline-none'}
                            placeholder={'Номер телефона'}
                        />
                    </label>

                    <label className={'flex flex-col mt-[10px]'}>
                        <small>Пароль</small>
                        <input
                            onChange={onChange}
                            value={data.password}
                            name='password'
                            type="text"
                            className={'border rounded-lg border-[#ccc] py-[8px] px-[10px] mt-[5px] focus:outline-none'}
                            placeholder={'Пароль'}
                        />
                    </label>

                    <button type={"submit"} className={'text-white mt-[20px]'}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Auth;