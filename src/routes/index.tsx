import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Plus,
  ShieldCheck,
  Star,
} from "lucide-react";
import burgerKingLogo from "@/assets/burger-king-logo.png.asset.json";

const CLAIM_URL = "https://giftclick.org/aff_c?offer_id=4512&aff_id=148566";

const steps = [
  "Check your savings eligibility",
  "Complete 4–5 sponsored deals",
  "Claim up to $500 in Burger King savings",
];

const faqs = [
  {
    q: "Who is this offer for?",
    a: "This promotion is available to eligible customers who complete the required sponsored deals.",
  },
  {
    q: "How much can I save?",
    a: "You can unlock up to $500 in savings, depending on your eligibility and completed deals.",
  },
  {
    q: "What are sponsored deals?",
    a: "They include free trials, app downloads, or signups that help fund your savings.",
  },
  {
    q: "How many deals do I need to complete?",
    a: "Complete 4–5 sponsored deals to qualify.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$500 Burger King Savings Offer" },
      {
        name: "description",
        content: "Check your eligibility and claim up to $500 in Burger King savings.",
      },
      { property: "og:title", content: "$500 Burger King Savings Offer" },
      {
        property: "og:description",
        content: "Check your eligibility and claim up to $500 in Burger King savings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "$500 Burger King Savings Offer" },
      {
        name: "twitter:description",
        content: "Check your eligibility and claim up to $500 in Burger King savings.",
      },
    ],
  }),
  component: Index,
});

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-auto w-full cursor-pointer items-center justify-between gap-4 rounded-none py-5 text-left"
      >
        <span className="text-[15px] font-semibold text-foreground">{q}</span>
        <Plus
          className={`h-4 w-4 shrink-0 text-brand-red transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>
      {open && (
        <p className="pb-5 pr-10 text-[14px] leading-relaxed text-muted-text">
          {a}
        </p>
      )}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-brand-dark bg-brand-dark px-4 py-3 text-center text-[12px] font-bold uppercase tracking-widest text-background">
        BURGER KING SAVINGS · LIMITED-TIME OFFER · UP TO $500
      </div>
      <main>
        <section className="border-b border-border px-5 py-10 sm:py-16" aria-labelledby="page-title">
          <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
            <img
              src={burgerKingLogo.url}
              alt="Burger King"
              className="h-36 w-36 object-contain sm:h-44 sm:w-44"
              width={176}
              height={176}
            />
            <p className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-red">
              <CheckCircle className="h-4 w-4" aria-hidden="true" /> Burger King
              savings offer
            </p>
            <h1
              id="page-title"
              className="mt-3 max-w-[760px] font-display text-[48px] font-extrabold leading-[1.05] text-foreground sm:text-[68px]"
            >
              Save up to <span className="text-brand-red">$500</span>
            </h1>
            <p className="mt-5 max-w-[600px] text-[17px] leading-relaxed text-muted-text sm:text-[19px]">
              Check your eligibility for{" "}
              <span className="font-bold text-brand-red">
                up to $500 in Burger King savings.
              </span>
            </p>
            <p className="mt-6 flex items-center gap-2 text-[12px] text-muted-text">
              <ShieldCheck
                className="h-4 w-4 text-brand-red"
                aria-hidden="true"
              />{" "}
              Eligibility check and sponsored deals required.
            </p>
            <div
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-trust-border bg-trust-surface px-3 py-2"
              aria-label="Trustpilot rating 4.9 out of 5"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-trust text-foreground">
                <Star
                  className="h-4 w-4 fill-current"
                  aria-hidden="true"
                />
              </span>
              <span className="text-[13px] font-bold text-foreground">
                Trustpilot
              </span>
              <span className="h-4 w-px bg-trust-border" aria-hidden="true" />
              <span className="text-[13px] font-extrabold text-foreground">
                4.9
              </span>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface/45 px-5 py-12 sm:py-14">
          <div className="mx-auto max-w-[900px]">
            <h2 className="text-center font-display text-[26px] font-bold text-foreground sm:text-[32px]">
              How it works
            </h2>
            <ol className="mt-7 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
              {steps.map((label, i) => (
                <li
                  key={label}
                  className="flex min-h-24 items-center gap-4 bg-background px-5 py-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-red text-[14px] font-bold text-brand-red">
                    {i + 1}
                  </span>
                  <span className="text-[14px] font-medium text-foreground">
                    {label}
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex justify-center">
              <a
                href={CLAIM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full max-w-[420px] cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-brand-red px-8 font-display text-[15px] font-bold uppercase text-background shadow-[var(--shadow-cta)] transition-colors hover:bg-brand-red-hover"
              >
                CLAIM NOW
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="px-5 py-12 sm:py-16">
          <div className="mx-auto max-w-[820px]">
            <h2 className="font-display text-[26px] font-bold text-foreground sm:text-[32px]">
              Frequently asked questions
            </h2>
            <div className="mt-7 divide-y divide-border border-y border-border">
              {faqs.map((f) => (
                <FaqItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </section>

        <p className="border-t border-border px-5 py-8 text-center text-[11px] leading-relaxed text-muted-text">
          This is an independent promotional page and is not affiliated with,
          endorsed by, or sponsored by Burger King Corporation. All trademarks
          belong to their respective owners. Offer requires an eligibility
          check and completion of sponsored deals; savings amounts vary by
          eligibility.
        </p>
      </main>
    </div>
  );
}
