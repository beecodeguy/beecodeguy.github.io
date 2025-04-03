import React from "react";
import {
  ExternalLink,
  Moon,
  Sun,
  Code2,
  Dumbbell,
  Layout,
  Globe,
  MessageSquare,
  MapIcon as WhatsappIcon
} from "lucide-react";

interface ProjectCard {
  title: string;
  description: string;
  demoUrl: string;
  image: string;
  icon: React.ReactNode;
  features: string[];
}

const projects: ProjectCard[] = [
  {
    title: "Modern Gym Template",
    description:
      "Sleek, responsive gym website with membership management and class scheduling.",
    demoUrl: "https://demo-gym-template.netlify.app",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
    icon: <Dumbbell className="w-5 h-5" />,
    features: [
      "Class Scheduling",
      "Membership Portal",
      "Trainer Profiles",
      "Online Payments"
    ]
  },
  {
    title: "Developer Portfolio",
    description:
      "Minimalist portfolio template for developers to showcase their work effectively.",
    demoUrl: "https://demo-portfolio-template.netlify.app",
    image:
      "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&q=80&w=1200",
    icon: <Code2 className="w-5 h-5" />,
    features: [
      "Project Showcase",
      "Skills Section",
      "Dark Mode",
      "Blog Integration"
    ]
  },
  {
    title: "CMS Dashboard",
    description:
      "Modern CMS template with intuitive content management and analytics.",
    demoUrl: "https://demo-cms-template.netlify.app",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    icon: <Layout className="w-5 h-5" />,
    features: [
      "Content Management",
      "User Dashboard",
      "Media Library",
      "Analytics"
    ]
  },
  {
    title: "SEO Business",
    description:
      "High-performance business template optimized for search engines.",
    demoUrl: "https://demo-seo-template.netlify.app",
    image:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=1200",
    icon: <Globe className="w-5 h-5" />,
    features: ["SEO Optimized", "Fast Loading", "Mobile-First", "Analytics"]
  }
];

export default function AvailableProjects() {
  const getWhatsAppLink = template => {
    const message = encodeURIComponent(
      `Hi, I'm interested in the ${template} template. Can we discuss more?`
    );
    return `https://wa.me/+9779802714323?text=${message}`;
  };

  return (
    <div className={`transition-colors duration-200`}>
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Professional Web Templates
          </h2>
          <p className="text-xl opacity-80 max-w-2xl">
            Modern, responsive, and customizable templates for your next web
            project. Each template is crafted with attention to detail and
            performance.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-transform hover:scale-[1.02]`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {project.icon}
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-white hover:text-blue-400 transition-colors"
                  >
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm opacity-80 mb-4">{project.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm opacity-80"
                    >
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <a
                  href={getWhatsAppLink(project.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-green-500 hover:text-green-400 transition-colors"
                >
                  <WhatsappIcon className="w-4 h-4" />
                  Inquire via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="opacity-80 mb-6 max-w-xl mx-auto">
            Looking for something unique? Let's create a custom solution
            tailored to your needs.
          </p>
          <a
            href={getWhatsAppLink("Custom Project")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <WhatsappIcon className="w-5 h-5" />
            Start Discussion
          </a>
        </div>
      </div>
    </div>
  );
}
