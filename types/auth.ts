export type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
};

export type LoginPayload = {
  email: string;
  password: string;
  remember: boolean;
};

export type LoginResponse = {
  user: User;
  token: string;
};