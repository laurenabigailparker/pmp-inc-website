import { Locale } from "./i18n";

export async function getMessages(locale: Locale) {
  switch (locale) {
    case "es":
      return (await import("../messages/es")).default;
    case "ru":
      return (await import("../messages/ru")).default;
    case "ja":
      return (await import("../messages/ja")).default;
    case "en":
    default:
      return (await import("../messages/en")).default;
  }
}