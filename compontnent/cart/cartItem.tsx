import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Cart.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function CartItem() {
    return (
        <>
            <div className={styles.cartItem}>
                <div className={styles.cartItemWrapper}>
                    
                </div>
            </div>
        </>
    )
}
