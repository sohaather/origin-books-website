/**
 * A still, art-directed stand-in for the 3D book, used on mobile and
 * whenever the user has requested reduced motion. Pure CSS/SVG — no WebGL.
 */
export default function StaticBookFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center" role="img" aria-label="Illustration of a closed hardcover book with a brass foil title plate">
      <div className="relative" style={{ perspective: '1000px' }}>
        <div
          className="relative h-64 w-44 rounded-[2px] shadow-2xl sm:h-80 sm:w-56"
          style={{
            background: 'linear-gradient(135deg, #16223A 0%, #0B1220 60%, #080D18 100%)',
            transform: 'rotateY(-18deg) rotateX(4deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Page edge sliver */}
          <div
            className="absolute -right-1.5 top-1 bottom-1 w-1.5 rounded-r-sm sm:-right-2 sm:w-2"
            style={{ background: '#EFEBE1' }}
          />
          {/* Brass title plate */}
          <div className="absolute inset-x-6 bottom-16 h-px bg-brass sm:bottom-20" />
          <div className="absolute inset-x-10 bottom-12 h-px bg-brass sm:bottom-16" />
          {/* Frame lines */}
          <div className="absolute inset-x-4 top-6 h-px bg-brass/60" />
          <div className="absolute inset-x-4 bottom-6 h-px bg-brass/60" />
        </div>
      </div>
    </div>
  )
}
