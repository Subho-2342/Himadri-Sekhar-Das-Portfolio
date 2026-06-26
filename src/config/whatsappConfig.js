
// WhatsApp Configuration
// Update this number to change the WhatsApp contact across the entire site
export const WHATSAPP_NUMBER = '919474703110'; // Format: Country code + number (no spaces or special characters)
export const WHATSAPP_DISPLAY = '+91 94747 03110'; // Display format for UI

// Format WhatsApp URL
export const getWhatsAppUrl = (message = '') => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodedMessage}` : ''}`;
};
