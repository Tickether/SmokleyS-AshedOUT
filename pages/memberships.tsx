import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Memberships.module.css'
import Navbar from '../compontnent/navbar'
import Footer from '@/compontnent/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Memberships() {
  return (
    <>
      <Navbar/>
      <Footer/>
    </>
  )
}
