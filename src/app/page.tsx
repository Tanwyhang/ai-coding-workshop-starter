"use client";

import { useState } from "react";

export default function Home() {
  const [orders, setOrders] = useState(0);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-6 rounded-2xl bg-white p-8 shadow-lg dark:bg-zinc-900">
        <span className="text-6xl">🍛</span>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Today&apos;s Special
          </h1>
          <p className="text-lg font-medium text-zinc-800 dark:text-zinc-200">
            Nasi Lemak Deluxe — $8.90
          </p>
          <p className="max-w-xs text-sm text-zinc-500 dark:text-zinc-400">
            Fragrant coconut rice, crispy fried chicken, sambal, and a soft-boiled egg.
          </p>
        </div>
        <button
          onClick={() => setOrders((n) => n + 1)}
          className="w-full rounded-full bg-foreground px-5 py-3 text-base font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Add to Order
        </button>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {orders} in your order
        </p>
      </main>
    </div>
  );
}
