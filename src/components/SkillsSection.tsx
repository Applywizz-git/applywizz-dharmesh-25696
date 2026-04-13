import { motion } from "framer-motion";
import {
  FiCode, FiLayers, FiBarChart2, FiDatabase, FiCloud, FiSettings, FiCpu, FiCheckCircle, FiActivity, FiGitBranch, FiTerminal
} from "react-icons/fi";

const skillCategories = [
  {
    icon: FiCode,
    title: "Programming Languages",
    skills: ["Java", "SQL", "JavaScript", "TypeScript", "Python", "C/C++", "C#"],
  },
  {
    icon: FiLayers,
    title: "Backend Development",
    skills: ["Spring Boot", "Spring MVC", "Microservices Architecture", "J2EE", "Hibernate", "REST APIs", "Node.js", "JSP", "OAuth2", "JWT", "API Integration"],
  },
  {
    icon: FiBarChart2,
    title: "Frontend Development",
    skills: ["React.js", "Angular", "HTML", "CSS", "Bootstrap", "D3.js"],
  },
  {
    icon: FiDatabase,
    title: "Databases",
    skills: ["Oracle", "PostgreSQL", "MySQL", "MongoDB", "Cassandra", "Azure SQL", "IBM DB2"],
  },
  {
    icon: FiCloud,
    title: "Cloud Platforms",
    skills: ["AWS (EC2, S3, Lambda)", "Azure (App Service, Azure Database for PostgreSQL, Azure Cosmos DB)", "Red Hat OpenShift"],
  },
  {
    icon: FiSettings,
    title: "DevOps & CI/CD",
    skills: ["Docker", "Kubernetes", "GitLab CI/CD", "Jenkins", "Argo CD"],
  },
  {
    icon: FiCpu,
    title: "Messaging & Integration",
    skills: ["Apache Kafka", "JMS"],
  },
  {
    icon: FiCheckCircle,
    title: "Testing",
    skills: ["JUnit", "Mockito", "Postman"],
  },
  {
    icon: FiActivity,
    title: "Observability & Monitoring",
    skills: ["Splunk", "Dynatrace"],
  },
  {
    icon: FiGitBranch,
    title: "Build & Version Control",
    skills: ["Maven", "Gradle", "Git", "GitHub", "GitLab"],
  },
  {
    icon: FiTerminal,
    title: "Application Servers & Tools",
    skills: ["Apache Tomcat", "IBM WebSphere", "Jira", "Agile/Scrum"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-widest uppercase font-body mb-2">Expertise</p>
          <h2 className="text-6xl md:text-8xl font-heading font-black text-foreground tracking-tighter">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="rounded-3xl bg-card border border-border p-8 card-3d-hover group"
              initial={{ opacity: 0, y: 40, rotateY: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center shadow-lg card-3d-content"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <cat.icon className="text-accent-foreground" size={28} />
                </motion.div>
                <h3 className="text-xl font-heading font-black text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 card-3d-content">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-heading font-bold rounded-lg bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all cursor-default"
                    whileHover={{ scale: 1.1, translateZ: 10 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
