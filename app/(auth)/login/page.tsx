"use client";

import AuthCard from "../../components/auth/AuthCard";
import AuthHeader from "../../components/auth/AuthHeader";
import AuthInput from "../../components/auth/AuthInput";
import PasswordInput from "../../components/auth/PasswordInput";

import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, type LoginFormData } from "../../../schema/auth.schema";

import { useLogin } from "@/hooks/useLogin";

import { useEffect } from "react";
import { AppToast } from "@/lib/toast";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      remember: true,
    },
  });

  const router = useRouter();

  const loginMutation = useLogin();

  const auth = useAuth();

  async function onSubmit(data: LoginFormData) {
    try {
      const response = await loginMutation.mutateAsync(data);

      auth.login(response.user, response.token, data.remember);

      AppToast.success("Login successful");

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated, router]);

  return (
    <AuthCard>
      <AuthHeader title="Welcome Back" subtitle="Login to continue" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <AuthInput
          label="Email"
          placeholder="Enter email"
          error={errors.email}
          {...register("email")}
        />
        <PasswordInput
          label="Password"
          placeholder="Enter password"
          error={errors.password}
          {...register("password")}
        />
        <div className="flex items-center gap-2">
          <input type="checkbox" {...register("remember")} />

          <label className="text-sm">Remember Me</label>
        </div>
        {loginMutation.isError && (
          <div
            className="
    rounded-xl
    bg-red-50
    border
    border-red-200
    p-3

    text-sm
    text-red-600
    "
          >
            Invalid email or password
          </div>
        )}
        <button
          type="submit"
          disabled={loginMutation.isPending}
          className="
  w-full
  rounded-xl
  bg-black
  py-3
  text-white

  disabled:opacity-60
  disabled:cursor-not-allowed

  dark:bg-white
  dark:text-black
  "
        >
          {loginMutation.isPending ? "Signing In..." : "Login"}
        </button>
      </form>
    </AuthCard>
  );
}
