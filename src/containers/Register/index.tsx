import { BrandWithTagline } from '@/components';

const Register = () => {
	return (
		<div className='lg:flex max-w-5xl min-h-screen mx-auto p-6 py-10'>
			<div className='flex flex-col items-center lg: lg:flex-row lg:space-x-10'>
				<BrandWithTagline />
				<div className='lg:mt-0 lg:w-96 md:w-1/2 sm:w-2/3 mt-10 w-full'>
					<form className='p-6 space-y-4 relative bg-white shadow-lg rounded-lg'>
						<div>
							<div className='lg:text-2xl text-xl font-semibold mb-1'> Sign Up</div>
							<div className='text-base text-gray-600'> It’s quick and easy.</div>
						</div>
						<div className='grid lg:grid-cols-2 gap-5'>
							<input
								type='text'
								id='id_firstname'
								name='firstname'
								maxLength={30}
								placeholder='Your Name'
								className='with-border'
							/>
							<input
								type='text'
								id='id_lastname'
								name='lastname'
								maxLength={30}
								placeholder='Last Name'
								className='with-border'
							/>
						</div>
						<input
							type='email'
							id='id_email'
							name='email'
							placeholder='email@example.com'
							className='with-border'
						/>
						<input
							type='password'
							id='id_password1'
							name='password1'
							placeholder='******'
							className='with-border'
						/>
						<input
							type='password'
							id='id_password2'
							name='password2'
							placeholder='******'
							className='with-border'
						/>
						<p className='text-xs text-gray-400 pt-3'>
							By clicking Sign Up, you agree to our
							<a href='#' className='text-blue-700'>
								Terms of service
							</a>
							,
							<a href='#' className='text-blue-700'>
								Privacy Policy
							</a>{' '}
							and
							<a href='#' className='text-blue-700'>
								Cookies Policy
							</a>
							. You may receive SMS Notifications from us and can opt out any time.
						</p>
						<div className='flex'>
							<button
								type='submit'
								className='bg-blue-600 font-semibold mx-auto px-10 py-3 rounded-md text-center text-white'
							>
								Get Started
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
