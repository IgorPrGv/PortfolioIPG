import { useLanguage } from "../contexts/LanguageContext";
import { ExternalLink, Github } from "lucide-react";
import { projectsContent } from "../contents/projects.content"; 

const ProjectsSection = () => {
  const { tr } = useLanguage();

  return (
    <section id="projects" className="py-18 md:pt-16 md:pb-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-8 group cursor-default">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground inline-block">
            {tr(projectsContent.sectionTitle)}
          </h2>
          <div className="flex justify-center mt-2">
            <div className="h-1 bg-primary rounded-full transition-all duration-300 w-8 group-hover:w-32" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projectsContent.projects.map((project, idx) => {
            const visibleTechs = project.techs.slice(0, projectsContent.maxVisibleTags);
            
            return (
              <div
                key={idx}
                className="group flex flex-col h-full min-h-[500px] rounded-2xl bg-gradient-to-b from-card to-muted/30 border border-border shadow-lg
                  hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1
                  transition-all duration-300"
              >
                {/* Placeholder image area */}
                <div className="h-48 w-full bg-muted/50 rounded-t-2xl overflow-hidden relative border-b border-border/50">
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={tr(project.title)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
                        {tr(projectsContent.imagePlaceholder)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Text */}
                <div className="flex-1 flex flex-col p-5">
                  <h3 className="font-display font-semibold text-foreground line-clamp-2 mb-2 transition-all duration-200 group-hover:text-primary group-hover:scale-[1.02] origin-left">
                    {tr(project.title)}
                  </h3>
                  <p className="text-sm text-muted-foreground text-justify mb-4 flex-1">
                    {tr(project.description)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4 max-h-18 overflow-hidden">
                    {visibleTechs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-xs font-medium bg-[hsl(222_55%_12%)] border border-primary/40 text-primary shadow-[0_0_6px_hsl(38_97%_53%/0.1)] focus:outline-none focus:ring-2 focus:ring-primary/50"
                        tabIndex={0}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-auto">
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-all duration-200"
                      >
                        <Github size={14} />
                        {tr(projectsContent.viewCode)}
                      </a>
                    )}
                    {/* {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:scale-105 transition-all duration-200"
                      >
                        <ExternalLink size={14} />
                        Live demo
                      </a>
                    )} */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;