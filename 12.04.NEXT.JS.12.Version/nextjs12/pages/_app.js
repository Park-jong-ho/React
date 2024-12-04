import '../styles/globals.css'
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <footer>푸터입니다.</footer>
    </>
  )
}

export default MyApp
