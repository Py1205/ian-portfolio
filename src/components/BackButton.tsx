import Link from "next/link";

export default function BackButton({ href = "/work" }: { href?: string }) {
  return (
    <Link
      href={href}
      aria-label="Go back"
      className="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
      style={{
        backgroundColor: "var(--color-toggle-bg)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 12H5M12 5l-7 7 7 7" />
      </svg>
    </Link>
  );
}
