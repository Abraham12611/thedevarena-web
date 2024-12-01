import { ProjectGrid } from "@/components/portfolio/project-grid";
import { ProjectCategory } from "@/types/portfolio";

export default function PortfolioPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">Our Portfolio</h1>
      
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
        title: "Docker vs. Podman: Why Docker Is Still the Developer’s Choice",
        description: "Analyzing the key differences between document and relational databases.",
        image: "/images/Docker-vs-podman.avif",
        tags: ["Docker", "Podman", "Containers"],
        link: "https://collabnix.com/docker-vs-podman-why-docker-is-still-the-developers-choice/",
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
        title: "How to Manage Secrets in Docker",
        description: "This guide provides best practices for securing Docker containers in production. It emphasizes the importance of containerizing applications securely and provides practical tips for managing secrets and ensuring robust security practices.",
        image: "/images/Docker-secrets.jpg",
        tags: ["Docker", "Security", "DevOps", "Containers"],
        link: "https://www.freecodecamp.org/news/manage-secrets-in-docker/",
      },
      {
        id: "7",
        title: "Securing Node.js APIs with JSON Web Tokens (JWT)",
        description: "This guide provides best practices for securing Docker containers in production. It emphasizes the importance of containerizing applications securely and provides practical tips for managing secrets and ensuring robust security practices.",
        image: "/images/JWT-NodeAPI.webp",
        tags: ["Node.js", "JWT", "Security", "API", "Authentication",],
        link: "https://plainenglish.io/community/securing-node-js-apis-with-json-web-tokens-jwt-88ab51",
      },
      {
        id: "8",
        title: "The Best Practices for DevOps Pipelines",
        description: "This guide provides best practices for implementing DevOps pipelines. It emphasizes the importance of CI/CD pipelines for automating software delivery and provides practical tips for managing pipelines and ensuring robust security practices.",
        image: "https://hackernoon.imgix.net/images/szRhcSkT6Vb1JUUrwXMB3X2GOqu2-a792yfe.png",
        tags: ["DevOps", "CI/CD", "Pipeline", "Best Practices"],
        link: "https://hackernoon.com/the-best-practices-for-devops-pipelines",
      },
      // Add more technical guides...
    ],
  },
  tutorials: {
    id: "tutorials",
    title: "Tutorials",
    projects: [
      {
        id: "8",
        title: "How to Secure Your Web Server with Continuous Integration Using NGINX and CircleCI",
        description: "This tutorial provides a step-by-step guide for securing a web server with continuous integration using NGINX and CircleCI. It emphasizes NGINX's security features and CircleCI's automation capabilities, persuading developers to implement robust CI/CD pipelines for enhanced security and performance.",
        image: "/images/Nginx-circle-ci-secuirity.png",
        tags: ["NGINX", "CI/CD", "Security"],
        link: "https://www.freecodecamp.org/news/secure-web-server-with-continuous-integration-using-nginx-and-circleci/",
      },
      {
        id: "8",
        title: "How to Install NVIDIA CUDA Toolkit on Ubuntu",
        description: "This tutorial explains how to install the NVIDIA CUDA Toolkit on Ubuntu. It highlights the importance of GPU acceleration for deep learning tasks and provides step-by-step instructions for setting up the toolkit.",
        image: "/images/Feature-image.png",
        tags: ["Linux", "ML", "NVIDIA"],
        link: "https://www.freecodecamp.org/news/how-to-install-nvidia-cuda-toolkit-on-ubuntu/",
      },
      {
        id: "9",
        title: "How to Use OpenTelementry to Trace Node.js Applications",
        description: "This tutorial explains how to use OpenTelemetry to trace Node.js applications. It highlights the importance of observability for monitoring and improving application performance and provides step-by-step instructions for setting up the toolkit.",
        image: "/images/Nodejs-opentelementry.png",
        tags: ["Node.js", "OpenTelemetry", "Data Observability"],
        link: "https://www.freecodecamp.org/news/how-to-use-opentelementry-to-trace-node-js-applications/",
      },
      {
        id: "10",
        title: "Introduction to NGINX Access Logs and Error Logs",
        description: "This tutorial explains the basics of NGINX access logs and error logs. It highlights the importance of logging for monitoring and improving application performance and provides step-by-step instructions for setting up the toolkit.",
        image: "/images/Nginx-error-logs.webp",
        tags: ["NGINX", "Logging", "Web Server", "Monitoring"],
        link: "https://plainenglish.io/community/introduction-to-nginx-access-logs-and-error-logs-507489",
      },
      // Add more tutorials...
    ],
  },
}; 