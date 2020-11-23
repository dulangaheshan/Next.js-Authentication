import '../styles/globals.css'
import Link from 'next/link'
import { css } from 'emotion'

import Amplify from 'aws-amplify'
import config from '../src/aws-exports'
Amplify.configure({
  ...config,
  ssr: true
})

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className={navStyle}>
        <Link href="/">
          <span className={linkStyle}>Home</span>
        </Link>
        <Link href="/profile">
          <span className={linkStyle}>Profile</span>
        </Link>
        <Link href="/protected">
          <span className={linkStyle}>Protected route</span>
        </Link>
        <Link href="/protected-client-route">
          <span className={linkStyle}>Protected client route</span>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

const linkStyle = css`
  margin-right: 20px;
  cursor: pointer;
`

const navStyle = css`
  display: flex;
`