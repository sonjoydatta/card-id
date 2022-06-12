import { BrandWithTagline } from '@/components';

const ForgotPassword = () => {
	return (
		<div className='lg:flex max-w-5xl min-h-screen mx-auto p-6 py-10'>
			<div className='flex flex-col items-center lg: lg:flex-row lg:space-x-10'>
				<BrandWithTagline />
				<div className='lg:mt-0 lg:w-96 md:w-1/2 sm:w-2/3 mt-10 w-full'>
					<form className='p-6 space-y-4 relative bg-white shadow-lg rounded-lg'>
						<input
							type='email'
							id='id_username'
							name='username'
							placeholder='Email Address'
							className='with-border'
						/>
						<input
							type='password'
							id='id_password'
							name='password'
							placeholder='Password'
							className='with-border'
						/>
						<input
							type='password'
							id='id_password'
							name='password'
							placeholder='Password confirm'
							className='with-border'
						/>
						<button
							type='submit'
							className='bg-blue-600 font-semibold p-3 rounded-md text-center text-white w-full'
						>
							Change Password
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
