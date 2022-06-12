import { authService } from '@/libs/auth';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
	const navigate = useNavigate();

	const handleLogout = useCallback(
		(e: any) => {
			e.preventDefault();
			authService.removeTokens();
			navigate('/');
		},
		[navigate]
	);

	return (
		<header>
			<div className='header_wrap'>
				<div className='header_inner mcontainer'>
					<div className='left_side'>
						<span className='slide_menu' uk-toggle='target: #wrapper ; cls: is-collapse is-active'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={24} height={24}>
								<path d='M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z' fill='currentColor' />
							</svg>
						</span>
						<div id='logo'>
							<a href='feed.html'>
								<img src='/assets/images/logo.png' alt='' />
								<img src='/assets/images/logo-mobile.png' className='logo_mobile' alt='' />
							</a>
						</div>
					</div>
					<div className='header-search-icon' uk-toggle='target: #wrapper ; cls: show-searchbox'>
						{' '}
					</div>
					<div className='header_search'>
						<i className='uil-search-alt' />
						<input
							type='text'
							className='form-control'
							placeholder='Search for Friends , Videos and more..'
							autoComplete='off'
						/>
						<div uk-drop='mode: click' className='header_search_dropdown'>
							<h4 className='search_title'> Recently </h4>
							<ul>
								<li>
									<a href='#'>
										<img src='/assets/images/avatars/avatar-1.jpg' alt='' className='list-avatar' />
										<div className='list-name'> Erica Jones </div>
									</a>
								</li>
								<li>
									<a href='#'>
										<img src='/assets/images/avatars/avatar-2.jpg' alt='' className='list-avatar' />
										<div className='list-name'> Coffee Addicts </div>
									</a>
								</li>
								<li>
									<a href='#'>
										<img src='/assets/images/avatars/avatar-3.jpg' alt='' className='list-avatar' />
										<div className='list-name'> Mountain Riders </div>
									</a>
								</li>
								<li>
									<a href='#'>
										<img src='/assets/images/avatars/avatar-5.jpg' alt='' className='list-avatar' />
										<div className='list-name'> Erica Jones </div>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='right_side'>
						<div className='header_widgets'>
							<a href='pages-upgrade.html' className='is_link'>
								{' '}
								Upgrade{' '}
							</a>
							<a href='#' className='is_icon' uk-tooltip='title: Cart'>
								<svg fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
									<path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
								</svg>
							</a>
							<a href='#' className='is_icon' uk-tooltip='title: Notifications'>
								<svg fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
									<path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
								</svg>
								<span>3</span>
							</a>
							<a href='#' className='is_icon' uk-tooltip='title: Message'>
								<svg fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z'
										clipRule='evenodd'
									/>
								</svg>
								<span>4</span>
							</a>
							<a href='#'>
								<img src='/assets/images/avatars/avatar-2.jpg' className='is_avatar' alt='' />
							</a>
							<div uk-drop='mode: click;offset:5' className='header_dropdown profile_dropdown'>
								<a href='timeline.html' className='user'>
									<div className='user_avatar'>
										<img src='/assets/images/avatars/avatar-2.jpg' alt='' />
									</div>
									<div className='user_name'>
										<div> Farjanul Nayem </div>
										<span> farjanul10@gmail.com </span>
									</div>
								</a>
								<hr />
								<a href='pages-upgrade.html' className='is-link'>
									<svg fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z'
											clipRule='evenodd'
										/>
									</svg>
									Upgrade To Premium
								</a>
								<hr />
								<a href='http://demo.foxthemes.net/socialitev2.2/page-setting.html'>
									<svg fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
											clipRule='evenodd'
										/>
									</svg>
									My Account
								</a>
								<a href='groups.html'>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
										<path
											fillRule='evenodd'
											d='M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z'
											clipRule='evenodd'
										/>
									</svg>
									Manage Pages
								</a>
								<a href='pages-setting.html'>
									<svg fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
										<path d='M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z' />
										<path
											fillRule='evenodd'
											d='M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z'
											clipRule='evenodd'
										/>
									</svg>
									My Billing
								</a>
								<a href='#' id='night-mode' className='btn-night-mode'>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
										<path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
									</svg>
									Night mode
									<span className='btn-night-mode-switch'>
										<span className='uk-switch-button' />
									</span>
								</a>
								<a href='#' onClick={handleLogout}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
										/>
									</svg>
									Log Out
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
