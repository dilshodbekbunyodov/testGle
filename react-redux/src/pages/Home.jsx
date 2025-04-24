import {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUserList} from "../features/User/user.js";

import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

const Home = () => {
    const hasFetched = useRef(false);
    const timerRef = useRef(null);

    const USER_LIST = useSelector(state => state.user.USER_LIST)
    const [params, setParams] = useState({
        page: 1,
        page_size: 5,
        search: ''
    })

    const dispatch = useDispatch();


    const getData = () => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        dispatch(getUserList(params));
    }


    const changeSearch = (e) => {
        const {name, value} = e.target;

        setParams((prevData) => {
            const newParams = {...prevData, [name]: value, page: 1};

            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                dispatch(getUserList(newParams));
            }, 500);

            return newParams;
        });
    };

    const changePage = (e) => {
        setParams((prev) => {
            const newParams = {...prev, page: e};
            dispatch(getUserList(newParams));
            return newParams;
        });
    }


    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <div>
            <input
                onChange={changeSearch}
                value={params.search}
                name='search'
                type="text"
                className='w-[200px] border border-[#ccc] py-[8px] px-[10px] mt-[5px] rounded-lg'
                placeholder={'Поиск...'}
            />

            <div className="shadow-sm my-8 overflow-auto">
                <table className="border-collapse text-sm w-full">
                    <thead>
                    <tr>
                        <th className="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left">№</th>
                        <th className="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left">Фамилия И.О.</th>
                        <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">Должность</th>
                        <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">Телефон</th>
                        <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">Статус</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                    {
                        USER_LIST && USER_LIST.results.map((e, index) => {
                            return (
                                <tr key={index}>
                                    <td className="border-b border-slate-100 p-4 pl-8">{index + 1}</td>
                                    <td className="border-b border-slate-100 p-4 pl-8">
                                        <div className={'flex items-center gap-1'}>
                                            <img src={e.image} alt={e.full_name}
                                                 className='h-[30px] w-[30px]  rounded-full'/>
                                            {e.full_name}
                                        </div>
                                    </td>
                                    <td className="border-b border-slate-100 p-4 pl-8">
                                        {
                                            e.position.map((v, vindex) => {
                                                return (
                                                    <div key={vindex}>{v.ru}</div>
                                                )
                                            })
                                        }
                                    </td>
                                    <td className="border-b border-slate-100 p-4 pl-8">{e.phone}</td>
                                    <td className="border-b border-slate-100 p-4 pl-8">{e.is_active ? 'ACTIVE' : 'INACTIVE'}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>

            <ResponsivePagination
                current={params.page}
                total={USER_LIST.total_pages}
                onPageChange={changePage}
            />
        </div>
    );
};

export default Home;