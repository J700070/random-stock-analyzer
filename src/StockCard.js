import React, { useEffect, useState } from 'react';




function StockCard({ticker}) {
    const [profile, setProfile] = useState("Searching...");
    const [logo, setLogo] = useState("Searching...");
    const [name, setName] = useState("Searching...");
    const [market, setMarket] = useState("Searching...");
    const [years, setYears] = useState("Searching...");
    const [marketCap, setMarketCap] = useState("Searching...");
    const [industry, setIndustry] = useState("Searching...");
    const [currency, setCurrency] = useState("Searching...");
    const [shares, setShares] = useState("Searching...");

    const [companyOverview, setCompanyOverview] = useState("Searching...");
    const [description, setDescription] = useState("Searching...");

    /* FINANCIALS */
    const [EBITDA, setEBITDA] = useState("Searching...");
    const [revenueTTM , setRevenueTTM ] = useState("Searching...");
    const [grossProfitTTM , setGrossProfitTTM ] = useState("Searching...");


    /* PER SHARE */
    const [bookValue, setBookValue ] = useState("Searching...");
    const [eps , setEPS ] = useState("Searching...");
    const [revenuePerShareTTM , setRevenuePerShareTTM ] = useState("Searching...");
    const [dilutedEPSTTM , setDilutedEPSTTM ] = useState("Searching...");
    const [dividendPerShare, setDividendPerShare ] = useState("Searching...");

        /* Margins */
    const [profitMargin , setProfitMargin ] = useState("Searching...");
    const [operatingMarginTTM , setOperatingMarginTTM ] = useState("Searching...");

    /* Ratios */
    const [returnOnAssetsTTM , setReturnOnAssetsTTM ] = useState("Searching...");
    const [returnOnEquityTTM , setReturnOnEquityTTM ] = useState("Searching...");

    /* Growth */
    const [quarterlyEarningsGrowthYOY , setQuarterlyEarningsGrowthYOY ] = useState("Searching...");
    const [quarterlyRevenueGrowthYOY , setQuarterlyRevenueGrowthYOY ] = useState("Searching...");
    

    /* VALUATION */
    const [per, setPER] = useState("Searching...");
    const [peg, setPEG] = useState("Searching...");
    const [analystTargetPrice , setAnalystTargetPrice ] = useState("Searching...");
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
            });
            ;
    }

    function fetchCompanyOverview2(ticker){
        /* https://api.tiingo.com/tiingo/fundamentals/definitions */
        /* https://api.tiingo.com/documentation/fundamentals */

        /* let API_KEY = '3970f9ec2562c6d7f294e30bc2d8d40af51bbec6';
        let API_Call = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol='+ 'FB' +'&apikey='+ API_KEY;

        fetch(API_Call)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                setCompanyOverview(data);
            }); */
            
    }

    function refreshInfo(){

        if(profile.name !== undefined){
            setLogo(profile.logo);
            setName(profile.name);
            setMarket(profile.exchange);
            setYears(new Date().getFullYear() - (profile.ipo).split("-")[0]);
            setMarketCap(profile.marketCapitalization);
            setIndustry(profile.finnhubIndustry);
            setCurrency(profile.currency);
            setShares(profile.shareOutstanding);
        }else{
            setLogo("Not found");
            setName("Not found");
            setMarket("Not found");
            setYears("Not found");
            setMarketCap("Not found");
            setIndustry("Not found");
            setCurrency("Not found");
            setShares("Not found");
        }

        if(companyOverview.Name !== undefined){
            setDescription(companyOverview.Description);
            setEBITDA(companyOverview.EBITDA);
            setPER(companyOverview.PERatio);
            setPEG(companyOverview.PEGRatio);
            setBookValue(companyOverview.BookValue);
            setDividendPerShare(companyOverview.DividendPerShare);
            setEPS(companyOverview.EPS);
            setRevenuePerShareTTM(companyOverview.RevenuePerShareTTM);
            setProfitMargin(companyOverview.ProfitMargin);
            setOperatingMarginTTM(companyOverview.OperatingMarginTTM);
            setReturnOnAssetsTTM(companyOverview.ReturnOnAssetsTTM);
            setReturnOnEquityTTM(companyOverview.ReturnOnEquityTTM);
            setRevenueTTM(companyOverview.RevenueTTM);
            setGrossProfitTTM(companyOverview.GrossProfitTTM);
            setDilutedEPSTTM(companyOverview.DilutedEPSTTM);
            setQuarterlyEarningsGrowthYOY(companyOverview.QuarterlyEarningsGrowthYOY);
            setQuarterlyRevenueGrowthYOY(companyOverview.QuarterlyRevenueGrowthYOY);
            setAnalystTargetPrice(companyOverview.AnalystTargetPrice);
            setTrailingPE(companyOverview.TrailingPE);
            setForwardPE(companyOverview.ForwardPE);
            setPriceToSalesRatioTTM(companyOverview.PriceToSalesRatioTTM);
            setPriceToBookRatio(companyOverview.PriceToBookRatio);
            setEVToRevenue(companyOverview.EVToRevenue);
            setEVToEBITDA(companyOverview.EVToEBITDA);
            setPercentInsiders(companyOverview.PercentInsiders);
            setPercentInstitutions(companyOverview.PercentInstitutions);
        }else{
            setDescription("Not found");
            setEBITDA("Not found");
            setPER("Not found");
            setPEG("Not found");
            setBookValue("Not found");
            setDividendPerShare("Not found");
            setEPS("Not found");
            setRevenuePerShareTTM("Not found");
            setProfitMargin("Not found");
            setOperatingMarginTTM("Not found");
            setReturnOnAssetsTTM("Not found");
            setReturnOnEquityTTM("Not found");
            setRevenueTTM("Not found");
            setGrossProfitTTM("Not found");
            setDilutedEPSTTM("Not found");
            setQuarterlyEarningsGrowthYOY("Not found");
            setQuarterlyRevenueGrowthYOY("Not found");
            setAnalystTargetPrice("Not found");
            setTrailingPE("Not found");
            setForwardPE("Not found");
            setPriceToSalesRatioTTM("Not found");
            setPriceToBookRatio("Not found");
            setEVToRevenue("Not found");
            setEVToEBITDA("Not found");
            setPercentInsiders("Not found");
            setPercentInstitutions("Not found");
        }
    }

    useEffect(() => {
        fetchProfile(ticker);
        fetchCompanyOverview(ticker);
    },[ticker]);

    useEffect(() => {
        refreshInfo();
    });

