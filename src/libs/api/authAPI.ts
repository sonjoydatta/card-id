import { config } from '@/config';
import { LoginParams, LoginResponse } from './@types';
import { HttpService } from './httpService';

class AuthAPI {
	constructor(private http: HttpService) {}

	login(payload: LoginParams) {
		return this.http.post<LoginResponse>('user/login/', payload, {
			headers: {
				'grant-type': 'password',
				'client-id': config.clientID,
				'client-secret': config.clientSecret,
			},
		});
	}
}

const httpInstance = new HttpService(config.apiURL);
export const authAPI = new AuthAPI(httpInstance);
