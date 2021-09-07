import React, { useEffect, useState } from 'react';


function StockCard({ticker, name, market}) {
    const [profile, setProfile] = useState("Searching...");
    const [logo, setLogo] = useState("null");

    function fetchProfile(ticker){

    let API_KEY = 'c4r4r5qad3i9urro40f0';
    let API_Call = 'https://finnhub.io/api/v1/stock/profile2?symbol=' + ticker + '&token='+ API_KEY;
        console.log(API_Call);
    fetch(API_Call)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            setProfile(data);
        })
        .then(function(){
            if(profile.logo !== undefined){
                setLogo(profile.logo);
            }
        });
    
    }

 useEffect(() => {
    fetchProfile(ticker);
},[ticker]);

return(
<div className="max-w-sm p-10 bg-white bg-opacity-25 rounded shadow-xl">
    <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
        <img id="stockLogo" src={logo}/>
            <div className="flex flex-col">
                <span className="font-bold text-md text-white ml-2">
                    {ticker}
                </span>
                <span className="text-sm text-white ml-2">
                    {name}
                </span>
                <div className="flex items-center justify-start ml-2 my-2 space-x-2">
                    <span className="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-gray-500 bg-gray-200">
                    {market}
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>




)}
export default StockCard;