import { redirect } from "next/navigation";

export default function Home() {
  const sessionMock = true;

  if (sessionMock) {
    redirect("/dashboard"); // Logged in → Dashboard
  } else {
    redirect("/login"); // Not logged in → Login
  }
}
