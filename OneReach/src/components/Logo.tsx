import './Logo.css'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export function Logo({ size = 'md', showText = false }: LogoProps) {
  const sizes = {
    sm: { width: 24, height: 24 },
    md: { width: 32, height: 32 },
    lg: { width: 48, height: 48 },
  }

  const { width, height } = sizes[size]

  return (
    <div className="logo-container">
      <svg width={width} height={height} viewBox="0 0 32 32" fill="none" className="logo-svg">
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2549CC" stopOpacity={1} />
            <stop offset="100%" stopColor="#1E3DB4" stopOpacity={1} />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#logoGrad)" />
        <g opacity="0.2">
          <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="0.5" fill="none" />
          <circle cx="16" cy="16" r="10" stroke="white" strokeWidth="0.5" fill="none" />
        </g>
        <circle cx="16" cy="16" r="8" fill="rgba(255,255,255,.12)" />
        <path d="M12 16c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
        <circle cx="16" cy="16" r="2" fill="white" />
      </svg>
      {showText && (
        <span className="logo-text">
          One<span className="logo-text-highlight">Reach</span>
        </span>
      )}
    </div>
  )
}
