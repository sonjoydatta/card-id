export const initialValues = {
	email: '',
	password: '',
};

export const initialErrors = {
	email: '',
	password: '',
};

export const validateForm = (
	values: Partial<typeof initialValues>
): Partial<typeof initialErrors> => {
	const errors: Partial<typeof initialErrors> = {};

	if (values && Object.keys(values).length > 0) {
		for (const key of Object.keys(values) as (keyof typeof initialValues)[]) {
			if (key in initialErrors) {
				switch (key) {
					case 'email':
						if (!values.email) {
							errors.email = 'Email is required';
						} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
							errors.email = 'Email is invalid';
						} else {
							errors.email = '';
						}
						break;
					case 'password':
						if (!values.password) {
							errors.password = 'Password is required';
						} else if (values.password.length < 6) {
							errors.password = 'Password must be at least 6 characters';
						} else {
							errors.password = '';
						}
						break;
					default:
						break;
				}
			}
		}
	}

	return errors;
};
