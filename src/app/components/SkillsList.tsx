export default function SkillsList({
  children,
  skills,
}: {
  children?: React.ReactNode;
  skills?: string;
}) {
  const list = skills
    ? skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : null;

  return (
    <div className="my-4 md:my-5 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-4">
      <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#004AAD] dark:text-blue-400 mb-2">
        Skills
      </p>
      {list ? (
        <div className="flex flex-wrap gap-2 md:gap-3">
          {list.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-white dark:bg-slate-700/80 px-3 py-1 text-sm md:text-base lg:text-lg text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600"
            >
              {skill}
            </span>
          ))}
        </div>
      ) : (
        <div className="text-sm md:text-base text-slate-600 dark:text-slate-300">
          {children}
        </div>
      )}
    </div>
  );
}
