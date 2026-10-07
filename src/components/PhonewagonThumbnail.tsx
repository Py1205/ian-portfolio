import Image from "next/image";

export default function PhonewagonThumbnail() {
  return (
    <div
      className="thumbnail-card"
      style={{
        width: '100%',
        aspectRatio: '16 / 9',
        background: 'var(--color-screen-gallery-bg)',
        borderRadius: '15px',
        overflow: 'hidden',
        padding: '20px 20px 0 20px',
      }}
    >
      <div
        style={{
          borderRadius: '15px 15px 0 0',
          overflow: 'hidden',
          border: '1px solid var(--color-screen-border)',
          borderBottom: 'none',
          height: '100%',
        }}
      >
        <Image
          src="/work/phonewagon/product.avif"
          alt=""
          width={2880}
          height={1800}
          unoptimized
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
    </div>
  )
}
