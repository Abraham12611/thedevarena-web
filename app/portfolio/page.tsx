import { ProjectGrid } from "@/components/portfolio/project-grid";
import { ProjectCategory } from "@/types/portfolio";

export default function PortfolioPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">My Portfolio</h1>
      
      {Object.values(categories).map((category) => (
        <section key={category.id} className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-primary">
            {category.title}
          </h2>
          <ProjectGrid projects={category.projects} />
        </section>
      ))}
    </main>
  );
}

const categories: Record<string, ProjectCategory> = {
  comparisons: {
    id: "comparisons",
    title: "Comparisons",
    projects: [
      {
        id: "1",
        title: "React vs Vue: A Deep Dive",
        description: "A comprehensive comparison of two popular frontend frameworks, exploring their strengths and use cases.",
        image: "/images/portfolio/react-vs-vue.jpg",
        tags: ["React", "Vue", "Frontend", "Comparison"],
        link: "#",
      },
      {
        id: "2",
        title: "MongoDB vs PostgreSQL",
        description: "Analyzing the key differences between document and relational databases.",
        image: "/images/portfolio/mongo-vs-postgres.jpg",
        tags: ["MongoDB", "PostgreSQL", "Database"],
        link: "#",
      },
      // Add more comparison projects...
    ],
  },
  productPersuasion: {
    id: "productPersuasion",
    title: "Product Persuasion",
    projects: [
      {
        id: "3",
        title: "Why Choose Next.js",
        description: "A compelling case for adopting Next.js in your web development stack.",
        image: "/images/portfolio/nextjs-case.jpg",
        tags: ["Next.js", "React", "Performance"],
        link: "#",
      },
      {
        id: "4",
        title: "Tailwind CSS Benefits",
        description: "Exploring the advantages of utility-first CSS frameworks.",
        image: "/images/portfolio/tailwind-benefits.jpg",
        tags: ["CSS", "Tailwind", "Design"],
        link: "#",
      },
      // Add more product persuasion projects...
    ],
  },
  technicalGuides: {
    id: "technicalGuides",
    title: "Technical Guides",
    projects: [
      {
        id: "5",
        title: "Event-Driven Data Processing with Traefik, Docker, and Kafka",
        description: "This guide explains how to implement event-driven data processing using Traefik, Docker, and Kafka. It emphasizes Traefik's flexibility and Kafka's scalability, persuading developers to streamline data processing through containerized deployments.",
        image: "/images/Feature-image-Event-Driven-Data-Processing.png",
        tags: ["Docker", "System Architecture", "Data Processing"],
        link: "https://www.freecodecamp.org/news/how-to-implement-event-driven-data-processing/",
      },
      {
        id: "6",
        title: "Docker Container Security",
        description: "Best practices for securing Docker containers in production.",
        image: "/images/portfolio/docker-security.jpg",
        tags: ["Docker", "Security", "DevOps"],
        link: "#",
      },
      // Add more technical guides...
    ],
  },
  tutorials: {
    id: "tutorials",
    title: "Tutorials",
    projects: [
      {
        id: "7",
        title: "Build a Chat App with Socket.io",
        description: "Step-by-step tutorial for creating a real-time chat application.",
        image: "/images/portfolio/chat-app.jpg",
        tags: ["Socket.io", "Node.js", "React"],
        link: "#",
      },
      {
        id: "8",
        title: "How to Install NVIDIA CUDA Toolkit on Ubuntu",
        description: "This guide explains how to install the NVIDIA CUDA Toolkit on Ubuntu. It highlights the importance of GPU acceleration for deep learning tasks and provides step-by-step instructions for setting up the toolkit.",
        image: "/images/Feature-image.png",
        tags: ["Linux", "ML", "NVIDIA CUDA"],
        link: "https://www.freecodecamp.org/news/how-to-install-nvidia-cuda-toolkit-on-ubuntu/",
      },
      // Add more tutorials...
    ],
  },
}; 