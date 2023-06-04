import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Orders.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function OrderItem() {
  return (
    <>
        <div className={styles.orderItem}>
            <div className={styles.orderItemWrapper}>
                
            </div>
        </div>
    </>
  )
}
