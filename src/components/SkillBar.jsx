export default function SkillBar({tech, level, className, barStyles}) {
  const textStyles = 'font-mono text-xl block dark:text-white w-auto sm:text-2xl md:text-2xl'
  return (
    <div className={className}>
      <span className={textStyles}>{tech}</span>
      <div className="flex-grow h-auto bg-black/25">
        <span className={`${barStyles} block`} style={{ width: `${level}%` }}></span>
      </div>
      <span className={textStyles}>{level}%</span>
    </div>
  )
}
