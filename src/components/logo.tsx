import { useId } from "react";

interface LogoProps {
  /** Altezza in px del lockup completo (la larghezza scala in proporzione). */
  height?: number;
  className?: string;
  /** Mostra solo il dev mark <ag/> senza nome e tagline. */
  markOnly?: boolean;
  /** Etichetta accessibile del logo. */
  title?: string;
}

/**
 * Logo brand di Alessandro Guelpa — dev mark `<ag/>`.
 *
 * Vettoriale e self-contained: le lettere "ag" usano `currentColor`
 * (quindi seguono il colore del testo / dark mode), mentre le parentesi
 * angolari e la tagline usano il gradiente viola→fucsia del brand.
 */
export const Logo = ({
  height = 36,
  className,
  markOnly = false,
  title = "Alessandro Guelpa",
}: LogoProps) => {
  const gradientId = useId();
  // Ratio del viewBox: mark-only è quadratoide, il lockup è largo.
  const viewWidth = markOnly ? 96 : 250;
  const width = (height * viewWidth) / 44;

  return (
    <svg
      aria-label={title}
      className={className}
      fill="none"
      height={height}
      role="img"
      viewBox={`0 0 ${viewWidth} 44`}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#d946ef" />
        </linearGradient>
      </defs>

      {/* Dev mark: <ag/> */}
      <text
        fill={`url(#${gradientId})`}
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="30"
        fontWeight="800"
        x="0"
        y="32"
      >
        &lt;
      </text>
      <text
        fill="currentColor"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="30"
        fontWeight="900"
        letterSpacing="-1.5"
        x="19"
        y="32"
      >
        ag
      </text>
      <text
        fill={`url(#${gradientId})`}
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="30"
        fontWeight="800"
        x="56"
        y="32"
      >
        /&gt;
      </text>

      {/* Nome + tagline (solo lockup completo) */}
      {!markOnly && (
        <>
          <text
            fill="currentColor"
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="14"
            fontWeight="600"
            letterSpacing="-0.2"
            x="100"
            y="20"
          >
            alessandro guelpa
          </text>
          <text
            fill={`url(#${gradientId})`}
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="9.5"
            fontWeight="600"
            letterSpacing="2"
            x="101"
            y="35"
          >
            FRONT-END DEVELOPER
          </text>
        </>
      )}
    </svg>
  );
};

export default Logo;
