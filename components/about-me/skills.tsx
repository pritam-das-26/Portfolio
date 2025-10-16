/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "motion/react";
import { Badge } from "../ui/badge";

export const Skills = ({
  skills,
}: {
  skills: {
    name: string;
    icon: string;
  }[];
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for individual skill badges
  const badgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <motion.div
      className="flex flex-wrap gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {skills.map((skill) => (
        <motion.div key={skill.name} variants={badgeVariants as any}>
          <Badge
            variant="default"
            className="px-3 py-1 dark:bg-gray-700 dark:text-gray-200 transition-all duration-300 hover:bg-gray-800 hover:text-white"
          >
            <i className={`ci ci-${skill.icon}`}></i> {skill.name}
          </Badge>
        </motion.div>
      ))}
    </motion.div>
  );
};
