export const dynamic = "force-static";

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