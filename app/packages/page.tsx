import { redirect } from "next/navigation"

/* Pricing now lives at /pricing. Keep this older path working. */
export default function PackagesRedirect() {
  redirect("/pricing")
}
