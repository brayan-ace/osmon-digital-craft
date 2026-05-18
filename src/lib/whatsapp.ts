export const WHATSAPP_NUMBER = "2347066648166";
export const PHONE_DISPLAY = "+234 706 664 8166";
export const MAPS_URL = "https://maps.app.goo.gl/er6kKdaBfC1GtjE37";

export function whatsappLink(message = "Hello Rightwave Infotech, I would like to inquire about your services.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
