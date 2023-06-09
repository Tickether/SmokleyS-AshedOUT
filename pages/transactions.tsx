import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Transactions.module.css'
import Navbar from '@/compontnent/navbar'
import Footer from '@/compontnent/footer'
import { useContractEvent } from 'wagmi'
import { NextPage } from 'next'
import { useContract, useContractEvents } from '@thirdweb-dev/react'
import { useEffect, useState } from 'react'


const Transactions : NextPage = () => {

  const [transactions, setTransactions] = useState()

  const { contract } = useContract("0x23477F5DbeBFeec97eEC4C39c408FA0e6868b239");

  const { data: shippingClaimedEvent } = useContractEvents(contract, "shippingClaimed")

  console.log(shippingClaimedEvent)

  
  const { data: shippingClaimedBulkEvent } = useContractEvents(contract, "shippingClaimedBulk")

  console.log(shippingClaimedBulkEvent)

  const { data: transferSingleEvent } = useContractEvents(contract, "TransferSingle")

  console.log(transferSingleEvent)

  const { data: TransferBatchEvent } = useContractEvents(contract, "TransferBatch")

  console.log(TransferBatchEvent)

/*
  useEffect(()=>{
    const getTransactions = []
    if (shippingClaimedEvent) {
      //getTransactions.push()
      
    }  
  },[])
*/
  /*
  useContractEvent({
    address: '0x23477F5DbeBFeec97eEC4C39c408FA0e6868b239',
    abi:[
      {
        name: 'shippingClaimed',
        inputs: [
          { indexed: true, internalType: "address", name: "to", type: "address" }, 
          { indexed: true, internalType: "uint256", name: "id", type: "uint256" },
          { indexed: true, internalType: "uint256", name: "amount", type: "uint256" },
      ],
        "anonymous": false,
        type: 'event',
      },    
    ],
    eventName: 'shippingClaimed',
    chainId: 11155111,
    listener(log) {
      console.log(log)
    },
  })
  //console.log(unwatch)

  useContractEvent({
    address: '0x23477F5DbeBFeec97eEC4C39c408FA0e6868b239',
    abi:[
        {
        name: 'shippingClaimedBulk',
        inputs: [
          { indexed: true, internalType: "address", name: "to", type: "address" }, 
          { indexed: true, internalType: "uint256[]", name: "ids", type: "uint256[]" },
          { indexed: true, internalType: "uint256[]", name: "amounts", type: "uint256[]" },
        ],
        "anonymous": false,
        type: 'event',
      },    
    ],
    eventName: 'shippingClaimedBulk',
    chainId: 11155111,
    listener(log) {
      console.log(log)
    },
  })
  */

  return (
    <>
      <Navbar/>
        <div>
          <div></div>
        </div>
      <Footer/>
    </>
  )
}

export default Transactions
