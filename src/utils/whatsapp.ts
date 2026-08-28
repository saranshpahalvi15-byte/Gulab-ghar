import { siteConfig } from '../config/siteConfig';
import { InquiryFormData } from '../types';

export function getGeneralWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || siteConfig.defaultWhatsAppMessage;
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getServiceWhatsAppUrl(serviceTitle: string, subtitle?: string): string {
  const serviceDetail = subtitle ? ` (${subtitle})` : '';
  const message = `Hi Gulaab Ghar team, I am inquiring directly regarding your "${serviceTitle}"${serviceDetail} service for an upcoming celebration. Could you please share the bespoke package details, portfolio, and current availability?`;
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getPortfolioWhatsAppUrl(lookTitle: string, category: string): string {
  const message = `Hi Gulaab Ghar, I came across your "${lookTitle}" (${category}) setup on your website. I love this aesthetic and would like to discuss recreating a similar bespoke concept for my event.`;
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getInquiryWhatsAppUrl(data: InquiryFormData): string {
  const text = `*New Event Inquiry for Gulaab Ghar* 🌸
-----------------------------
*Name:* ${data.fullName}
*Contact:* ${data.phoneNumber}
*Email:* ${data.email}
*Event Type:* ${data.eventType}
*Event Date:* ${data.eventDate || 'To be decided'}
*City / Venue:* ${data.cityVenue}
*Guest Count:* ${data.guestCount}
*Approx. Budget:* ${data.approximateBudget}
*Requirements / Vision:* 
${data.requirements || 'Bespoke planning & decor inquiry'}
-----------------------------
Looking forward to discussing our celebration with the Gulaab Ghar team!`;

  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
