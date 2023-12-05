import { IPricing } from "@/components";

export const PRICING: IPricing[] = [
  {
    plan: "Premium",
    price: 399,
    priceType: "month",
    description: "That's only 13.30$ per meal",
    items: [
      {
        item: "1 meal every day",
        value: true,
      },
      {
        item: "Order 24/7",
        value: true,
      },
      {
        item: "Access to newest creations",
        value: true,
      },
      {
        item: "Free delivery",
        value: true,
      },
    ],
    primary: true,
  },
  {
    plan: "Pro",
    price: 149,
    priceType: "month",
    description: "That's only 14.90$ per meal",
    items: [
      {
        item: "1 meal 10 days/month",
        value: true,
      },
      {
        item: "Order 24/7",
        value: true,
      },
      {
        item: "Access to newest creations",
        value: true,
      },
      {
        item: "Free delivery",
        value: true,
      },
    ],
  },
  {
    plan: "Starter",
    price: 19,
    priceType: "meal",
    items: [
      {
        item: "1 meal",
        value: true,
      },
      {
        item: "Order from 8 am to 12 pm",
        value: true,
      },
      {
        item: "Access to newest creations",
        value: false,
      },
      {
        item: "Free delivery",
        value: true,
      },
    ],
  },
];
