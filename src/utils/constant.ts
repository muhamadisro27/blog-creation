import { BlogType } from "@/types/blog"
import { StepItemMap } from "@/types/common"

export const blogs: BlogType[] = [
  {
    id: 1,
    title: "Exploring the Future of Web3 Development",
    slug: "exploring-the-future-of-web3-development",
    author: "Muhamad Isro",
    excerpt:
      "Web3 is reshaping the internet with decentralized apps. Here's what frontend engineers should prepare for.",
    category: "tech",
    status: "published",
    createdAt: 1724563200000,
    publishedAt: 1724649600000,
  },
  {
    id: 2,
    title: "10 Simple Habits to Improve Your Daily Life",
    slug: "10-simple-habits-to-improve-your-daily-life",
    author: "Jane Doe",
    excerpt:
      "Small lifestyle changes can compound into massive results over time. Let's start with these ten.",
    category: "lifestyle",
    status: "draft",
    createdAt: 1724736000000,
    publishedAt: null,
  },
  {
    id: 3,
    title: "Why Every Startup Should Care About UX",
    slug: "why-every-startup-should-care-about-ux",
    author: "Alex Tan",
    excerpt:
      "User experience is more than design—it's about trust, retention, and business growth.",
    category: "business",
    status: "published",
    createdAt: 1724822400000,
    publishedAt: 1724908800000,
  },
  {
    id: 4,
    title: "The Rise of TypeScript in Frontend Engineering",
    slug: "the-rise-of-typescript-in-frontend-engineering",
    author: "Muhamad Isro",
    excerpt:
      "TypeScript has become the standard for scalable frontend projects. Here's why it's worth adopting.",
    category: "tech",
    status: "published",
    createdAt: 1724908800000,
    publishedAt: 1724995200000,
  },
  {
    id: 5,
    title: "Mindfulness in the Digital Age",
    slug: "mindfulness-in-the-digital-age",
    author: "Sarah Lee",
    excerpt:
      "With constant notifications and digital noise, mindfulness is becoming a necessity, not a luxury.",
    category: "lifestyle",
    status: "published",
    createdAt: 1725081600000,
    publishedAt: 1725168000000,
  },
  {
    id: 6,
    title: "From Employee to Entrepreneur: The Transition",
    slug: "from-employee-to-entrepreneur-the-transition",
    author: "David Kim",
    excerpt:
      "Making the leap from employee to business owner is tough. Here are the steps to prepare yourself.",
    category: "business",
    status: "draft",
    createdAt: 1725254400000,
    publishedAt: null,
  },
  {
    id: 7,
    title: "Understanding Blockchain Beyond Bitcoin",
    slug: "understanding-blockchain-beyond-bitcoin",
    author: "Muhamad Isro",
    excerpt:
      "Blockchain is more than crypto—it powers decentralized identity, supply chains, and more.",
    category: "tech",
    status: "published",
    createdAt: 1725427200000,
    publishedAt: 1725513600000,
  },
  {
    id: 8,
    title: "Healthy Work-Life Balance for Remote Workers",
    slug: "healthy-work-life-balance-for-remote-workers",
    author: "Jane Doe",
    excerpt:
      "Remote work offers freedom, but without discipline, burnout is inevitable. Here's how to balance it.",
    category: "lifestyle",
    status: "published",
    createdAt: 1725600000000,
    publishedAt: 1725686400000,
  },
  {
    id: 9,
    title: "Scaling a Business in Emerging Markets",
    slug: "scaling-a-business-in-emerging-markets",
    author: "Alex Tan",
    excerpt:
      "Emerging markets bring unique challenges—here’s how to grow while staying sustainable.",
    category: "business",
    status: "published",
    createdAt: 1725772800000,
    publishedAt: 1725859200000,
  },
  {
    id: 10,
    title: "AI Tools Every Developer Should Try in 2025",
    slug: "ai-tools-every-developer-should-try-in-2025",
    author: "Muhamad Isro",
    excerpt:
      "From code generation to debugging assistants, AI tools are now essential for modern developers.",
    category: "tech",
    status: "draft",
    createdAt: 1725945600000,
    publishedAt: null,
  },
]

export const steps: StepItemMap = {
  1: {
    step: 1,
    title: "Metadata",
    description: "Enter basic blog info title and author",
    isCompleted: false,
    isCurrentStep: true,
    fields: ["title", "slug", "author"],
  },
  2: {
    step: 2,
    title: "Summary & Category",
    description: "Add a short summary and choose a category",
    isCompleted: false,
    isCurrentStep: false,
    fields: ["excerpt", "category"],
  },
  3: {
    step: 3,
    title: "Content",
    description: "Write your main blog content",
    isCompleted: false,
    isCurrentStep: false,
    fields: ["excerpt", "category", "createdAt", "status"],
  },
  4: {
    step: 4,
    title: "Review & Submit",
    description: "Check all details and submit your blog",
    isCompleted: false,
    isCurrentStep: false,
    fields: ["publishedAt", "status"],
  },
}
