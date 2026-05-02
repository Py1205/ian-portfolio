// Disputes360 project thumbnail — single desktop screen, cropped at bottom for 16/9
export default function Disputes360Thumbnail() {
  return (
    <div
      className="thumbnail-card"
      style={{
        width: '100%',
        aspectRatio: '16 / 9',
        background: '#f4f4f5',
        borderRadius: '8px',
        overflow: 'hidden',
        padding: '20px 20px 0 20px',
      }}
    >
      <div
        style={{
          borderRadius: '8px 8px 0 0',
          overflow: 'hidden',
          border: '1px solid #e4e4e7',
          borderBottom: 'none',
          height: '100%',
        }}
      >
        <img
          src="/work/disputes360/hero.avif"
          alt=""
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
    </div>
  )
}
