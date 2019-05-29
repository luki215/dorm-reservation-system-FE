export interface User {
  admin: boolean;
  email: string;
  id: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}
