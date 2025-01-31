import { PropsWithChildren } from 'react'

const Layout = ({children} :  PropsWithChildren) => {
  return (
    <main className='bg-white w-full md:w-[600px] h-full m-auto rounded-lg p-6 overflow-hidden'>
        {children}
    </main>
  )
}

export default Layout
