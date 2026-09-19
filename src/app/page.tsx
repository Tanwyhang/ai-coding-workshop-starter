"use client";

import { useEffect, useState } from "react";

type MenuItem = {
  id: string;
  name: string;
  price: number;
  emoji: string;
  desc: string;
};

const MENU: MenuItem[] = [
  {
    id: "nasi-lemak",
    name: "Nasi Lemak Deluxe",
    price: 8.9,
    emoji: "🍛",
    desc: "Coconut rice, fried chicken, sambal, egg.",
  },
  {
    id: "chicken-rice",
    name: "Chicken Rice",
    price: 6.5,
    emoji: "🍗",
    desc: "Poached chicken, fragrant rice, chilli sauce.",
  },
  {
    id: "laksa",
    name: "Laksa",
    price: 7.2,
    emoji: "🍜",
    desc: "Spiced coconut noodle soup, prawns, tofu puff.",
  },
  {
    id: "teh-tarik",
    name: "Teh Tarik",
    price: 2.5,
    emoji: "🥤",
    desc: "Hand-pulled milk tea, served hot.",
  },
];

const STAGES = ["Order received", "Preparing ingredients", "Cooking", "Plating"];
const STAGE_DURATION_MS = 1400;

type OrderState = "idle" | "cooking" | "ready";

export default function Home() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [orderState, setOrderState] = useState<OrderState>("idle");
  const [stageIndex, setStageIndex] = useState(0);

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const cartTotal = MENU.reduce(
    (sum, item) => sum + (cart[item.id] ?? 0) * item.price,
    0
  );

  useEffect(() => {
    if (orderState !== "cooking") return;
    if (stageIndex >= STAGES.length - 1) {
      const timeout = setTimeout(() => setOrderState("ready"), STAGE_DURATION_MS);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => setStageIndex((i) => i + 1), STAGE_DURATION_MS);
    return () => clearTimeout(timeout);
  }, [orderState, stageIndex]);

  function addItem(id: string) {
    setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  }

  function removeItem(id: string) {
    setCart((c) => {
      const next = { ...c };
      if (!next[id]) return c;
      next[id] -= 1;
      if (next[id] <= 0) delete next[id];
      return next;
    });
  }

  function confirmOrder() {
    if (cartCount === 0) return;
    setStageIndex(0);
    setOrderState("cooking");
  }

  function startNewOrder() {
    setCart({});
    setOrderState("idle");
    setStageIndex(0);
  }

  const progressPct =
    orderState === "ready"
      ? 100
      : orderState === "cooking"
      ? Math.round((stageIndex / (STAGES.length - 1)) * 90)
      : 0;

  return (
    <div className="flex min-h-screen flex-1 bg-zinc-50 font-sans dark:bg-black">
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 p-6 sm:flex-row sm:p-10">
        {/* Left: Menu */}
        <section className="flex flex-1 flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg dark:bg-zinc-900">
          <h1 className="text-xl font-semibold text-black dark:text-zinc-50">
            Menu
          </h1>

          <ul className="flex flex-col gap-3">
            {MENU.map((item) => {
              const qty = cart[item.id] ?? 0;
              return (
                <li
                  key={item.id}
                  className="flex items-center gap-3 rounded-xl border border-zinc-100 p-3 dark:border-zinc-800"
                >
                  <span className="text-3xl">{item.emoji}</span>
                  <div className="flex-1">
                    <p className="font-medium text-black dark:text-zinc-50">
                      {item.name}{" "}
                      <span className="font-normal text-zinc-500 dark:text-zinc-400">
                        — ${item.price.toFixed(2)}
                      </span>
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => removeItem(item.id)}
                      disabled={qty === 0 || orderState !== "idle"}
                      className="h-7 w-7 rounded-full border border-zinc-200 text-zinc-600 disabled:opacity-30 dark:border-zinc-700 dark:text-zinc-300"
                    >
                      −
                    </button>
                    <span className="w-4 text-center text-sm text-black dark:text-zinc-50">
                      {qty}
                    </span>
                    <button
                      onClick={() => addItem(item.id)}
                      disabled={orderState !== "idle"}
                      className="h-7 w-7 rounded-full border border-zinc-200 text-zinc-600 disabled:opacity-30 dark:border-zinc-700 dark:text-zinc-300"
                    >
                      +
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800">
            <div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {cartCount} item{cartCount === 1 ? "" : "s"}
              </p>
              <p className="font-semibold text-black dark:text-zinc-50">
                ${cartTotal.toFixed(2)}
              </p>
            </div>
            <button
              onClick={confirmOrder}
              disabled={cartCount === 0 || orderState !== "idle"}
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-[#383838] disabled:opacity-30 dark:hover:bg-[#ccc]"
            >
              Confirm Order
            </button>
          </div>
        </section>

        {/* Right: Kitchen */}
        <section className="flex flex-1 flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg dark:bg-zinc-900">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
            Kitchen
          </h2>

          {orderState === "idle" && (
            <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
              <span className="text-5xl">🧑‍🍳</span>
              <p className="text-zinc-500 dark:text-zinc-400">
                Waiting for an order — add items and confirm to start cooking.
              </p>
            </div>
          )}

          {orderState !== "idle" && (
            <div className="flex flex-1 flex-col gap-6">
              <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all duration-700 ease-out"
                  style={{ width: `${progressPct}%` }}
                />
              </div>

              <ul className="flex flex-col gap-3">
                {STAGES.map((stage, i) => {
                  const done = orderState === "ready" || i < stageIndex;
                  const active = orderState === "cooking" && i === stageIndex;
                  return (
                    <li key={stage} className="flex items-center gap-3">
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                          done
                            ? "bg-emerald-500 text-white"
                            : active
                            ? "animate-pulse bg-zinc-800 text-white dark:bg-zinc-100 dark:text-black"
                            : "bg-zinc-100 text-zinc-400 dark:bg-zinc-800"
                        }`}
                      >
                        {done ? "✓" : i + 1}
                      </span>
                      <span
                        className={
                          done || active
                            ? "text-black dark:text-zinc-50"
                            : "text-zinc-400 dark:text-zinc-600"
                        }
                      >
                        {stage}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {orderState === "ready" && (
                <div className="mt-auto flex flex-col items-center gap-3 text-center">
                  <span className="text-4xl">🍽️</span>
                  <p className="font-medium text-black dark:text-zinc-50">
                    Order ready to serve!
                  </p>
                  <button
                    onClick={startNewOrder}
                    className="rounded-full border border-zinc-200 px-5 py-2 text-sm font-medium text-black dark:border-zinc-700 dark:text-zinc-50"
                  >
                    Start New Order
                  </button>
                </div>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
