import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ExternalLink, Github, BarChart3, Brain, Database, FileText } from "lucide-react";

const ProjectsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.08 });

  const projects = [
    {
      title: "Analisis Perilaku Konsumen",
      description: "Eksplorasi data perilaku pembelian menggunakan SQL dan Power BI untuk mengidentifikasi pola dan insight.",
      tags: ["SQL", "Power BI", "Data Analysis"],
      icon: BarChart3,
      status: "Completed"
    },
    {
      title: "Cognitive Load Research",
      description: "Riset tentang beban kognitif dalam pembelajaran dengan pendekatan kuantitatif dan analisis statistik.",
      tags: ["Psychology", "Statistics", "Research"],
      icon: Brain,
      status: "In Progress"
    },
    {
      title: "Database Management System",
      description: "Perancangan dan implementasi database untuk manajemen data psikologi dengan SQL.",
      tags: ["SQL", "Database Design", "Data Management"],
      icon: Database,
      status: "Completed"
    },
    {
      title: "Literature Review Automation",
      description: "Penggunaan tools dan scripting untuk mempercepat proses systematic literature review.",
      tags: ["Python", "Automation", "Research"],
      icon: FileText,
      status: "Learning"
    }
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-primary/15 text-primary";
      case "In Progress":
        return "bg-accent/15 text-accent";
      case "Learning":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Subtle decorative elements */}
      <div className="shape-circle w-56 h-56 -top-28 right-[15%]" />
      <div className="shape-blob w-[350px] h-[350px] bg-accent/10 -bottom-40 -left-32" />

      <div className="container relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-foreground">
            Proyek & Riset
          </h2>
          <div className={`w-12 h-1 bg-primary mx-auto mb-4 rounded-full transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
          <p className={`text-muted-foreground max-w-lg mx-auto transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Beberapa proyek dan riset yang sedang atau telah saya kerjakan
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <project.icon className="w-5 h-5" />
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusStyles(project.status)}`}>
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className={`text-center mt-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <p className="text-sm text-muted-foreground mb-4">
            Tertarik untuk berkolaborasi dalam proyek riset?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("contact");
              if (element) {
                const navbarHeight = 80;
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                  top: elementPosition - navbarHeight,
                  behavior: "smooth"
                });
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300 text-sm font-medium"
          >
            Mari Berdiskusi
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
