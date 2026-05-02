// Autobahn project thumbnail — 3 mobile screens, cropped for visual interest
export default function AutobahnThumbnail() {
  return (
    <div
      className="thumbnail-card"
      style={{
        width: '100%',
        aspectRatio: '16 / 9',
        background: '#f4f4f5',
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '14px',
        padding: '20px 20px 0 20px',
        alignItems: 'flex-start',
      }}
    >
      {[
        '/work/autobahn/wallet.avif',
        '/work/autobahn/transactions.avif',
        '/work/autobahn/disputes.avif',
      ].map((src) => (
        <div
          key={src}
          style={{
            borderRadius: '8px 8px 0 0',
            overflow: 'hidden',
            border: '1px solid #e4e4e7',
            borderBottom: 'none',
          }}
        >
          <img
            src={src}
            alt=""
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      ))}
    </div>
  )
}
