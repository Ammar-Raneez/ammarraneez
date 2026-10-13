import { useEffect } from "react";

const longDate = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

// "2026-06-10" -> "10 June 2026". Parsed as UTC noon so no time zone shifts the day.
export const formatDate = (iso) => longDate.format(new Date(`${iso}T12:00:00Z`));

export function useDocumentTitle(title) {
  useEffect(() => {
    if (title) document.title = `${title} | Ammar Raneez`;
  }, [title]);
}
