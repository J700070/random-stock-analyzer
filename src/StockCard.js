import React, { useEffect, useState } from 'react';




function StockCard({ticker}) {
    /* Profile */
    const [profile, setProfile] = useState("Searching...");
    const [logo, setLogo] = useState("Searching...");
    const [name, setName] = useState("Searching...");
    const [market, setMarket] = useState("Searching...");
    const [country, setCountry] = useState("Searching...");
    const [years, setYears] = useState("Searching...");
    const [marketCap, setMarketCap] = useState("Searching...");
    const [industry, setIndustry] = useState("Searching...");
    const [currency, setCurrency] = useState("Searching...");
    const [shares, setShares] = useState("Searching...");

    /* Profile2 */
    const [profile2, setProfile2] = useState("Searching...");
    const [week52High, setWeek52High] = useState("Searching...");
    const [week52Low, setWeek52Low] = useState("Searching...");
    const [Week52PriceReturnDaily, set52WeekPriceReturnDaily] = useState("Searching...");

    /* Company Overview */
    const [companyOverview, setCompanyOverview] = useState("Searching...");
    const [description, setDescription] = useState("Searching...");

    /* FINANCIALS */
    const [revenueTTM , setRevenueTTM ] = useState("Searching...");
    const [grossProfitTTM , setGrossProfitTTM ] = useState("Searching...");
    const [EBITDA, setEBITDA] = useState("Searching...");
    const [operatingIncomeTTM, setOperatingIncomeTTM] = useState("Searching...");
    const [netIncomeTTM, setNetIncomeTTM] = useState("Searching...");
    const [netDebtAnnual, setNetDebtAnnual] = useState("Searching...");
    const [currentRatioAnnual, setCurrentRatioAnnual] = useState("Searching...");

    /* PER SHARE */
    const [eps , setEPS ] = useState("Searching...");
    const [bookValue, setBookValue ] = useState("Searching...");
    const [revenuePerShareTTM , setRevenuePerShareTTM ] = useState("Searching...");
    const [dilutedEPSTTM , setDilutedEPSTTM ] = useState("Searching...");
    const [dividendPerShare, setDividendPerShare ] = useState("Searching...");
    const [freeCashFlowPerShareTTM, setFreeCashFlowPerShareTTM] = useState("Searching...");


    /* Margins & Ratios*/
    const [grossMarginTTM , setGrossMarginTTM ] = useState("Searching...");
    const [operatingMarginTTM , setOperatingMarginTTM ] = useState("Searching...");
    const [profitMargin , setProfitMargin ] = useState("Searching...");

    const [returnOnAssetsTTM , setReturnOnAssetsTTM ] = useState("Searching...");
    const [returnOnEquityTTM , setReturnOnEquityTTM ] = useState("Searching...");
    const [roiTTM, setRoiTTM] = useState("Searching...");

    /* Growth */
    const [netMarginGrowth5Y, setNetMarginGrowth5Y] = useState("Searching...");
    const [revenueGrowth3Y, setRevenueGrowth3Y] = useState("Searching...");
    const [revenueGrowth5Y, setRevenueGrowth5Y] = useState("Searching...");
    const [revenueGrowthTTMYoy, setRevenueGrowthTTMYoy] = useState("Searching...");
    const [ebitdaCagr5Y, setEbitdaCagr5Y] = useState("Searching...");
    const [epsGrowth3Y, setEpsGrowth3Y] = useState("Searching...");
    const [epsGrowth5Y, setEpsGrowth5Y] = useState("Searching...");
    const [epsGrowthTTMYoy, setEpsGrowthTTMYoy] = useState("Searching...");
    const [dividendGrowthRate5Y, setdividendGrowthRate5Y] = useState("Searching...");
    const [bookValueShareGrowth5Y, setBookValueShareGrowth5Y] = useState("Searching...");
    const [capitalSpendingGrowth5Y, setCapitalSpendingGrowth5Y] = useState("Searching...");
    
    /* VALUATION */
    const [peg, setPEG] = useState("Searching...");
    const [trailingPE , setTrailingPE ] = useState("Searching...");
    const [forwardPE , setForwardPE ] = useState("Searching...");
    const [priceToSalesRatioTTM , setPriceToSalesRatioTTM ] = useState("Searching...");
    const [priceToBookRatio , setPriceToBookRatio ] = useState("Searching...");
    const [evToRevenue , setEVToRevenue ] = useState("Searching...");
    const [evToEBITDA , setEVToEBITDA ] = useState("Searching...");
    

    /* Ownership */
    const [percentInsiders , setPercentInsiders ] = useState("Searching...");
    const [percentInstitutions , setPercentInstitutions ] = useState("Searching...");
    
    
    
 



    let currencySymbol = "$";
    if(currency !== "USD")
        currencySymbol = "";

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

    function fetchCompanyOverview(ticker){
        let API_KEY = 'J99K9XKIP0I6V97F';
        let API_Call = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol='+ ticker +'&apikey='+ API_KEY;

        fetch(API_Call)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                setCompanyOverview(data);
                console.log(data);
            });
            ;
    }

    function fetchProfile2(ticker){
        
        let API_KEY = 'c4r4r5qad3i9urro40f0';
        let API_Call = 'https://finnhub.io/api/v1/stock/metric?symbol='+ ticker +'&metric=all&token=' + API_KEY;

        fetch(API_Call)
            .then(function(response){
                return response.json();
                
            })
            .then(function(data){
                setProfile2(data.metric);
            });
            
    }

    function refreshInfo(){

        if(profile.name !== undefined){
            setLogo(profile.logo);
            setName(profile.name);
            setMarket(profile.exchange);
            setYears(new Date().getFullYear() - (profile.ipo).split("-")[0]);
            setMarketCap(profile.marketCapitalization.toFixed(2));
            setIndustry(profile.finnhubIndustry);
            setCountry(profile.country);
            setCurrency(profile.currency);
            setShares(profile.shareOutstanding);
        }else{
            setLogo("https://static.finnhub.io/logo/b95271c6-81b1-11ea-80d1-00000000092a.png");
            setName(" ");
            setMarket(" ");
            setYears(" ");
            setMarketCap(" ");
            setIndustry(" ");
            setCountry(" ")
            setCurrency(" ");
            setShares(" ");
        }

        if(companyOverview.Name !== undefined){
            setDescription(companyOverview.Description);
            setEBITDA((companyOverview.EBITDA / 1000000).toFixed(2));
            setPEG(companyOverview.PEGRatio);
            setBookValue(companyOverview.BookValue);
            setDividendPerShare(companyOverview.DividendPerShare);
            setEPS(companyOverview.EPS);
            setRevenuePerShareTTM(companyOverview.RevenuePerShareTTM);
            setProfitMargin((companyOverview.ProfitMargin*100).toFixed(2));
            setOperatingMarginTTM((companyOverview.OperatingMarginTTM*100).toFixed(2));
            setReturnOnAssetsTTM((companyOverview.ReturnOnAssetsTTM*100).toFixed(2));
            setReturnOnEquityTTM((companyOverview.ReturnOnEquityTTM*100).toFixed(2));
            setRevenueTTM((companyOverview.RevenueTTM / 1000000).toFixed(2));
            setGrossProfitTTM((companyOverview.GrossProfitTTM / 1000000).toFixed(2));
            setDilutedEPSTTM(companyOverview.DilutedEPSTTM);
            setTrailingPE(companyOverview.TrailingPE);
            setForwardPE(companyOverview.ForwardPE);
            setPriceToSalesRatioTTM(companyOverview.PriceToSalesRatioTTM);
            setPriceToBookRatio(companyOverview.PriceToBookRatio);
            setEVToRevenue(companyOverview.EVToRevenue);
            setEVToEBITDA(companyOverview.EVToEBITDA);
            setPercentInsiders(companyOverview.PercentInsiders);
            setPercentInstitutions(companyOverview.PercentInstitutions);
            


            setOperatingIncomeTTM((revenueTTM * operatingMarginTTM / 100).toFixed(2));
            setNetIncomeTTM((revenueTTM * profitMargin / 100).toFixed(2));
            setGrossMarginTTM((grossProfitTTM / revenueTTM * 100).toFixed(2));
            
        }else{
            setDescription(" ");
            setEBITDA(" ");
            setPEG(" ");
            setBookValue(" ");
            setDividendPerShare(" ");
            setEPS(" ");
            setRevenuePerShareTTM(" ");
            setProfitMargin(" ");
            setOperatingMarginTTM(" ");
            setReturnOnAssetsTTM(" ");
            setReturnOnEquityTTM(" ");
            setRevenueTTM(" ");
            setGrossProfitTTM(" ");
            setDilutedEPSTTM(" ");
            setTrailingPE(" ");
            setForwardPE(" ");
            setPriceToSalesRatioTTM(" ");
            setPriceToBookRatio(" ");
            setEVToRevenue(" ");
            setEVToEBITDA(" ");
            setPercentInsiders(" ");
            setPercentInstitutions(" ");

            setOperatingIncomeTTM(" ");
            setNetIncomeTTM(" ");
            setGrossMarginTTM(" ");
        }

        /* Comprobación de la existencia de los parámetros */
        if(profile2.roiTTM !== null && profile2.roiTTM !== undefined){
            setRoiTTM((profile2.roiTTM).toFixed(2));
        }else{
            setRoiTTM(" ");
        }

        if(profile2.revenueGrowthTTMYoy !== null && profile2.revenueGrowthTTMYoy !== undefined){
            setRevenueGrowthTTMYoy((profile2.revenueGrowthTTMYoy).toFixed(2));
        }else{
            setRevenueGrowthTTMYoy(" ");
        }

        if(profile2.revenueGrowth3Y !== null && profile2.revenueGrowth3Y !== undefined){
            setRevenueGrowth3Y((profile2.revenueGrowth3Y).toFixed(2));
        }else{
            setRevenueGrowth3Y(" ");
        }

        if(profile2.revenueGrowth5Y !== null && profile2.revenueGrowth5Y !== undefined){
            setRevenueGrowth5Y((profile2.revenueGrowth5Y).toFixed(2));
        }else{
            setRevenueGrowth5Y(" ");
        }

        if(profile2.epsGrowthTTMYoy !== null && profile2.epsGrowthTTMYoy !== undefined){
            setEpsGrowthTTMYoy((profile2.epsGrowthTTMYoy).toFixed(2));
        }else{
            setEpsGrowthTTMYoy(" ");
        }

        if(profile2.epsGrowth3Y !== null && profile2.epsGrowth3Y !== undefined){
            setEpsGrowth3Y((profile2.epsGrowth3Y).toFixed(2));
        }else{
            setEpsGrowth3Y(" ");
        }

        if(profile2.epsGrowth5Y !== null && profile2.epsGrowth5Y !== undefined){
            setEpsGrowth5Y((profile2.epsGrowth5Y).toFixed(2));
        }else{
            setEpsGrowth5Y(" ");
        }

        if(profile2.ebitdaCagr5Y !== null && profile2.ebitdaCagr5Y !== undefined){
            setEbitdaCagr5Y((profile2.ebitdaCagr5Y).toFixed(2));
        }else{
            setEbitdaCagr5Y(" ");
        }

        if(profile2.netMarginGrowth5Y !== null && profile2.netMarginGrowth5Y !== undefined){
            setNetMarginGrowth5Y((profile2.netMarginGrowth5Y).toFixed(2));
        }else{
            setNetMarginGrowth5Y(" ");
        }

        
        if(profile2.currentRatioAnnual !== null && profile2.currentRatioAnnual !== undefined){
            setCurrentRatioAnnual((profile2.currentRatioAnnual).toFixed(2));
        }else{
            setCurrentRatioAnnual(" ");
        }

        if(profile2.netDebtAnnual !== null && profile2.netDebtAnnual !== undefined){
            setNetDebtAnnual((profile2.netDebtAnnual/1000000).toFixed(2));
        }else{
            setNetDebtAnnual(" ");
        }

        if(profile2.freeCashFlowPerShareTTM !== null && profile2.freeCashFlowPerShareTTM !== undefined){
            setFreeCashFlowPerShareTTM((profile2.freeCashFlowPerShareTTM).toFixed(2));
        }else{
            setFreeCashFlowPerShareTTM(" ");
        }

        if(profile2.dividendGrowthRate5Y !== null && profile2.dividendGrowthRate5Y !== undefined){
            setdividendGrowthRate5Y((profile2.dividendGrowthRate5Y).toFixed(2));
        }else{
            setdividendGrowthRate5Y(" ");
        }

        if(profile2.bookValueShareGrowth5Y !== null && profile2.bookValueShareGrowth5Y !== undefined){
            setBookValueShareGrowth5Y((profile2.bookValueShareGrowth5Y).toFixed(2));
        }else{
            setBookValueShareGrowth5Y(" ");
        }

        if(profile2.capitalSpendingGrowth5Y !== null && profile2.capitalSpendingGrowth5Y !== undefined){
            setCapitalSpendingGrowth5Y((profile2.capitalSpendingGrowth5Y).toFixed(2));
        }else{
            setCapitalSpendingGrowth5Y(" ");
        }

    }

    useEffect(() => {
        fetchProfile(ticker);
        fetchCompanyOverview(ticker);
        fetchProfile2(ticker);
    },[ticker]);

    useEffect(() => {
        refreshInfo();
    });

