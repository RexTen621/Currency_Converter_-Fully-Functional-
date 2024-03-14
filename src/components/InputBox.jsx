import React, { useId } from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    currencyOptions=[],
    selectCurrency="eur",
    onCurrencyChange,
    amountDisable=false,
    currencyDisable=false,
    className="",

}){
    const amountId=useId()
    return(
       

        <div className={`bg-gray-800 px-4 py-4  text-sm rounded-lg flex {$classname} w-full `}>
            <div className='w-1/2'>
                <label htmlFor={amountId} className='text-1xl text-white inline-block w-1/2  justify-start text-left mx-0 my-2 font-bold'
                >
                    {label}
                </label>
                <input type="number"

               
                placeholder="amount"
                id={amountId}
                value={amount}
                onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                className='outline-none border border-gray-100  border-dashed rounded-md p-2 bg-transparent mb-2 w-full text-white'
                disabled={amountDisable} />

            </div>
            <div className='flex-wrap w-1/2 justify-end text-right mt-2'>

                <p className='text-slate-100 w-full mb-2 inline-block'>Currency Type</p>
                <select className='focus:outline-gray-400 bg-slate-100 px-1 py-1 rounded-lg w-1/2 shadow-lg text-center font-bold text-black my-1'
                value={selectCurrency}
                onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}
                >

                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>

                    ))}


                    

                   
                </select>

            </div>
        </div>





    )
}

export default InputBox;