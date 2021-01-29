import React, { useEffect, useState } from 'react'
import { CurrencyRow } from './CurrencyRow'

export const Currency = () => {

    const BASE_URL = "https://api.exchangeratesapi.io/latest";

    const [currencyOptions, setscurrencyOptions] = useState([]);
    const [fromCurrency, setfromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();
    const [exchangeRate, setexchangeRate] = useState()
    const [amount, setamount] = useState(1);
    const [amountInFromCurrency, setamountInFromCurrency] = useState(true)

    let toAmount,  fromAmount
    
    if(amountInFromCurrency){
        fromAmount = amount
        toAmount = amount * exchangeRate
    } else {
        toAmount = amount
        fromAmount = amount / exchangeRate
    }

    const handleFromAmountChange = (e) => {
        setamount(e.target.value);
        setamountInFromCurrency(true)
    }
    const handleToAmountChange = (e) => {
        setamount(e.target.value);
        setamountInFromCurrency(false);
    }

    useEffect(() => {

        if(fromCurrency != null && toCurrency != null){

            fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
            .then(res => res.json())
            .then(data => setexchangeRate(data.rates[toCurrency]))
        }
        
    }, [fromCurrency , toCurrency])

    useEffect(() => {
        fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
            const firstCurrency = Object.keys(data.rates)[0];
            setscurrencyOptions([data.base , ...Object.keys(data.rates)])
            setfromCurrency(data.base);
            setToCurrency(firstCurrency);
            setexchangeRate(data.rates[firstCurrency]);
        })
    }, [])


    return (
        <>
        <h1 className="title-project__currency">Currency converter</h1>
            <div className="currency-container">
                <CurrencyRow currencyOptions={currencyOptions} 
                selectCurrency={fromCurrency} 
                onChangeCurrency={ e =>setfromCurrency(e.target.value) }
                amount={fromAmount} 
                onChangeAmount={handleFromAmountChange}>
                </CurrencyRow>
                <div style={{ fontSize:"2rem" }}><strong>=</strong></div>
                <CurrencyRow
                currencyOptions={currencyOptions} 
                selectCurrency={toCurrency}
                onChangeCurrency={ e =>setToCurrency(e.target.value) } 
                amount={toAmount}
                onChangeAmount={handleToAmountChange}
                >
                </CurrencyRow>
            </div>
        </>
    )
}
