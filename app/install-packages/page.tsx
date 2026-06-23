import { redirect } from "next/navigation"

/* The pricing page lives at /pricing. Keep this old path working. */
export default function InstallPackagesRedirect() {
  redirect("/pricing")
}
