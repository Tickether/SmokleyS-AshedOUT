import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Cart.module.css'
import Navbar from '../compontnent/navbar'
import Footer from '@/compontnent/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Cart() {
  return (
    <>
        <Navbar/>
        <div className={styles.container}>
            <div className={styles.wrapper}>

            </div>
        </div>
        <Footer/>
    </>
  )
}
