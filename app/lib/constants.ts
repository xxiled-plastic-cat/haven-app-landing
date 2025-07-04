import type { FAQ, ComparisonTableRow } from '~/types';

export const COMPARISON_DATA: ComparisonTableRow[] = [
  {
    feature: 'Average Yield',
    traditional: '0.5%',
    haven: '3–5%*',
  },
  {
    feature: 'Instant Access',
    traditional: 'Limited',
    haven: true,
  },
  {
    feature: 'Complexity',
    traditional: false,
    haven: true,
  },
];

export const FAQ_DATA: FAQ[] = [
  {
    question: 'What is xUSD?',
    answer: 'xUSD is our stable digital dollar that maintains its value while earning yield through secure, on-chain strategies.',
  },
  {
    question: 'How is Haven different from traditional savings?',
    answer: 'Haven offers higher yields (3-5% vs 0.5%), instant access to your funds, and removes the complexity of traditional investing.',
  },
  {
    question: 'Is my money safe?',
    answer: 'Yes, your funds are secured through audited smart contracts and established DeFi protocols with a proven track record.',
  },
  {
    question: 'How do I withdraw my money?',
    answer: 'You can withdraw your funds instantly at any time through the Haven app. Your xUSD is converted back to dollars seamlessly.',
  },
  {
    question: 'What are the fees?',
    answer: 'Haven charges a small management fee on the yield earned. There are no deposit or withdrawal fees.',
  },
];

export const SITE_CONFIG = {
  title: 'Haven - Save Simply, Earn Effortlessly',
  description: 'A modern way to grow your dollars with real yield—safe, simple, and automatic.',
  keywords: ['stable coin', 'savings', 'finance', 'defi', 'yield', 'xUSD'],
  url: 'https://haven.finance', // Update with actual URL
}; 