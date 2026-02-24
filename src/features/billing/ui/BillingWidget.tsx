"use client";

import React from "react";
import type { BillingConfig } from "../types";
import { useBillingStore } from "../state/store";

export function BillingWidget({ plan }: BillingConfig) {
  const { price, setPlan } = useBillingStore();

  React.useEffect(() => setPlan(plan), [plan, setPlan]);

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 12 }}>
      <h3 style={{ margin: 0 }}>Billing</h3>
      <p style={{ margin: "8px 0" }}>Selected plan: <b>{plan}</b></p>
      <p style={{ margin: "8px 0" }}>Price: <b>{price}</b></p>
    </div>
  );
}
