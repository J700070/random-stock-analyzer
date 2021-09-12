import './App.css';
import React, { useEffect, useState } from 'react';
import StockCard from './StockCard'

function App() {

    const [stockList, setStockList] = useState(0);
    const [ticker, setTicker] = useState("Searching...");

    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getSingleStock(){
        if(stockList[getRandomInt(0,stockList.length)] === undefined){
            return;
        }
        let randomStock = stockList[getRandomInt(0,stockList.length)];
        setTicker(randomStock.displaySymbol);
    }

    function fetchStocks(){

        let API_KEY = 'c4r4r5qad3i9urro40f0';
        let API_Call = 'https://finnhub.io/api/v1/stock/symbol?exchange=US&token='+ API_KEY;
    
        fetch(API_Call)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                setStockList(data);
            });
        
    }


    useEffect(() => {
        fetchStocks();
    },[]);

    useEffect(() => {
        getSingleStock();
    },[stockList]);

    
  return (
    
    <div className="w-full h-screen font-sans">
        <div className="grid grid-cols-7 ">
            <div className="col-span-4 m-6">
                <StockCard ticker={ticker}/>
            </div>
            {/* CENTER */}
            <div className="col-start-5 col-span-3 ml-0 m-6">
                <div className="grid grid-rows-10">
                    <div className="w-full p-10 bg-white bg-opacity-25 rounded shadow-xl row-start-1 row-end-2">
                        <h1 className="mb-8 text-3xl font-light text-center text-white">
                            Random Stock Picker
                        </h1>
                        <div className="mb-8 text-5xl text-center text-white">
                            <h2>{ticker}</h2>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <button type="button" onClick={getSingleStock} className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                I want a stock!
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

  );
}

export default App;
