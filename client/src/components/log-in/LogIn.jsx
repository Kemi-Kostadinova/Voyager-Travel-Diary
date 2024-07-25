import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm"
import { useLogin } from "../../hooks/useAuth"

export default function LogIn() {
    const login = useLogin();
    const navigate = useNavigate();

    const initialValues = { email: "", password: "" }
    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);

            navigate('/discover');
        } catch (err) {
            console.log(err.message);
        }
    }

    const { values, onChange, onSubmit } = useForm(initialValues, loginHandler);

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-44 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="../public/logo-small.svg"
                        className="mx-auto h-6 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Log in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    value={values.email}
                                    onChange={onChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0CA9E8] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-[#0CA9E8] hover:text-[#008bb5]">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    value={values.password}
                                    onChange={onChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0CA9E8] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-[#0CA9E8] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#008bb5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Log in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link to="/sign-up" className="font-semibold leading-6 text-[#0CA9E8] hover:text-[#008bb5]" >
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}