export interface Profile {
	id: number;
	email: string;
	address: string;
	name: string;
	phone: string;
}

export interface AuthorizationData {
	email: string;
	password: string
}

export interface RegistrationData {
	email: string;
	password: string
	name: string
}