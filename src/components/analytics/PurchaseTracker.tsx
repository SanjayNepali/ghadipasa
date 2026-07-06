"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

interface PurchaseTrackerItem {
  item_id: string;
  item_name: string;
  price: number;
  quantity: number;
}

interface PurchaseTrackerProps {
  orderId: string;
  total: number;
  items: PurchaseTrackerItem[];
}

export default function PurchaseTracker({ orderId, total, items }: PurchaseTrackerProps) {
  useEffect(() => {
    trackEvent("purchase", {
      transaction_id: orderId,
      currency: "NPR",
      value: total,
      items,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}