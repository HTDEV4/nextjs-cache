export const dynamic = "force-dynamic";

import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  return (
    <div>
      <h1>Home Page</h1>
      {cookieStore.get("session")?.value}
    </div>
  );
}