import GlobalStyles from '../styles/globals'
import './../styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
