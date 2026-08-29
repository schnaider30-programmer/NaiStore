import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaGithub,
  FaSlack,
} from "react-icons/fa";
import type { ContactData, Link, SocialLink } from "@/lib/definition";
import { Clock, GitCompareArrows, Headset, Mail, MapPin, Phone, ShieldCheck, Truck } from "lucide-react";

export const headerData: Link[] = [
  { title: "Home", href: "/" },
  { title: "Shop", href: "/shop" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
  { title: "Hot Deal", href: "/deal" },
];

export const SocialLinks: SocialLink[] = [
  {
    title: "Facebook",
    href: "www.facebook.com",
    icon: <FaFacebook className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "www.github.com",
    icon: <FaGithub className="w-5 h-5" />,
  },
  {
    title: "Youtube",
    href: "www.youtube.com",
    icon: <FaYoutube className="w-5 h-5" />,
  },
  {
    title: "LinkedIn",
    href: "www.linkedin.com",
    icon: <FaLinkedin className="w-5 h-5" />,
  },
  {
    title: "Slack",
    href: "www.slack.com",
    icon: <FaSlack className="w-5 h-5" />,
  },
];

export const ContactsData: ContactData[] = [
  {
    title: "Visit US",
    subtitle: "Delmas, Haiti",
    icon: (
      <MapPin className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Call Us",
    subtitle: "+509 4200 3050",
    icon: (
      <Phone className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Working Hours",
    subtitle: "Mon - Sat 7h00 AM - 4h00 PM",
    icon: (
      <Clock className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Email Us",
    subtitle: "naistore@gmailcom",
    icon: (
      <Mail className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
];

export const quickLinksData: Link[] = [
  {
    title: "About us",
    href: "/about",
  },
  {
    title: "Contact us",
    href: "/contact",
  },
  {
    title: "Terms & Conditions",
    href: "/terms",
  },
  {
    title: "Privacy Policy",
    href: "/privacy",
  },
  {
    title: "FAQs",
    href: "/faqs",
  },
  {
    title: "Help",
    href: "/help",
  },
];

export const CategoriesData: Link[] = [
  { title: "Mobiles", href: "mobiles" },
  { title: "Appliances", href: "appliances" },
  { title: "Smartphones", href: "smartphones" },
  { title: "Air Conditions", href: "air-conditionners" },
  { title: "Washing Machine", href: "washing-machine" },
  { title: "Kitchen Appliances", href: "kitchen-appliances" },
  { title: "Gadget Accessories", href: "gadget-accessories" },
];

export const ProductType = [
  { title: "Gadget", value: "gadget" },
  { title: "Appliances", value: "appliances" },
  { title: "Refrigerators", value: "refrigerators" },
  { title: "Others", value: "others" },
];

export const extraData = [
  {
    title: "Free Delivery",
    description: "Free shipping over $100",
    icon: <Truck size={45} />,
  },
  {
    title: "Free Return",
    description: "Free shipping over $100",
    icon: <GitCompareArrows size={45} />,
  },
  {
    title: "Customer Support",
    description: "Friendly 27/7 customer support",
    icon: <Headset size={45} />,
  },
  {
    title: "Money Back guarantee",
    description: "Quality checked by our team",
    icon: <ShieldCheck size={45} />,
  },
];
