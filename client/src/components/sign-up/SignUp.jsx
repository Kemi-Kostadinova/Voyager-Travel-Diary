import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm"
import { useRegister } from "../../hooks/useAuth"

export default function SignUp() {
    const register = useRegister();
    const navigate = useNavigate();

    const initialValues = { email: "", username: "", profileImage: "", password: "", rePassword: "", }
    const registerHandler = async ({ email, username, profileImage, password, rePassword }) => {
        if (password !== rePassword) {
            console.log("Passwords don`t match");
            return;
        }

        try {
            await register(email, username, profileImage, password);

            navigate('/discover');
        } catch (err) {
            console.log(err.message);
        }
    }

    const { values, onChange, onSubmit } = useForm(initialValues, registerHandler);

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
                        Create your account
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
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    autoComplete="username"
                                    value={values.username}
                                    onChange={onChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0CA9E8] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="profileImage" className="block text-sm font-medium leading-6 text-gray-900">
                                Profile image
                            </label>
                            <div className="mt-2">
                                <input
                                    id="profileImage"
                                    name="profileImage"
                                    type="text"
                                    required
                                    autoComplete="profileImage"
                                    value={values.profileImage}
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
                            <div className="flex items-center justify-between">
                                <label htmlFor="rePassword" className="block text-sm font-medium leading-6 text-gray-900">
                                    Repeat password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="rePassword"
                                    name="rePassword"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    value={values.rePassword}
                                    onChange={onChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0CA9E8] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-[#0CA9E8] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#008bb5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0CA9E8]"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <Link to="/log-in" className="font-semibold leading-6 text-[#0CA9E8] hover:text-[#008bb5]" >
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}