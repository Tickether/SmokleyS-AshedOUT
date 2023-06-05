import type { GetServerSideProps, NextPage } from 'next'
import { Network, Alchemy } from 'alchemy-sdk';
import { Attributes, NFTs, Product } from '../models/models';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../compontnent/navbar'
import Footer from '@/compontnent/footer'
import {ProductItem} from '@/compontnent/product/productItem'


export const getServerSideProps: GetServerSideProps = async () => {
  
  const settings = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY, //"wQhhyq4-jQcPzFRui3PljR6pzRwd5N_n",
    network: Network.ETH_SEPOLIA,
  };

  // init with key and chain info 
  const alchemy = new Alchemy(settings);
  // Print total NFT collection returned in the response:
  const { nfts } = await alchemy.nft.getNftsForContract("0x229C0715e70741F854C299913C2446eb4400e76C")
  const loadedProducts = JSON.stringify(nfts)
  // console.log(nfts) 
  // Pass data to the page via props
  return { props: { loadedProducts } }
}


const Products: NextPage <{ loadedProducts: string }> = ({ loadedProducts }) => {

  const loadProducts = (JSON.parse(loadedProducts))
  console.log(loadProducts) 

  return (
    <>
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.products}>
            {loadProducts.map(( product: Product) =>(
              <ProductItem product={product} key={product.tokenId}/>
            ))}
          </div> 
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Products