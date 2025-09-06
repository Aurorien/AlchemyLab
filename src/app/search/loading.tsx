import { Loader } from "lucide-react";

// Next.js will use this automatically while this folder page.tsx data is loading
export default function Loading() {
  return (
    <div>
      <Loader />
      <p>Loading...</p>
    </div>
  );
}
