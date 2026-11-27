/**
 * Centralized, configurable contact & social channel configuration for YSA Media.
 * Keep unconfirmed channels as null so no invented numbers or destinations are published.
 */

export const contactConfig = {
  companyName: 'YSA MEDIA',
  domain: 'https://ysamedia.ae',

  // Confirmed corporate email (verified across Navbar, Footer, and site metadata)
  email: 'info@ysamedia.ae',

  // WhatsApp: set digits-only international number (e.g. '971501234567') once confirmed
  whatsappNumber: null,
  whatsappDisplay: null,

  // Direct telephone: set E.164 & display string once confirmed (e.g. '+97141234567')
  phoneNumber: null,
  phoneDisplay: null,

  // Confirmed general location (do not invent street address unless confirmed)
  location: {
    cityCountryEn: 'Dubai, United Arab Emirates',
    cityCountryAr: 'دبي، الإمارات العربية المتحدة',
    regionNoteEn: 'Available for regional & international productions',
    regionNoteAr: 'متاحون للإنتاجات الإقليمية والدولية',
    mapsQuery: 'Dubai,+United+Arab+Emirates',
    mapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Dubai,+United+Arab+Emirates',
    mapsEmbedUrl: 'https://www.google.com/maps?q=Dubai,+United+Arab+Emirates&output=embed',
  },

  // Official verified social profiles only (add confirmed URLs as they are provided)
  socials: [
    {
      id: 'youtube',
      nameEn: 'YouTube',
      nameAr: 'يوتيوب',
      handle: '@KAY2TELEVISION',
      url: 'https://youtube.com/@KAY2TELEVISION',
    },
    // Configurable placeholders — uncomment & supply official URLs when confirmed:
    // { id: 'instagram', nameEn: 'Instagram', nameAr: 'إنستغرام', handle: '@ysamedia', url: '' },
    // { id: 'linkedin', nameEn: 'LinkedIn', nameAr: 'لينكدإن', handle: 'YSA Media', url: '' },
    // { id: 'facebook', nameEn: 'Facebook', nameAr: 'فيسبوك', handle: 'YSA Media', url: '' },
    // { id: 'tiktok', nameEn: 'TikTok', nameAr: 'تيك توك', handle: '@ysamedia', url: '' },
  ],
};

/**
 * Builds a WhatsApp deep link with a prefilled enquiry message.
 * Uses the confirmed number if configured, otherwise opens WhatsApp share with prefilled text.
 */
export const buildWhatsAppHref = (message) => {
  const encoded = encodeURIComponent(message);
  if (contactConfig.whatsappNumber) {
    const cleanNumber = contactConfig.whatsappNumber.replace(/[^\d]/g, '');
    return `https://wa.me/${cleanNumber}?text=${encoded}`;
  }
  return `https://wa.me/?text=${encoded}`;
};

/**
 * Builds a mailto link with subject & prefilled body using the confirmed email address.
 */
export const buildMailtoHref = (subject = '', body = '') => {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString();
  return `mailto:${contactConfig.email}${query ? `?${query}` : ''}`;
};

/**
 * Builds a tel: link only when a confirmed telephone number is configured.
 */
export const buildTelHref = () => {
  if (!contactConfig.phoneNumber) return null;
  return `tel:${contactConfig.phoneNumber.replace(/\s+/g, '')}`;
};
