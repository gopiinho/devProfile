import Head from "next/head"
import Main from "../components/Main"
import { motion as m } from "framer-motion"

export default function Home() {
  return (
    <m.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Head>
        <title>Gurpreet - Portfolio</title>
        <meta name="description" content="Personal website." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Main />
    </m.div>
  )
}
