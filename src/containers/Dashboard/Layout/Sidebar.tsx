export const Sidebar = () => (
	<div className='sidebar'>
		<div className='sidebar_inner' data-simplebar>
			<ul>
				<li className='active'>
					<a href='feed.html'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							className='text-blue-600'
						>
							<path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
						</svg>
						<span> My Cards </span>{' '}
					</a>
				</li>
				<li>
					<a href='pages.html'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							className='text-blue-500'
						>
							<path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
						</svg>
						<span> Organizations </span>{' '}
					</a>
				</li>
				<li id='more-veiw' hidden>
					<a href='events.html'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							className='text-yellow-500'
						>
							<path
								fillRule='evenodd'
								d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
								clipRule='evenodd'
							/>
						</svg>
						<span> Events </span>
					</a>
				</li>
			</ul>
			<a
				href='#'
				className='see-mover h-10 flex my-1 pl-2 rounded-xl text-gray-600'
				uk-toggle='target: #more-veiw; animation: uk-animation-fade'
			>
				<span className='w-full flex items-center' id='more-veiw'>
					<svg
						className='  bg-gray-100 mr-2 p-0.5 rounded-full text-lg w-7'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
							clipRule='evenodd'
						/>
					</svg>
					See More
				</span>
				<span className='w-full flex items-center' id='more-veiw' hidden>
					<svg
						className='bg-gray-100 mr-2 p-0.5 rounded-full text-lg w-7'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
							clipRule='evenodd'
						/>
					</svg>
					See Less
				</span>
			</a>
			<div className='footer-links'>
				<a href='#'>About</a>
				<a href='#'>Blog </a>
				<a href='#'>Careers</a>
				<a href='#'>Support</a>
				<a href='#'>Contact Us </a>
				<a href='#'>Developer</a>
				<a href='#'>Terms of service</a>
			</div>
		</div>
		{/* sidebar overly for mobile */}
		<div className='side_overly' uk-toggle='target: #wrapper ; cls: is-collapse is-active' />
	</div>
);
