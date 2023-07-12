import { redirect } from "next/navigation";
export default function Home() {
  // Temporary redirect for WIP Homepage
  redirect("/docs/install");
  return (
    <div>
      <h1 className="mb-8 text-center text-3xl font-bold">Arke UI</h1>
    </div>
  );
}
