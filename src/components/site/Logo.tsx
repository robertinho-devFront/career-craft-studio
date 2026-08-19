type LogoProps = {
  variant?: "color" | "white";
  iconOnly?: boolean;
  size?: number; // hauteur en px
  className?: string;
};

export function Logo({ variant = "color", iconOnly = false, size = 32, className = "" }: LogoProps) {
  const isWhite = variant === "white";
  const blueColor = isWhite ? "#5B8DEF" : "#2563EB";

  const icon = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {!isWhite && (
        <defs>
          <linearGradient id="cvsig-navy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#121b33" />
            <stop offset="100%" stopColor="#0a0f1f" />
          </linearGradient>
        </defs>
      )}
      <rect
        x="0"
        y="0"
        width="200"
        height="200"
        rx="52"
        fill={isWhite ? "#FFFFFF" : "url(#cvsig-navy)"}
        fillOpacity={isWhite ? 0.08 : 1}
      />
      <path
        d="M74,44 L110,44 L136,70 L136,144 Q136,154 126,154 L74,154 Q64,154 64,144 L64,54 Q64,44 74,44 Z"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M110,44 L110,70 L136,70"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <line x1="80" y1="92" x2="120" y2="92" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" />
      <line x1="80" y1="110" x2="108" y2="110" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" />
      <path
        d="M78,134 C90,120 98,146 108,130 C113,122 116,118 124,120"
        fill="none"
        stroke={blueColor}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (iconOnly) return <span className={className}>{icon}</span>;

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {icon}
      CV<span className="-ml-2 text-primary">Signature</span>
    </span>
  );
}
