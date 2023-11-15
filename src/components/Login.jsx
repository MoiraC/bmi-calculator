import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../features/user/userSlice';

function Login() {
    const navigate = useNavigate();
    const [warning, setWarning] = useState(false);
    const userData = useSelector((state) => state.user);
    const dispatch = useDispatch()

    const loginHandler = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const loginName = formData.get("email");
        const loginPassword = formData.get("password");

        const currentUser = userData.allUsers.find(u => u.name === loginName && loginPassword);

        if (currentUser !== undefined) {
            dispatch(login(currentUser.id))
            navigate("/calculator");
        } else {
            setWarning(true);
        }
    }

    return (
        <div className='flex flex-col items-center justify-around h-[70vh]'>
            <div className='flex flex-col items-center'>
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Giriş yap
                            </h1>
                            <form className='w-96' onSubmit={loginHandler}>
                                <div className="mb-6">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name='email'
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@flowbite.com"
                                        required={true}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Şifre
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name='password'
                                        placeholder='*********'
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required={true}
                                    />
                                </div>
                                <div className="flex items-start mb-6">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            type="checkbox"
                                            defaultValue=""
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                        />
                                    </div>
                                    <label
                                        htmlFor="remember"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Beni hatırla
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="text-white bg-purple-800 hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-purple-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-800 dark:hover:bg-purple-900 dark:focus:ring-purple-800"
                                >
                                    Giriş yap
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {warning && <div className='w-full  mt-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Giriş bilgileri uyuşmuyor.
                        </h1>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Login