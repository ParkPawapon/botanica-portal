export function formatScientificName(value: string) {
  return value.trim();
}

export function formatDisplayDate(date: Date, locale = "en") {
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}
