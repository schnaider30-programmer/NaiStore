import { getDealProducts } from "@/sanity/queries";
import React from "react";

export type ContactData = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

export type Link = {
    title: string;
    href: string;
}

export type SocialLink = {
    title: string;
    href: string;
    icon: React.ReactNode;
}

export type Product = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "product";

  name: string;
  description: string;
  price: number;
  discount?: number; // optional
  stock: number;
  status: "new" | "used" | "refurbished" | string; // you can refine later
  variant?: string;

  isFeatured?: boolean;
  categories?: string[];

  brand?: {
    _ref: string;
    _type: "reference";
  };

  slug: {
    _type: "slug";
    current: string;
  };

  images: {
    _key: string;
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  }[];
};

export type DealProduct = NonNullable<
  Awaited<ReturnType<typeof getDealProducts>>
>[number];