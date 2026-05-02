import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import BackButton from "@/components/BackButton";
import ThemeToggle from "@/components/ThemeToggle";

const COOKIE_NAME = "cs-unlocked";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

const ALLOWED_NEXT = ["/work/disputes360", "/work/autobahn"];

function safeNext(raw: string | undefined) {
  const candidate = raw ?? "/work";
  return ALLOWED_NEXT.some((p) => candidate === p || candidate.startsWith(p + "/"))
    ? candidate
    : "/work";
}

async function unlock(formData: FormData) {
  "use server";
  const password = String(formData.get("password") ?? "");
  const next = safeNext(formData.get("next") as string | undefined);
  const expected = process.env.CASE_STUDY_PASSWORD;

  if (!expected || password !== expected) {
    redirect(`/unlock?next=${encodeURIComponent(next)}&error=1`);
  }

  const jar = await cookies();
  jar.set(COOKIE_NAME, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  });
  redirect(next);
}

export default async function UnlockPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  const { next: rawNext, error } = await searchParams;
  const next = safeNext(rawNext);

  return (
    <>
      <div
        className="fixed z-[300]"
        style={{ top: "var(--nav-top)", left: "var(--grid-margin)" }}
      >
        <BackButton />
      </div>
      <div
        className="fixed z-[300]"
        style={{ bottom: "var(--nav-top)", left: "var(--grid-margin)" }}
      >
        <ThemeToggle />
      </div>

      <main className="page-grid content-col-narrow">
        <section
          className="content-col-narrow"
          style={{
            paddingTop: "var(--hero-top)",
            paddingBottom: "var(--section-gap)",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontWeight: 400,
              fontFamily: "var(--font-geist-mono), monospace",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
              paddingBottom: "16px",
            }}
          >
            Protected case study
          </p>
          <h1
            style={{
              fontSize: "var(--font-size-hero)",
              lineHeight: "var(--line-height-tight)",
              letterSpacing: "-0.02em",
              fontWeight: 500,
              color: "var(--color-text-strong)",
            }}
          >
            Enter password to view.
          </h1>
          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.4,
              color: "var(--color-label)",
              paddingTop: "32px",
              maxWidth: "520px",
            }}
          >
            This case study contains client work under NDA. If you&apos;d like access, reach out on{" "}
            <a
              href="https://linkedin.com/in/ianpan"
              style={{ color: "var(--color-text-strong)", textDecoration: "underline" }}
            >
              LinkedIn
            </a>
            .
          </p>

          <form
            action={unlock}
            style={{
              paddingTop: "40px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              maxWidth: "420px",
            }}
          >
            <input type="hidden" name="next" value={next} />
            <label
              htmlFor="password"
              style={{
                fontSize: "14px",
                fontWeight: 400,
                fontFamily: "var(--font-geist-mono), monospace",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
              }}
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoFocus
              autoComplete="off"
              style={{
                fontSize: "16px",
                padding: "12px 14px",
                border: "1px solid var(--color-border-strong)",
                borderRadius: "var(--radius-sm)",
                background: "transparent",
                color: "var(--color-text-strong)",
                fontFamily: "inherit",
                outline: "none",
              }}
            />
            {error && (
              <p style={{ fontSize: "14px", color: "#dc2626" }}>
                Incorrect password. Try again.
              </p>
            )}
            <button
              type="submit"
              style={{
                marginTop: "8px",
                fontSize: "16px",
                fontWeight: 500,
                padding: "12px 20px",
                border: "none",
                borderRadius: "var(--radius-sm)",
                background: "var(--color-text-strong)",
                color: "var(--color-bg)",
                cursor: "pointer",
                alignSelf: "flex-start",
              }}
            >
              Unlock
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
