import { motion } from "framer-motion";
import { useState } from "react";
import { FiBriefcase, FiChevronDown, FiChevronUp, FiMapPin, FiCalendar, FiTrendingUp } from "react-icons/fi";

const experiences = [
  {
    title: "Software Developer",
    company: "State Farm",
    location: "USA",
    period: "Jan 2025 – Present",
    highlights: [
      "Migrated Java Spring Boot microservices and REST APIs to AWS Red Hat OpenShift using Docker and Kubernetes, improving platform scalability",
      "Automated Kubernetes deployment pipelines using GitLab CI/CD with blue-green rollout strategies, lowering downtime by 40%",
      "Implemented Argo CD-driven release orchestration across OpenShift clusters reducing manual release effort by 60%",
      "Upgraded backend services to newer Java runtime versions improving runtime stability across containerized workloads",
      "Integrated Microsoft Entra ID authentication into Spring Security workflows supporting secure SSO access for claims agents",
      "Refactored Salesforce-integrated REST APIs using Spring Boot service-layer restructuring improving API response performance",
      "Converted IBM DB2 stored procedures into optimized Oracle PL/SQL equivalents reducing nightly batch processing latency",
      "Established centralized observability dashboards using Splunk & Dynatrace, shortening incident triage cycles by 30%",
    ],
  },
  {
    title: "Software Developer",
    company: "Robinhood",
    location: "USA (Remote)",
    period: "Jan 2024 – Jan 2025",
    highlights: [
      "Developed full-stack budgeting platform using React.js and Node.js backend services, increasing active user adoption by 30%",
      "Engineered REST APIs supporting expense tracking workflows using Express.js improving transaction processing throughput",
      "Integrated OAuth2-based Google authentication workflows improving account security and login retention rates to 98%",
      "Optimized Azure SQL database indexing strategies improving financial query retrieval speed by 50%",
      "Deployed containerized application services to Azure App Service supporting continuous feature rollout",
      "Implemented PostgreSQL-hosted persistence layers supporting scalable storage of budgeting activity streams",
      "Created D3.js interactive visualizations enabling users to interpret spending distribution trends on dashboards",
      "Collaborated with QA teams using Postman-based API validation workflows ensuring stable integrations",
    ],
  },
  {
    title: "Software Developer",
    company: "Cognizant",
    location: "Hyderabad, India",
    period: "Dec 2021 – Jul 2022",
    highlights: [
      "Built Spring Boot microservices supporting Nike customer analytics workflows enabling real-time recommendations",
      "Designed MongoDB-backed persistence layers supporting scalable storage of behavioral interaction datasets",
      "Implemented collaborative filtering recommendation logic using Python improving personalization accuracy",
      "Constructed REST APIs connecting React-based visualization interfaces with backend analytics engines",
      "Automated build and release workflows using Jenkins CI/CD pipelines improving integration reliability",
      "Secured application services using OAuth2 and JWT authentication mechanisms for protected data access",
      "Provisioned AWS EC2 compute environments and S3 storage resources achieving 99.9% service availability",
      "Partnered with frontend teams to integrate recommendation response services improving rendering performance",
    ],
  },
  {
    title: "Software Developer",
    company: "Tech Mahindra",
    location: "Hyderabad, India",
    period: "Jul 2019 – Dec 2021",
    highlights: [
      "Developed Python Flask-based backend optimization engine improving logistics processing efficiency by 70%",
      "Designed Angular-driven frontend interface supporting interactive route visualization for operational teams",
      "Implemented customized Dijkstra graph algorithm improving route calculation speed by 50%",
      "Constructed RESTful integration services connecting routing engine outputs with Node.js orchestration layers",
      "Deployed scalable routing workloads on Azure NoSQL storage services improving geo-data retrieval latency by 30%",
      "Containerized routing components using Docker supporting portable deployment workflows",
      "Collaborated with cross-functional teams using Git-based release workflows improving integration stability",
      "Enhanced application responsiveness using Bootstrap UI optimizations improving usability feedback scores",
    ],
  },
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      className="rounded-[2rem] bg-card border border-border overflow-hidden card-3d-hover shadow-xl relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? 15 : -15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7, type: "spring" }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-8 flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-6">
          <motion.div
            className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center shrink-0 shadow-lg card-3d-content"
            whileHover={{ rotateY: 180, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <FiBriefcase className="text-accent-foreground" size={28} />
          </motion.div>
          <div>
            <h3 className="text-2xl font-heading font-black text-foreground group-hover:text-accent transition-colors leading-none">{exp.title}</h3>
            <p className="text-accent font-heading font-bold text-base mt-2 tracking-wide uppercase">{exp.company}</p>
            <div className="flex flex-wrap gap-4 mt-3 text-muted-foreground text-xs font-heading font-bold uppercase tracking-widest">
              <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full"><FiCalendar size={14} className="text-accent" />{exp.period}</span>
              <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full"><FiMapPin size={14} className="text-accent" />{exp.location}</span>
            </div>
          </div>
        </div>
        <motion.div
          className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
          animate={{ rotate: expanded ? 180 : 0, scale: expanded ? 1.1 : 1 }}
        >
          <FiChevronDown size={24} />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
        className="overflow-hidden"
      >
        <div className="px-8 pb-10 pt-2 card-3d-content">
          <div className="h-px w-full bg-border mb-8" />
          <ul className="grid md:grid-cols-2 gap-4">
            {exp.highlights.map((h, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-muted-foreground font-body text-base group/item"
                initial={{ opacity: 0, y: 10 }}
                animate={expanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="w-8 h-8 rounded-lg bg-accent/5 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-accent group-hover/item:text-accent-foreground transition-all">
                  <FiTrendingUp size={16} />
                </div>
                <span className="group-hover/item:text-foreground transition-colors">{h}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[100px] -z-10 rounded-full" />
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm tracking-[0.4em] uppercase font-heading font-black mb-4">Journey</p>
          <h2 className="text-6xl md:text-8xl font-heading font-black text-foreground tracking-tighter">
            Professional Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
