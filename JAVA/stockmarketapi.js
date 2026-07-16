const apiKey = "jXSENcJ3ssrFVINW2tKCPfhi6QJapXaO";

async function loadMarket(){

const response = await fetch(
`https://financialmodelingprep.com/stable/quote/^GSPC,^IXIC,^DJI,BTCUSD,ETHUSD?apikey=${apiKey}`
);

const data = await response.json();

    console.log(data);


    updateCard("sp500", data.find(x=>x.symbol==="SPY"));
    updateCard("nasdaq", data.find(x=>x.symbol==="QQQ"));
    updateCard("dow", data.find(x=>x.symbol==="DIA"));
    updateCard("btc", data.find(x=>x.symbol==="BTCUSD"));
    updateCard("eth", data.find(x=>x.symbol==="ETHUSD"));

    }

        function updateCard(id,item){

        const el=document.getElementById(id);

        if(!item){
            el.innerHTML="Data unavailable";
            return;
        }

            const cls=item.change >= 0 ? "up":"down";

            el.innerHTML = `
            ${item.price.toLocaleString()}<br>

            <span class="${cls}">
            ${item.change.toFixed(2)}
            (${item.changesPercentage.toFixed(2)}%)
            </span>
            `;

            }


        loadMarket();

setInterval(loadMarket,60000);