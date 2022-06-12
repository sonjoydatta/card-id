/* eslint-disable no-empty */
import { BrandWithTagline } from '@/components';
import { authAPI } from '@/libs/api/authAPI';
import { authService } from '@/libs/auth';
import { useForm, useMounted } from '@/libs/hooks';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { initialErrors, initialValues, validateForm } from './validations';

const Login = () => {
	const [isLoading, setLoading] = useState(false);
	const isMounted = useMounted();
	const navigate = useNavigate();

	const handleFormSubmit = async (payload: IAPI.LoginParams) => {
		setLoading(true);

		try {
			const { success, data, message } = await authAPI.login(payload);
			if (!success) {
				throw new Error(message);
			}

			authService.setToken(data.access_token);
			authService.setRefreshToken(data.refresh_token);
			navigate('/dashboard');
		} catch (error) {
		} finally {
			if (isMounted()) {
				setLoading(false);
			}
		}
	};

	const { values, handleSubmit, handleChange } = useForm({
		initialValues,
		initialErrors,
		onSuccess: handleFormSubmit,
		validate: validateForm,
	});

	return (
		<div className='lg:flex max-w-5xl min-h-screen mx-auto p-6 py-10'>
			<div className='flex flex-col items-center lg: lg:flex-row lg:space-x-10'>
				<BrandWithTagline />
				<div className='lg:mt-0 lg:w-96 md:w-1/2 sm:w-2/3 mt-10 w-full'>
					<form
						className='p-6 space-y-4 relative bg-white shadow-lg rounded-lg'
						onSubmit={handleSubmit}
					>
						<input
							type='email'
							id='id_email'
							name='email'
							placeholder='Email Address'
							className='with-border'
							value={values.email}
							onChange={handleChange}
						/>
						<input
							type='password'
							id='id_password'
							name='password'
							placeholder='Password'
							className='with-border'
							value={values.password}
							onChange={handleChange}
						/>
						<button
							type='submit'
							className='bg-blue-600 font-semibold p-3 rounded-md text-center text-white w-full'
							disabled={isLoading}
						>
							Log In
						</button>
						<Link to='/forgot-password' className='text-blue-500 text-center block'>
							Forgot Password?
						</Link>
						<hr className='pb-3.5' />
						<div className='flex'>
							<Link
								to='/register'
								type='button'
								className='bg-green-600 hover:bg-green-500 hover:text-white font-semibold py-3 px-5 rounded-md text-center text-white mx-auto'
							>
								Create New Account
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
