export default function Instructions({ children }) {
  return (
    <div
      className='absolute z-10 max-w-lg py-8 md:text-base top-20 left-1/2 transform -translate-x-1/2'
      style={{ maxWidth: 'calc(100% - 20px)' }}>
      {children}
    </div>
  )
}
