import React, { useId } from "react";

function InputBox({
   label,
   amount,
   onAmountChange,
   isAmountDisable = false,
   isCurrencyDisable = false,
   currencySelected = "pkr",
   onCurrencyChange,
   currencyOptions = [],
   className = "",
}) {
   const id = useId();

   return (
      // if user gives custom CSS then append it here using template literals..
      <div className={`bg-slate-300 p-3 rounded-lg text-sm flex ${className}`}>
         <div className="w-1/2">
            <label className="text-black/40 mb-2 inline-block" htmlFor={id}>
               {label}
            </label>
            <input
               id={id}
               className="outline-none w-full bg-transparent py-1.5 font-bold"
               type="number"
               placeholder="Amount"
               value={amount}
               disabled={isAmountDisable}
               onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value)) }
            />
         </div>
         <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select
               className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none font-bold"
               value={currencySelected}
               onChange={(e) =>
                  onCurrencyChange && onCurrencyChange(e.target.value)
               }
               disabled={isCurrencyDisable}
            >
               {/* Yahan map main curly braces nhi aayenge wrna return statement likhna parega. Either use () parenthesis or nothing which auto result in return of <option> */}
               {currencyOptions.map((currency) => (
                  <option key={currency} value={currency}>
                     {currency}
                  </option>
               ))}
            </select>
         </div>
      </div>
   );
}

export default InputBox;
