"use client";

import { useState } from "react";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { FieldError } from "react-hook-form";

type Props = {
  label: string;
  placeholder: string;
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function PasswordInput({
  label,
  placeholder,
  error,
  ...props
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>

      <div className="relative">
        <input
          {...props}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className={`
          w-full
          rounded-xl
          border
          px-4
          py-3
          pr-12
          outline-none

          ${error ? "border-red-500" : "border-zinc-300 dark:border-zinc-700"}

          dark:bg-zinc-900
          `}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2"
        >
          {showPassword ? <HiEyeSlash size={20} /> : <HiEye size={20} />}
        </button>
      </div>

      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
