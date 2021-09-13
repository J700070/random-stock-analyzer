import './App.css';
import React, { useEffect, useState } from 'react';
import StockCard from './StockCard'
import Particles from 'react-particles-js';
/* 
    1) Busqueda de stock concreto
    2) Añadir más etiquetas: OPORTUNIDAD (Alto crecimientom, ROIC, insiders y valoración) ; Small-mid-big-cap
    3) Resaltar con algún color lás mejores / peores métricas
    4) Mostrar transacciones: https://finnhub.io/docs/api/insider-transactions
    5) Mostrar precio de la acción: https://finnhub.io/docs/api/quote
    6) Implementar DCF automático
    7) Permitir filtrar por exchange / mercado
    8) Mostrar alguna gráfica -> DCF en 3 casos ; Barritas visuales estilo Gurufocus
    9) Mostrar Expected CAGR
    10) Mostrar noticias
    11) Añadir consejos: Si el ROE es mucho más alto que el ROA comprobar la deuda
    12) Utilizar stocks que me gustan -> Inferir métricas que puedan detectar otros iguales


    Última: Vender la página


*/



function App() {

    const [stockList, setStockList] = useState(0);
    const [ticker, setTicker] = useState("Searching...");
    /* Filtros: Exchanges ; Currency */
    const [filter, setFilter] = useState(["US","USD"]);
    
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
        if(randomStock.currency === filter[1] && !(randomStock.description).includes("ACQUISIT")  && randomStock.mic === "XNYS" && (randomStock.type !== "") && (randomStock.type !== "PUBLIC") && (randomStock.type !== "Closed-End Fund") && (randomStock.type !== "Equity WRT")){
            setTicker(randomStock.displaySymbol);
        }else {
            getSingleStock();
        }
    }

    function fetchStocks(){
        
        let API_KEY = 'c4r4r5qad3i9urro40f0';
        let API_Call = 'https://finnhub.io/api/v1/stock/symbol?exchange='+filter[0];

        if(filter[1] !== null)
            API_Call = API_Call.concat('&currency='+ filter[1]);

        API_Call = API_Call.concat('&token='+ API_KEY);


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
        
        <div className="grid grid-cols-7">
            <div className="col-span-4 m-6">
                <StockCard ticker={ticker}/>
            </div>
            {/* CENTER */}
            <div className="col-start-5 col-span-3 ml-0 m-6">
                <div className="grid grid-rows-10">
                    <div className="w-full p-10 bg-white bg-opacity-25 rounded shadow-xl row-start-1 row-end-2">
                        <h1 className="mb-8 text-3xl font-light text-center text-white">
                            Random Stock Analyser
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

        <Particles className="background w-full h-screen"
            params={{
                "particles": {
                    "number": {
                        "value": 100
                    },
                    "size": {
                        "value": 3
                    }
                },
            }} />

    </div>

  );
}

export default App;

