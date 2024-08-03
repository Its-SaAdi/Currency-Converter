import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

function App() {
   const [amount, setAmount] = useState(1);
   const [fromLabel, setFromLabel] = useState("usd");
   const [toLabel, setToLabel] = useState("pkr");
   const [convertedAmount, setConvertedAmount] = useState(0);

   const currencyInfo = useCurrencyInfo(fromLabel);
   const currencyOptions = Object.keys(currencyInfo);

   const convertCurrency = () => {
      setConvertedAmount(amount * currencyInfo[toLabel]);
   };

   const swapCurrencies = () => {
      setFromLabel(toLabel);
      setToLabel(fromLabel);
      setAmount(convertedAmount);
      setConvertedAmount(amount);
   };

   return (
      <div
         className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
         style={{
            backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=600')`,
         }}
      >
         <div className="w-full">
            <h1 className="text-center text-3xl -mt-20 mb-14 font-bold backdrop-blur-sm bg-blue-200/30 py-2">Currency Converter</h1>

            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
               <form
                  onSubmit={(e) => {
                     e.preventDefault();
                     convertCurrency();
                  }}
               >
                  <div className="w-full mb-1">
                     <InputBox
                        label="From"
                        amount={amount}
                        onAmountChange={(amount) => setAmount(amount)}
                        currencyOptions={currencyOptions}
                        onCurrencyChange={(currency) => setFromLabel(currency)}
                        currencySelected={fromLabel}
                     />
                  </div>
                  <div className="relative w-full h-0.5">
                     <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-500"
                        onClick={swapCurrencies}
                     >
                        swap
                     </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                     <InputBox
                        label="To"
                        amount={convertedAmount}
                        currencyOptions={currencyOptions}
                        isAmountDisable
                        currencySelected={toLabel}
                        onCurrencyChange={(currency) => setToLabel(currency)}
                     />
                  </div>
                  <button
                     type="submit"
                     className="w-full bg-blue-600 text-slate-200 px-4 py-3 rounded-lg font-bold hover:bg-blue-500"
                  >
                     Convert {fromLabel.toUpperCase()} to{" "}
                     {toLabel.toUpperCase()}
                  </button>
               </form>
            </div>

            <article>
               <p className="fixed bottom-2 w-full backdrop-blur-sm bg-blue-200/30  font-bold text-sm text-center mt-4 py-2">
                  ( Copyright &copy; by <a href="JavaScript:void(0)" className="underline">Muhammad Saad Jawed.</a> All rights
                  reserved. )
               </p>
            </article>
         </div>
      </div>
   );
}

export default App;