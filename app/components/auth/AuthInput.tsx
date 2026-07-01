import { FieldError } from "react-hook-form";

type Props = {
  label: string;
  placeholder: string;
  type?: string;
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function AuthInput({
  label,
  placeholder,
  type = "text",
  error,
  ...props
}: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>

      <input
        {...props}
        type={type}
        placeholder={placeholder}
        className={`
        w-full
        rounded-xl
        border
        px-4
        py-3
        outline-none
        transition

        ${error ? "border-red-500" : "border-zinc-300 dark:border-zinc-700"}

        dark:bg-zinc-900
        `}
      />

      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
