import { cookies } from "next/headers";
// export const dynamic = "force-static";

const getSession = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("session")?.value || "No session found";
};

const getData = async () => {
  "use cache";
  return "something";
}

// Trang chủ vẫn là dynamic
// Bạn kh nên ép trang chủ thành static
export default async function Home() {
  // const cookieStore = await cookies();
  const session = await getSession();
  const data = await getData();
  return (
    <div>
      <h1>Home Page</h1>
      {/* {cookieStore.get("session")?.value} */}
      {session}
      {data}
    </div>
  );
}