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