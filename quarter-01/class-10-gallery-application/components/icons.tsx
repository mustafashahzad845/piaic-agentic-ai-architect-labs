type IconProps = {
  className?: string;
};

export function LikeIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.77 11h-4.23l1.52-4.94C16.38 5.03 15.54 4 14.38 4c-.58 0-1.14.24-1.52.65L7 11H3v10h4h1h9.43c1.06 0 1.98-.78 2.07-1.84l.5-8A2 2 0 0 0 18.77 11zM7 19H5v-6h2v6zm12.44-7.4-.5 8A1 1 0 0 1 18 20.6h-9v-8.79l5.76-6.42c.06-.07.13-.13.24-.16.03 0 .06-.01.1-.01.36 0 .53.35.66.82l-1.74 5.66a.6.6 0 0 0 .57.8h4.55c.22 0 .43.1.56.28a.6.6 0 0 1 .05.61z" />
    </svg>
  );
}

export function CommentIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M7 9H5V7h2v2zm0 4H5v-2h2v2zm0 4H5v-2h2v2zm4-8H9V7h2v2zm0 4H9v-2h2v2zm0 4H9v-2h2v2zm4-8h-2V7h2v2zm0 4h-2v-2h2v2zm0 4h-2v-2h2v2zm4-12h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zM9 21l-4-4H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-9l-4 4z" />
    </svg>
  );
}

export function RepostIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M23 4v6h-6l2.29 2.29-2.58 2.58L11 9.17V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1zM10 21a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-6h6l-2.29 2.29 2.58 2.58L13 14.83V20a1 1 0 0 1-1 1h-2z" />
    </svg>
  );
}

export function MoreIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M3 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm7.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm7.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" />
    </svg>
  );
}