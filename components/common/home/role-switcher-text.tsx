"use client";

import useRoleSwitcher from "@/hooks/use-role-switcher";

export default function RoleSwitcherText() {
  const role = useRoleSwitcher({
    roles: [
      "FULLSTACK DEVELOPER",
      "FRONTEND DEVELOPER",
      "BACKEND DEVELOPER",
      "MOBILE DEVELOPER",
    ],
  });

  return (
    <span className="text-cyan-400 block text-[1.75rem] font-bold">{role}</span>
  );
}
