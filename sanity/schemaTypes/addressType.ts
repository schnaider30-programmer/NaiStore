import {HomeIcon} from "@sanity/icons/Home"
import { defineField, defineType } from "sanity";

export const addressType = defineType({
    name: "address",
    title: "Adresses",
    type: "document",
    icon: HomeIcon,
    fields: [
        defineField({
            name: "name",
            title: "Address Name",
            type: "string",
            description: "A friendly name for this address (e.g. Home, Work)",
            validation: (Rule) => Rule.required().max(50),
        }),
        defineField({
            name: "email",
            title: "User Email",
            type: "email",
        }),
        defineField({
            name: "address",
            title: "Street Adress",
            type: "string",
            description: "The string address including apartement/unit number",
            validation: (Rule) => Rule.required().min(5).max(100),
        }),
        defineField({
            name: "city",
            title: "City",
            type: "string",
            validation: (Rule) => Rule.required().max(50),
        }),
        defineField({
            name: "state",
            title: "State",
            type: "string",
            description: "Two letter state code (e.g. NY, CA",
            validation: (Rule) => Rule.required().length(50).uppercase(),
        }),
        defineField({
            name: "zip",
            title: "ZIP Code",
            type: "string",
            description: "Format: 12345 or 12345-6789",
            validation: (Rule) => Rule
                .required()
                .regex(/^\d{5}(\d{4})?$/, { name: "zipcode", invert: false })
                .custom((zip: string | undefined) => {
                    if (!zip) {
                        return "ZIP code is required";
                    }
                    if (!zip.match(/^\d{5}(\d{4})?$/,)) {
                        return "Please enter a valid ZIP code (e.g 12345 or 12345-6789";
                    }
                    return true;
            }),
        }),
        defineField({
            name: "defaulr",
            title: "Default Address",
            type: "boolean",
            description:"Is this the dafault shipping address?",
        }),
        defineField({
            name: "createdAt",
            title: "Created At",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
        })
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "address",
            city: "city",
            state: "state",
            isDefault: "default",
        },
        prepare: ({ title, subtitle, city, state, isDefault }) => {
            return {
                title: `${title} ${isDefault ? "default" : ""}`,
                subtitle: `${subtitle}, ${city}, ${state}`,
            }
        }
    }
})