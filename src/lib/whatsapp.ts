export const WHATSAPP_NUMBER = "237671403756";
export const PHONE_DISPLAY = "+237 671 403 756";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Osmon+Service+Cameroon";

export function whatsappLink(message = "Hello Osmon Service, I would like to inquire about your services.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
