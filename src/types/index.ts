export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  idealFor: string;
  tag: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Engagements' | 'Mehendi & Sangeet' | 'Receptions' | 'Corporate' | 'Private Celebrations';
  location: string;
  venueType: string;
  image: string;
  additionalImages?: string[];
  description: string;
  decorHighlights: string[];
  palette: string[];
}

export interface DestinationItem {
  id: string;
  city: string;
  tagline: string;
  description: string;
  image: string;
  signatureVenues: string[];
  vibe: string;
}

export interface TestimonialItem {
  id: string;
  names: string;
  event: string;
  location: string;
  quote: string;
  dateOrYear?: string;
  rating?: number;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface InquiryFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  eventType: string;
  eventDate: string;
  cityVenue: string;
  guestCount: string;
  approximateBudget: string;
  requirements: string;
}

export interface SavedInquiry extends InquiryFormData {
  id: string;
  submittedAt: string;
  status: 'Received' | 'In Review' | 'Contacted';
}
