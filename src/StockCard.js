import React, { useEffect, useState } from 'react';




function StockCard({ticker}) {
    const [profile, setProfile] = useState("Searching...");
    const [logo, setLogo] = useState("Searching...");
    const [name, setName] = useState("Searching...");
    const [market, setMarket] = useState("Searching...");
    const [years, setYears] = useState("Searching...");
    const [marketCap, setMarketCap] = useState("Searching...");
    const [web, setWeb] = useState("Searching...");
    const [industry, setIndustry] = useState("Searching...");
    const [currency, setCurrency] = useState("Searching...");
    const [shares, setShares] = useState("Searching...");


    function fetchProfile(ticker){
        

        let API_KEY = 'c4r4r5qad3i9urro40f0';
        let API_Call = 'https://finnhub.io/api/v1/stock/profile2?symbol=' + ticker + '&token='+ API_KEY;

        


        fetch(API_Call)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                setProfile(data);
            })
            ;
    }

    function refreshInfo(){

        if(profile.name !== undefined){
            setLogo(profile.logo);
            setName(profile.name);
            setMarket(profile.exchange);
            setYears(new Date().getFullYear() - (profile.ipo).split("-")[0]);
            setMarketCap(profile.marketCapitalization);
            setWeb(profile.weburl);
            setIndustry(profile.finnhubIndustry);
            setCurrency(profile.currency);
            setShares(profile.shareOutstanding);
        }else{
            setLogo("Not found");
            setName("Not found");
            setMarket("Not found");
            setYears("Not found");
            setMarketCap("Not found");
            setWeb("Not found");
            setIndustry("Not found");
            setCurrency("Not found");
            setShares("Not found");
        }
    }

    useEffect(() => {
        fetchProfile(ticker);
    },[ticker]);

    useEffect(() => {
        refreshInfo();
    });

return(
<div className="p-5 bg-white bg-opacity-25 rounded shadow-xl">
    <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col">
            {/* HEADER */}
            <div className="flex px-4">
                <img id="stockLogo" alt="" src={logo}/>
                <div className="flex flex-col ml-2">
                    <span className="font-bold text-md text-white ">
                        {ticker}
                    </span>
                    <span className="text-sm text-white ">
                        {name}
                    </span>
                    <span className="text-sm text-white ">
                        Market Cap: {marketCap} (million {currency})
                    </span>
                    <span className="text-sm text-white ">
                        Outstanding Shares: {shares} million
                    </span>
                </div>
            </div>
            <div className="flex items-center justify-start m-3 space-x-2">
                {/* TAGS */}
                <span className="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-gray-500 bg-gray-200">
                    {market}
                </span>
                <span className="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-gray-500 bg-gray-200">
                    {industry}
                </span>
                <span className="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-gray-500 bg-gray-200">
                    {years} years since IPO
                </span>
            </div>
            <hr className=" border-opacity-25 ml-3 mb-2"></hr>
            <div className="flex flex-col ml-3">
                {/* Links */}
                <span className="text-sm text-white ">
                   {web}
                </span>

                
            </div>
        </div>
    </div>
</div>




)}
export default StockCard;