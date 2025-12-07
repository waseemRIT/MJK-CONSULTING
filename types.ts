export interface ServiceItem {
  title: string;
  description?: string;
  points: string[];
  iconName: string; // We will map string names to icons
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface NavItem {
  label: string;
  path: string;
}