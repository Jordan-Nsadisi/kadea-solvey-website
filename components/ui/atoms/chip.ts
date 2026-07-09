
export function Chip({ children, light = false }: { children: React.ReactNode; light?: boolean }) {

    return (
        <>
        <span
      className= {
        `inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold${light
                ? "bg-white/20 text-white border border-white/30"
                : "bg-black/10 text-inherit border border-black/15"
            }`
}
    >
    { children }
    </span>
    </>
    )
}