import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Login = lazy(() => import('@/containers/Login'));
const Register = lazy(() => import('@/containers/Register'));
const ForgotPassword = lazy(() => import('@/containers/ForgotPassword'));
const VerifyOTP = lazy(() => import('@/containers/VerifyOTP'));

const DashboardLayout = lazy(() => import('@/containers/Dashboard/Layout'));
const Dashboard = lazy(() => import('@/containers/Dashboard/MyCards'));

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='register' element={<Register />} />
					<Route path='forgot-password' element={<ForgotPassword />} />
					<Route path='verify-otp' element={<VerifyOTP />} />
					<Route path='dashboard' element={<DashboardLayout />}>
						<Route path='' element={<Dashboard />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}

export default App;
