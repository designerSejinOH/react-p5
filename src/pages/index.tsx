import dynamic from 'next/dynamic'

const P5Canvas = dynamic(() => import('@/components/canvas/P5Canvas'), {
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
      <div className=' w-full bg-black fixed top-0'>
        <div className='text-white  animate-wiggle'>react.p5 + Next.js + TypeScript</div>
      </div>
      <div className=' w-full  bg-black fixed bottom-0'>
        <div className='text-white py-1 text-xs text-center'>gh repo clone designerSejinOH/react-p5</div>
      </div>
      <P5Canvas />
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
