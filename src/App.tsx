import Form from './components/ui/Form'
import Layout from './components/ui/Layout'
import { ToastProvider } from './components/ui/toast'
import { Toaster } from './components/ui/toaster'

function App() {

  return (

    <ToastProvider>
      <Toaster />
      <Layout>
        <h1 className='text-2xl text-grey-900 font-bold'>Contact Us</h1>
        <Form />
      </Layout>
    </ToastProvider>
  )
}

export default App
