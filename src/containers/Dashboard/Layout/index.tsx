import { withAuth } from '@/components/HOC/withAuth';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

const DashboardLayout = () => (
	<div id='wrapper'>
		<Header />
		<Sidebar />
		<div className='main_content'>
			<div className='mcontainer'>
				<Outlet />
			</div>
		</div>
	</div>
);

export default withAuth(DashboardLayout);