return(
<div className="p-12 bg-white bg-opacity-25 rounded shadow-xl font-mono">
    <div className="flex items-center justify-between ">
        <div className="flex flex-col">
            {/* HEADER */}
            <div className="flex">
                <img id="stockLogo" alt="" src={logo}/>
                <div className="flex flex-col ml-2 w-1/2 mb-2 ">
                    <span className="font-bold text-md text-white ">
                        {ticker}
                    </span>
                    <span className="text-sm text-white ">
                        {name}
                    </span>
                    <span className="text-sm text-white ">
                        Market Cap: {currencySymbol} {addCommas(marketCap)} millions
                    </span>
                    <span className="text-sm text-white ">
                        Outstanding Shares: {addCommas(shares)} millions
                    </span>
                </div>

                {/* TAGS */}
                <div className="flex justify-start content-start mx-6 gap-2 h-32 flex-wrap flex-shrink w-1/2 max-h-2">
                    <span className={"px-3 py-2 flex font-semibold text-xs rounded-md text-gray-500 bg-gray-200 " + (market !== " " ? "" : "hidden")}>
                        {market}
                    </span>
                    <span className={"px-3 py-2 flex font-semibold text-xs rounded-md text-gray-500 bg-gray-200" + (country !== " " ? "" : "hidden")}>
                        {country}
                    </span>
                    <span className={"px-3 py-2 flex font-semibold text-xs rounded-md text-gray-500 bg-gray-200" + (industry !== " " ? "" : "hidden")}>
                        {industry}
                    </span>
                    <span className={"px-3 py-2 flex font-semibold text-xs rounded-md text-gray-500 bg-gray-200" + (years !== " " ? "" : "hidden")}>
                        {years} years since IPO
                    </span>

                </div>
            </div>
            
            <div className="flex flex-col">
                <span className="text-xs mt-5 text-white ">
                    {description}
                </span>
            </div>
            {/* HEADER ENDS */}
            <hr className=" border-opacity-25 m-10"></hr>
            {/* BODY */}
            <div className="grid grid-cols-3 gap-12">
                
                <div className="flex flex-col">
                    {/* Financials */}
                    <h1 className="text-white font-bold">Financials TTM (MM):</h1>
                    <span className="text-sm text-white">
                            Revenue: {currencySymbol} {addCommas(revenueTTM)}
                    </span>
                    <span className="text-sm text-white ">
                            Gross Profit: {currencySymbol} {addCommas(grossProfitTTM)}
                    </span>
                    <span className="text-sm text-white ">
                            EBITDA: {currencySymbol} {addCommas(EBITDA)}
                    </span>
                    <span className="text-sm text-white ">
                            Operating Income: {currencySymbol} {addCommas(operatingIncomeTTM)}
                    </span>
                    <span className="text-sm text-white ">
                            Net Income: {currencySymbol} {addCommas(netIncomeTTM)}
                    </span>
                    
                    <span className="text-sm text-white ">
                            Current Ratio: {currencySymbol} {addCommas(currentRatioAnnual)}
                    </span>
                    <span className="text-sm text-white ">
                            Net Debt: {currencySymbol} {addCommas(netDebtAnnual)}
                    </span>

                </div>
                
                <div className="flex flex-col  ">
                     {/* Margins & Ratios*/}
                     <h1 className="text-white font-bold">Margins & Ratios:</h1>
                    <span className="text-sm text-white ">
                            Gross Margin TTM: {grossMarginTTM}%
                    </span>
                    <span className={"text-sm text-white " + (operatingMarginTTM > 50 ? "text-green-400 font-bold" : "")}>
                            Operating Margin TTM: {operatingMarginTTM}%
                    </span>
                    <span className={"mb-2 text-sm text-white "+(profitMargin > 20 ? "text-green-400 font-bold" : "")}>
                            Net Margin TTM: {profitMargin}%
                    </span>
                    
                    <span className={"text-sm text-white " + (returnOnAssetsTTM > 20 ? "text-green-400 font-bold" : "")}>
                            RoA TTM: {returnOnAssetsTTM}%
                    </span>
                    <span className={"text-sm text-white "+ (returnOnEquityTTM > 20 ? "text-green-400 font-bold" : "")}>
                            RoE TTM: {returnOnEquityTTM}%
                    </span>
                    <span className={"text-sm text-white " + (roiTTM > 20 ? "text-green-400 font-bold" : "")}>
                            RoIC TTM: {roiTTM}%
                    </span>
                </div>
                
                <div className="flex flex-col  ">
                     {/* Management */}
                   <h1 className="text-white font-bold">Ownership:</h1>
                    <span className={"text-sm text-white " + (percentInsiders > 5 ? "text-green-400 font-bold" : "")}>
                            Insider Ownership: {percentInsiders}%
                    </span>
                    <span className="text-sm text-white ">
                            Institutional Ownership: {percentInstitutions}%
                    </span>
                    <span className="text-sm text-white ">
                            Transactions: TODO
                    </span>
                </div>
                
                <div className="flex flex-col  ">
                    {/* PER SHARE */}
                    <h1 className="text-white font-bold">Per Share:</h1>
                    <span className="text-sm text-white ">
                            Revenue per Share TTM:  {currencySymbol} {revenuePerShareTTM}
                    </span>
{/*                     <span className="text-sm text-white ">
                            Basic EPS: {currencySymbol} {eps}
                    </span> */}
                    <span className={"text-sm text-white "+ (dilutedEPSTTM < 0 ? "text-red-400 font-bold" : "")}>
                            Diluted EPS TTM: {currencySymbol} {dilutedEPSTTM}
                    </span>
                    <span className={"text-sm text-white "+ (freeCashFlowPerShareTTM < 0 ? "text-red-400 font-bold" : "")}>
                            Free Cash Flow per Share: {currencySymbol} {freeCashFlowPerShareTTM}
                    </span>
                    <span className="text-sm text-white ">
                            Book Value per Share: {currencySymbol} {bookValue}
                    </span>  
                    <span className="text-sm text-white ">
                            Net Cash per Share: {currencySymbol} {bookValue}
                    </span>  
                    <span className="text-sm text-white ">
                            Dividend per Share: {currencySymbol} {dividendPerShare}
                    </span>
                    

                </div>
                
                <div className="flex flex-col  ">
                    {/* Growth */}
                    <h1 className="text-white font-bold">Growth:</h1>
                    <span className={"text-sm text-white "+ (revenueGrowthTTMYoy < 0 ? "text-red-400 font-bold" : "") + (revenueGrowthTTMYoy > 20 ? "text-green-400 font-bold" : "")}>
                        Revenue Growth TTM: {revenueGrowthTTMYoy}%
                    </span>
                    <span className={"text-sm text-white "+ (revenueGrowth3Y < 0 ? "text-red-400 font-bold" : "") + (revenueGrowth3Y > 15 ? "text-green-400 font-bold" : "")}>
                        Revenue Growth 3Y: {revenueGrowth3Y}%
                    </span>
                    <span className={"text-sm text-white "+ (revenueGrowth5Y < 0 ? "text-red-400 font-bold" : "") + (revenueGrowth5Y > 10 ? "text-green-400 font-bold" : "")}>
                        Revenue Growth 5Y: {revenueGrowth5Y}%
                    </span>
                    <span className={"text-sm text-white "+ (epsGrowthTTMYoy < 0 ? "text-red-400 font-bold" : "") + (epsGrowthTTMYoy > 20 ? "text-green-400 font-bold" : "")}>
                        EPS Growth TTM: {epsGrowthTTMYoy}%
                    </span>
                    <span className={"text-sm text-white "+ (epsGrowth3Y < 0 ? "text-red-400 font-bold" : "") + (epsGrowth3Y > 15 ? "text-green-400 font-bold" : "")}>
                        EPS Growth 3Y: {epsGrowth3Y}%
                    </span>
                    <span className={"text-sm text-white "+ (epsGrowth5Y < 0 ? "text-red-400 font-bold" : "") + (epsGrowth5Y > 10 ? "text-green-400 font-bold" : "")}>
                        EPS Growth 5Y: {epsGrowth5Y}%
                    </span>
                    <span className={"text-sm text-white "+ (ebitdaCagr5Y < 0 ? "text-red-400 font-bold" : "") + (ebitdaCagr5Y > 10 ? "text-green-400 font-bold" : "")}>
                        EBITDA CAGR 5Y: {ebitdaCagr5Y}%
                    </span>
                    <span className={"text-sm text-white "+ (netMarginGrowth5Y < 0 ? "text-red-400 font-bold" : "") + (netMarginGrowth5Y > 2 ? "text-green-400 font-bold" : "")}>
                        Net Margin Growth 5Y: {netMarginGrowth5Y} %
                    </span>
                    <span className={"text-sm text-white "+ (dividendGrowthRate5Y < 0 ? "text-red-400 font-bold" : "") + (dividendGrowthRate5Y > 20 ? "text-green-400 font-bold" : "")}>
                        Dividend Growth 5Y: {dividendGrowthRate5Y} %
                    </span>
                    <span className={"text-sm text-white "+ (bookValueShareGrowth5Y < 0 ? "text-red-400 font-bold" : "") + (bookValueShareGrowth5Y > 10 ? "text-green-400 font-bold" : "")}>
                        BV / Share Growth 5Y: {bookValueShareGrowth5Y} %
                    </span>
                    {/* <span className={"text-sm text-white "+ (capitalSpendingGrowth5Y > 10 ? "text-red-400 font-bold" : "") + (capitalSpendingGrowth5Y < -5 ? "text-green-400 font-bold" : "")}>
                        Cap. Spending Growth 5Y: {capitalSpendingGrowth5Y} %
                    </span> */}

                </div>
                
                <div className="flex flex-col  ">
                    {/* Valuation */}
                    <h1 className="text-white font-bold">Valuation:</h1>
                    <span className="text-sm text-white ">
                            Price / Trailing Earnings: {trailingPE}x
                    </span>
                    <span className={"text-sm text-white " + ((trailingPE>forwardPE)&&(forwardPE <20)&&(forwardPE >0)  ? "text-green-400 font-bold" : "")}>
                            Price / Forward Earnings: {forwardPE}x
                    </span>
                    <span className="text-sm text-white ">
                            PEG: {peg}x
                    </span>
                    <span className="text-sm text-white ">
                            Price / Sales: {priceToSalesRatioTTM}x
                    </span>
                    <span className="text-sm text-white ">
                            Price / Book Value: {priceToBookRatio}x
                    </span>
                    <span className="text-sm text-white ">
                            Enterprise Value / Revenue: {evToRevenue}x
                    </span>
                    <span className={"text-sm text-white "+ ((evToEBITDA < 15)&&(evToEBITDA > 0) ? "text-green-400 font-bold" : "")}>
                            Enterprise Value / EBITDA: {evToEBITDA}x
                    </span>      
                </div>
                
            </div>
        </div>
    </div>
</div>




)}
export default StockCard;


function addCommas(nStr){
	nStr += '';
	let x = nStr.split('.');
	let x1 = x[0];
	let x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1,$2');
	}
	return x1 + x2;
}