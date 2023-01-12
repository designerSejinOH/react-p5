import React from 'react'
import { useRef, forwardRef } from 'react'
import { mergeRefs } from 'react-merge-refs'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = React.forwardRef<HTMLElement, LayoutProps>(({ children, ...props }, ref) => {
  const localRef = useRef()
  return (
    <div
      ref={mergeRefs([ref, localRef])}
      className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden bg-black dom text-gray-50'>
      {children}
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
