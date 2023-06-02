import styles from '@/styles/Navbar.module.css'
import ConnectCustom from './connectCustom/connectCustom'
import Image from 'next/image'
import logo from '../public/SmokleyS.svg';

const Navbar = () => {

  return (
    <>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Image 
            src={logo} 
            alt="" 
          />
        </div>
        <div className={styles.menu}>
          <span>Transactions</span>
          <span>Orders</span>
          <span>Cart</span>
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