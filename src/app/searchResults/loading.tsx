import { Loading } from "@/components";

// Next.js will use this automatically while this folder page.tsx data is loading
export default function PageLoading() {
  console.log("Loading component rendered");

  return <Loading />;
}
