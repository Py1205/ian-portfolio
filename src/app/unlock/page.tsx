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
            paddingTop: "clamp(140px, 22vh, 220px)",
            maxWidth: "380px",
            width: "100%",
            paddingBottom: "var(--section-gap)",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(24px, 3vw, 28px)",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              fontWeight: 500,
              color: "var(--color-text-strong)",
            }}
          >
            Enter password to view.
          </h1>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.65,
              color: "var(--color-label)",
              paddingTop: "14px",
              maxWidth: "380px",
            }}
          >
            This case study contains client work under NDA. If you&apos;d like access, please feel free to contact me at{" "}
            <a
              href="mailto:ianp.ux@gmail.com"
              style={{ color: "var(--color-text-strong)", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              ianp.ux@gmail.com
            </a>
            .
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.65,
              color: "var(--color-label)",
              paddingTop: "10px",
            }}
          >
            If you&apos;re reviewing my work for a role, you can find the password in my resume.
          </p>

          <form
            action={unlock}
            style={{
              paddingTop: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              maxWidth: "420px",
            }}
          >
            <input type="hidden" name="next" value={next} />
            <label
              htmlFor="password"
              style={{
                fontSize: "14px",
                fontWeight: 400,
                color: "var(--color-text-muted)",
              }}
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="off"
              required
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? "password-error" : undefined}
              style={{
                fontSize: "16px",
                padding: "10px 12px",
                width: "100%",
                minWidth: 0,
                border: "1px solid var(--color-border-strong)",
                borderRadius: "var(--radius-sm)",
                background: "transparent",
                color: "var(--color-text-strong)",
                fontFamily: "inherit",
              }}
            />
            {error && (
              <p id="password-error" role="alert" style={{ fontSize: "14px", color: "#dc2626" }}>
                Incorrect password. Try again.
              </p>
            )}
            <button
              type="submit"
              className="transition-[filter,transform] duration-150 hover:brightness-110 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
              style={{
                marginTop: "8px",
                fontSize: "16px",
                fontWeight: 500,
                padding: "11px 24px",
                minHeight: "44px",
                border: "1px solid var(--color-accent)",
                borderRadius: "var(--radius-sm)",
                background: "var(--color-accent)",
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
