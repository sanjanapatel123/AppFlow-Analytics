import api from "./api";
import { LoginPayload, LoginResponse } from "@/types/auth";

export async function loginUser(data: LoginPayload): Promise<LoginResponse> {
  /**
   * Fake delay
   */

  await new Promise((resolve) => setTimeout(resolve, 1500));

  /**
   * Replace this later
   */

  // const response = await api.post("/auth/login", data);
  // return response.data;

  return {
    user: {
      id: "1",
      name: "Sanjana Patel",
      email: data.email,
      role: "admin",
    },

    token: "fake-jwt-token",
  };
}
