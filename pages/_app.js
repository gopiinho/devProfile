import "../styles/globals.css"
import Navbar from "../components/Navbar"
import { AnimatePresence } from "framer-motion"

export default function App({ Component, pageProps, router }) {
  return (
    <div>
      <Navbar />
      <AnimatePresence initial={false}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  )
}
