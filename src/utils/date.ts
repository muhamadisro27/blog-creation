export const formattedNumber = (num: number) =>
  new Intl.NumberFormat().format(num)

export function formatDateTime(timestamp_ms: number): string {
  const date = new Date(timestamp_ms)

  const formatted = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "full",
  }).format(date)

  return formatted
}
