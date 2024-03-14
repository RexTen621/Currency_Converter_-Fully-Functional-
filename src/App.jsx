import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/InputBox'

function App() {

  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState("eur")
  const [to,setTo]=useState("inr")
  let [convertedAmount,setConvertedAmount]=useState(0);

  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convertion=()=>{

    setConvertedAmount(amount*currencyInfo[to])

  }
 
  return (
    <>
    
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url('')`,
      }}>
        <div className='w-full p-10'>
          <div className='w-full max-w-md mx-auto border border-gray-400 rounded-lg p-5 backdrop-blur-sm bg-white/20'>
          <form
          onSubmit={(e)=>{
            e.preventDefault();
            convertion();
          }} >
          <Input

          label="From"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency)=>setFrom(currency)}
          selectCurrency={from}
          onAmountChange={(amount)=>setAmount(amount)}


          
          />
          <div className='relative w-full h-4'>
          <button className='w-1/8 bg-green-600 absolute left-1/2 -translate-x-1/2 -translate-y-1/4 '
          icon="fa-solid fa-retweet" 
          onClick={swap}>
            
            SWAP
          </button>

          </div>
          <div className='w-full mt-1 mb-4'>
          <Input
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency)=>setTo(currency)}
          selectCurrency={to}
         
          amountDisable
          />

          </div>
          
          
          <button type='submit' className='w-full rounded-lg p-4 my-1 bg-orange-600 text-white text-3xl font-bold' >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>


          </div>
          
        </div>
        

      </div>
      
    </>
  )
}

export default App
