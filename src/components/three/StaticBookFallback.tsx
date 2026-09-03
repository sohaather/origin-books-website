import coverImage from '@/assets/books/penny-front.webp'

/**
 * Instant static version of the Penny book cover.
 * Uses the real cover image so the correct artwork appears immediately
 * while the 3D WebGL book finishes loading.
 */
export default function StaticBookFallback() {
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      role="img"
      aria-label="Penny book cover"
    >
      <div
        className="relative"
        style={{
          perspective: '1000px',
        }}
      >
        <img
          src={coverImage}
          alt="Penny book cover"
          className="h-64 w-44 rounded-[2px] object-cover shadow-2xl sm:h-80 sm:w-56"
          style={{
            transform: 'rotateY(-18deg) rotateX(4deg)',
            transformStyle: 'preserve-3d',
          }}
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </div>
  )
}