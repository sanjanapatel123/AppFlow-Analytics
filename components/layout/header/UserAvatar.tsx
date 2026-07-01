"use client";

type Props = {
  name: string;
};

export default function UserAvatar({ name }: Props) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      bg-black
      text-sm
      font-semibold
      text-white
      dark:bg-white
      dark:text-black
      "
    >
      {initials}
    </div>
  );
}
