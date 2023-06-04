import styles from '@/styles/Navbar.module.css'
import ConnectCustom from './connectCustom/connectCustom'
import Image from 'next/image'
import logo from '../public/SmokleyS.svg';
import Link from 'next/link';

const Navbar = () => {

  return (
    <>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image 
              src={logo} 
              alt="" 
            />
          </Link>
        </div>
        <div className={styles.menu}>
          <Link href='/memberships'>
            <span>Memberships</span>
          </Link>
          <Link href='/transactions'>
            <span>Transactions</span>
          </Link>
          <Link href='/orders'>
            <span>Orders</span>
          </Link>
          <Link href='/cart'>
            <span>Cart</span>
          </Link>
        </div>
        <div className={styles.connect}>
          <ConnectCustom/>
        </div>
      </div>

    </div>
    
    </>
  )
}


export default Navbar