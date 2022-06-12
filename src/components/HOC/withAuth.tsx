import { useAuth } from '@/libs/auth';
import { ComponentType } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const withAuth = <T extends object>(WrappedComponent: ComponentType<T>) => {
	return (props: T) => {
		const location = useLocation();
		const { isAuthenticated } = useAuth();

		if (!isAuthenticated) {
			return <Navigate to='/' state={{ from: location }} />;
		}

		return <WrappedComponent {...props} />;
	};
};
