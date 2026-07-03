import type { ReactNode } from "react";
import {
  ContributionsIcon,
  DividendsIcon,
  LoansIcon,
  MembersIcon,
} from "./icons";

export type Pillar = {
  key: string;
  icon: ReactNode;
  title: string;
  tagline: string;
  blurb: string;
  points: string[];
};

export const PILLARS: Pillar[] = [
  {
    key: "members",
    icon: <MembersIcon className="h-6 w-6" />,
    title: "Members",
    tagline: "enrolment & standing",
    blurb:
      "Every member joins with a number — DOMICOOP-0001 onward — and a standing that reflects their contributions, loans and dividends at a glance.",
    points: [
      "Guided enrolment with a unique member number",
      "A clear picture of standing and history",
      "Passbook you can carry in your pocket",
    ],
  },
  {
    key: "contributions",
    icon: <ContributionsIcon className="h-6 w-6" />,
    title: "Contributions",
    tagline: "monthly savings",
    blurb:
      "Set your monthly contribution and pay it in a tap. Every naira is receipted and posted to the ledger — no more chasing a paper trail.",
    points: [
      "Pay contributions securely via Paystack",
      "Automatic receipts, posted to your passbook",
      "Statements you and your treasurer both trust",
    ],
  },
  {
    key: "loans",
    icon: <LoansIcon className="h-6 w-6" />,
    title: "Loans",
    tagline: "credit & disbursement",
    blurb:
      "Apply for a loan against your standing, track the approval, and receive disbursement — with every repayment reflected on the ledger in real time.",
    points: [
      "Apply for a loan in minutes",
      "Transparent approval and disbursement",
      "Repayments tracked against your balance",
    ],
  },
  {
    key: "dividends",
    icon: <DividendsIcon className="h-6 w-6" />,
    title: "Dividends",
    tagline: "annual surplus",
    blurb:
      "When the society declares its annual surplus, your share is calculated from your standing and posted to your account — the reward for steady saving.",
    points: [
      "Annual dividend calculated from your standing",
      "Declared and posted transparently",
      "A record of every payout you have received",
    ],
  },
];

export type Step = { n: string; title: string; body: string };

export const STEPS: Step[] = [
  {
    n: "01",
    title: "Join",
    body: "Become a member of Dominion Co-operative, get your member number, and set your monthly contribution — all from the app.",
  },
  {
    n: "02",
    title: "Contribute",
    body: "Pay your contributions securely each month. Every payment is receipted and posted straight to your passbook.",
  },
  {
    n: "03",
    title: "Grow",
    body: "Build your standing, apply for a loan when you need one, and share in the society's annual dividend.",
  },
];

export const FAQS = [
  {
    q: "How do I pay my contributions?",
    a: "Contributions are paid securely in-app through Paystack, our payments partner. Every payment is receipted instantly and posted to your passbook, so your balance is always up to date.",
  },
  {
    q: "Is my money and data safe?",
    a: "Payments are handled by Paystack, a PCI-DSS compliant processor — DOMICOOP never stores your card details. Your data is encrypted in transit, passwords are hashed, and admin access is role-based. We do not sell your data.",
  },
  {
    q: "Who can join Dominion Co-operative?",
    a: "Membership is open to savers who are of age and ready to contribute monthly, in line with the society's bye-laws. Apply through the membership form, and once you're approved you'll receive your member number and can begin contributing right away.",
  },
  {
    q: "Does the app cost anything?",
    a: "The DOMICOOP app is free for members of Dominion Co-operative. There is no charge to download it or to track your contributions, loans and dividends.",
  },
  {
    q: "How are loans and dividends calculated?",
    a: "Both are anchored to your standing — the record of your contributions over time. Loan eligibility and your annual dividend share are calculated transparently from that ledger, and every posting is visible to you.",
  },
  {
    q: "What happens to my savings if I leave?",
    a: "Your contributions are yours. If you leave the society, your standing is reconciled and paid out in line with Dominion Co-operative's bye-laws. Your full history stays on record until then.",
  },
];
