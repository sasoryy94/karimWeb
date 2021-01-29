import React from 'react'
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';


export const CurrencyRow = ({currencyOptions , selectCurrency , onChangeCurrency, amount , onChangeAmount}) => {
    return (
        <div >
           <Input style={{ marginRight:"20px" }} variant="outlined" type="number" value={amount} onChange={onChangeAmount}/>
           <NativeSelect  value={selectCurrency} onChange={onChangeCurrency} >
               {
                   currencyOptions.map(item => (                       
                       <option value={item} key={item} >{item} </option>
                ))
            }
            </NativeSelect > 
        </div>
    )
}
