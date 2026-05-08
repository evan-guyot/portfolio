import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const headersList = await headers();

  const language = headersList.get("accept-language") || "";

  const isFrench = language.toLowerCase().startsWith("fr");

  redirect(isFrench ? "/fr" : "/en");
}