return(
<div className="p-7 bg-white bg-opacity-25 rounded shadow-xl">
    <div className="flex items-center justify-between p-5">
        <div className="flex flex-col">
            {/* HEADER */}
            <div className="flex">
                <img id="stockLogo" alt="" src={logo}/>
                <div className="flex flex-col ml-2 w-1/2 mb-2">
                    <span className="font-bold text-md text-white ">
                        {ticker}
                    </span>
                    <span className="text-sm text-white ">
                        {name}
                    </span>
                    <span className="text-sm text-white ">
                        Market Cap: {currencySymbol} {marketCap} millions
                    </span>
                    <span className="text-sm text-white ">
                        Outstanding Shares: {shares} millions
                    </span>
                </div>

                {/* TAGS */}
                <div className="flex justify-start content-start mx-6 gap-2 h-32 flex-wrap flex-shrink w-1/2 max-h-2">
                    <span className="p-2 flex font-semibold text-xs rounded-md text-gray-500 bg-gray-200">
                        {market}
                    </span>
                    <span className="p-2 flex font-semibold text-xs rounded-md text-gray-500 bg-gray-200">
                        {industry}
                    </span>
                    <span className="p-2 flex font-semibold text-xs rounded-md text-gray-500 bg-gray-200">
                        {years} years since IPO
                    </span>

                </div>
            </div>
            
            <div className="flex flex-col">
                <span className="text-sm text-white ">
                    {description}
                </span>
            </div>
            {/* HEADER ENDS */}
            <hr className=" border-opacity-25 m-10"></hr>
            {/* BODY */}
            <div className="grid grid-cols-3 gap-12">
                
                <div className="flex flex-col">
                    {/* Financials */}
                    <h1 className="text-white font-bold">Financials:</h1>
                    <span className="text-sm text-white ">
                            Revenue TTM: {currencySymbol} {revenueTTM}
                    </span>
                    <span className="text-sm text-white ">
                            Gross Profit TTM: {currencySymbol} {grossProfitTTM}
                    </span>
                    <span className="text-sm text-white ">
                            EBITDA: {currencySymbol} {EBITDA}
                    </span>
                    <span className="text-sm text-white ">
                            Net Income: {currencySymbol} TODO
                    </span>
                </div>
                
                <div className="flex flex-col  ">
                    {/* PER SHARE */}
                    <h1 className="text-white font-bold">Per Share:</h1>
                    <span className="text-sm text-white ">
                            Revenue per Share TTM:  {currencySymbol} {revenuePerShareTTM}
                    </span>
                    <span className="text-sm text-white ">
                            Basic EPS: {currencySymbol} {eps}
                    </span>
                    
                    <span className="text-sm text-white ">
                            Diluted EPS TTM: {currencySymbol} {dilutedEPSTTM}
                    </span>
                    <span className="text-sm text-white ">
                            Book Value per Share: {currencySymbol} {bookValue}
                    </span>
                    <span className="text-sm text-white ">
                            Cash Flow per Share: {currencySymbol} TODO
                    </span>
                    <span className="text-sm text-white ">
                            Dividend per Share: {currencySymbol} {dividendPerShare}
                    </span>
                </div>
                
                <div className="flex flex-col  ">
                    {/* Margins */}
                    <h1 className="text-white font-bold">Margins:</h1>
                    <span className="text-sm text-white ">
                            Gross Margin TTM: TODO%
                    </span>
                    <span className="text-sm text-white ">
                            Operating Margin TTM: {operatingMarginTTM}%
                    </span>
                    <span className="text-sm text-white ">
                            Net Margin TTM: {profitMargin}%
                    </span>
                    
                </div>
                
                <div className="flex flex-col  ">
                    {/* Ratios */}
                    <h1 className="text-white font-bold">Ratios:</h1>
                    <span className="text-sm text-white ">
                            Return on Assets TTM: {returnOnAssetsTTM}%
                    </span>
                    <span className="text-sm text-white ">
                            Return on Equity TTM: {returnOnEquityTTM}%
                    </span>
                    <span className="text-sm text-white ">
                            Return on Invested Capital TTM: TODO%
                    </span>

                </div>
                
                <div className="flex flex-col  ">
                    {/* Growth */}
                    <h1 className="text-white font-bold">Growth:</h1>
                    <span className="text-sm text-white ">
                        Qrtly Revenue Growth YoY: {quarterlyRevenueGrowthYOY}%
                    </span>
                    <span className="text-sm text-white ">
                        Qrtly Earnings Growth YoY: {quarterlyEarningsGrowthYOY}%
                    </span>
                    
                </div>
                
                <div className="flex flex-col  ">
                    {/* Ownership */}
                    <h1 className="text-white font-bold">Ownership:</h1>
                    <span className="text-sm text-white ">
                            Insider Ownership: {percentInsiders}%
                    </span>
                    <span className="text-sm text-white ">
                            Institutional Ownership: {percentInstitutions}%
                    </span>
                </div>
                
            </div>
            <hr className="border-opacity-25 m-10"></hr>
            {/* Valuation */}
            <div className="flex flex-col flex-wrap max-h-36">
                    <h1 className="text-white font-bold">Valuation:</h1>
                    <span className="text-sm text-white ">
                            Price / Earnings: {per}x
                    </span>
                    <span className="text-sm text-white ">
                            PEG: {peg}x
                    </span>
                    <span className="text-sm text-white ">
                            Price / Trailing Earnings: {trailingPE}x
                    </span>
                    <span className="text-sm text-white ">
                            Price / Forward Earnings: {forwardPE}x
                    </span>
                    <span className="text-sm text-white ">
                        Analyst Price Target: {currencySymbol}  {analystTargetPrice}
                    </span>
                    <span className="text-sm text-white ">
                            Price / Sales: {priceToSalesRatioTTM}x
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
                    <span className="text-sm text-white ">
                            Enterprise Value / EBITDA: {evToEBITDA}x
                    </span>                  
                    
                
            </div>
        </div>
    </div>
</div>




)}
export default StockCard;