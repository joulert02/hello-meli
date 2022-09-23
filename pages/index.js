import Head from 'next/head'
import { Layout } from '../src/components/template/layout/layout'
// import 'src/styles/global.scss'

export default function Home() {
  return (
    <Layout>
      <div className='container'>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <h1 className='title'>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>
      </div>
    </Layout>
  )
}
