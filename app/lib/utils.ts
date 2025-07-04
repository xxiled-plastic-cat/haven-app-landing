import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount);
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

export function scrollToEmailSignup() {
  const emailSignupSection = document.getElementById('email-signup');
  if (emailSignupSection) {
    // Scroll to the email signup section with some offset for better visibility
    const rect = emailSignupSection.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetPosition = scrollTop + rect.top - window.innerHeight * 0.2;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
} 