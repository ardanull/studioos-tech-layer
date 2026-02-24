import { create } from "zustand";

type BillingState = {
  plan: "free" | "pro" | "team";
  price: number;
  setPlan: (plan: BillingState["plan"]) => void;
};

export const useBillingStore = create<BillingState>((set) => ({
  plan: "free",
  price: 0,
  setPlan: (plan) =>
    set(() => ({
      plan,
      price: plan === "pro" ? 29 : plan === "team" ? 99 : 0,
    })),
}));
