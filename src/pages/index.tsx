import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'

const P5Canvasss = dynamic(() => import('@/components/canvas/P5Canvas'), {
  ssr: false,
})

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49

// Dom components go here
export default function Page(props) {
  return (
    <>
      <Instructions>
        <div className='text-white'>react.p5</div>
      </Instructions>
    </>
  )
}

Page.canvas = (props) => <P5Canvasss />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
