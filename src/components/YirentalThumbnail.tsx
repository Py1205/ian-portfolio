import Image from "next/image";

export default function YirentalThumbnail() {
  return (
    <div
      className="thumbnail-card"
      style={{
        width: "100%",
        aspectRatio: "16 / 9",
        background: "var(--color-screen-gallery-bg)",
        borderRadius: "15px",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "14px",
        padding: "20px 20px 0",
        alignItems: "start",
      }}
    >
      {["homepage", "default-filter", "more-filters"].map((screen) => (
        <div
          key={screen}
          style={{
            borderRadius: "15px 15px 0 0",
            overflow: "hidden",
            border: "1px solid var(--color-screen-border)",
            borderBottom: "none",
          }}
        >
          <Image
            src={`/work/yirental/${screen}.avif`}
            alt=""
            width={750}
            height={1624}
            unoptimized
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      ))}
    </div>
  );
}
