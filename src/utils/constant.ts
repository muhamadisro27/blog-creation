import { BlogCategoryMap, BlogType } from "@/types/blog"
import { NavLinkType, StepItemMap } from "@/types/common"
import { ClipboardList, FileText, ClipboardCheck, FileStack } from "lucide-react"

export const links: NavLinkType[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Blog",
    url: "/blog",
  },
]

export const blogs: BlogType[] = [
  {
    id: "1",
    title: "Exploring the Future of Web3 Development",
    slug: "exploring-the-future-of-web3-development",
    author: "Muhamad Isro",
    summary:
      "Web3 is reshaping the internet with decentralized apps. Here's what frontend engineers should prepare for.",
    category: "tech",
    createdAt: 1724563200000,
    publishedAt: 1724649600000,
  },
  {
    id: "2",
    title: "10 Simple Habits to Improve Your Daily Life",
    slug: "10-simple-habits-to-improve-your-daily-life",
    author: "Jane Doe",
    summary:
      "Small lifestyle changes can compound into massive results over time. Let's start with these ten.",
    category: "lifestyle",
    createdAt: 1724736000000,
    publishedAt: null,
  },
  {
    id: "3",
    title: "Why Every Startup Should Care About UX",
    slug: "why-every-startup-should-care-about-ux",
    author: "Alex Tan",
    summary:
      "User experience is more than design—it's about trust, retention, and business growth.",
    category: "business",
    createdAt: 1724822400000,
    publishedAt: 1724908800000,
  },
  {
    id: "4",
    title: "The Rise of TypeScript in Frontend Engineering",
    slug: "the-rise-of-typescript-in-frontend-engineering",
    author: "Muhamad Isro",
    summary:
      "TypeScript has become the standard for scalable frontend projects. Here's why it's worth adopting.",
    category: "tech",
    createdAt: 1724908800000,
    publishedAt: 1724995200000,
  },
  {
    id: "5",
    title: "Mindfulness in the Digital Age",
    slug: "mindfulness-in-the-digital-age",
    author: "Sarah Lee",
    summary:
      "With constant notifications and digital noise, mindfulness is becoming a necessity, not a luxury.",
    category: "lifestyle",
    createdAt: 1725081600000,
    publishedAt: 1725168000000,
  },
  {
    id: "6",
    title: "From Employee to Entrepreneur: The Transition",
    slug: "from-employee-to-entrepreneur-the-transition",
    author: "David Kim",
    summary:
      "Making the leap from employee to business owner is tough. Here are the steps to prepare yourself.",
    category: "business",
    createdAt: 1725254400000,
    publishedAt: null,
  },
  {
    id: "7",
    title: "Understanding Blockchain Beyond Bitcoin",
    slug: "understanding-blockchain-beyond-bitcoin",
    author: "Muhamad Isro",
    summary:
      "Blockchain is more than crypto—it powers decentralized identity, supply chains, and more.",
    category: "tech",
    createdAt: 1725427200000,
    publishedAt: 1725513600000,
  },
  {
    id: "8",
    title: "Healthy Work-Life Balance for Remote Workers",
    slug: "healthy-work-life-balance-for-remote-workers",
    author: "Jane Doe",
    summary:
      "Remote work offers freedom, but without discipline, burnout is inevitable. Here's how to balance it.",
    category: "lifestyle",
    createdAt: 1725600000000,
    publishedAt: 1725686400000,
  },
  {
    id: "9",
    title: "Scaling a Business in Emerging Markets",
    slug: "scaling-a-business-in-emerging-markets",
    author: "Alex Tan",
    summary:
      "Emerging markets bring unique challenges—here’s how to grow while staying sustainable.",
    category: "business",
    createdAt: 1725772800000,
    publishedAt: 1725859200000,
  },
  {
    id: "10",
    title: "AI Tools Every Developer Should Try in 2025",
    slug: "ai-tools-every-developer-should-try-in-2025",
    author: "Muhamad Isro",
    summary:
      "From code generation to debugging assistants, AI tools are now essential for modern developers.",
    category: "tech",
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
    icon: FileText,
    fields: ["title", "slug", "author"],
  },
  2: {
    step: 2,
    title: "Summary & Category",
    icon: FileStack,
    description: "Add a short summary and choose a category",
    isCompleted: false,
    isCurrentStep: false,
    fields: ["summary", "category"],
  },
  3: {
    step: 3,
    title: "Content",
    description: "Write your main blog content",
    icon: ClipboardList,
    isCompleted: false,
    isCurrentStep: false,
    fields: ["content"],
  },
  4: {
    step: 4,
    title: "Review & Submit",
    icon: ClipboardCheck,
    description: "Check all details and submit your blog",
    isCompleted: false,
    isCurrentStep: false,
    fields: ["publishedAt"],
  },
}

export const blog_categories: BlogCategoryMap = {
  business: {
    label: "Business",
    value: "business",
  },
  tech: {
    label: "Tech",
    value: "tech",
  },
  lifestyle: {
    label: "Lifestyle",
    value: "lifestyle",
  },
}

export const revalidate = 60
