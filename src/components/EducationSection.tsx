import { motion } from "framer-motion";
import { FiBookOpen, FiAward, FiCalendar } from "react-icons/fi";

const education = [
  {
    degree: "Master of Science",
    school: "University of Texas at Dallas",
    period: "Aug 2022 - Dec 2023",
    icon: FiAward,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-card/50">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-widest uppercase font-body mb-2">Academic</p>
          <h2 className="text-6xl md:text-8xl font-heading font-black text-foreground tracking-tighter">Education</h2>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8 max-w-lg mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className="rounded-[2.5rem] bg-card border border-border p-10 cursor-pointer card-3d-hover shadow-xl group"
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <motion.div
                  className="w-20 h-20 rounded-[1.5rem] gradient-accent flex items-center justify-center shadow-lg card-3d-content shrink-0"
                  whileHover={{ rotateY: 180, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <edu.icon className="text-accent-foreground" size={32} />
                </motion.div>
                <div className="card-3d-content">
                  <h3 className="text-2xl font-heading font-black text-foreground group-hover:text-accent transition-colors leading-tight">{edu.degree}</h3>
                  <p className="text-accent font-heading font-bold text-sm mt-2 uppercase tracking-widest">{edu.school}</p>
                  <div className="flex items-center gap-2 mt-4 text-muted-foreground font-heading font-bold text-xs uppercase tracking-widest">
                    <FiCalendar size={14} className="text-accent" />
                    {edu.period}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
