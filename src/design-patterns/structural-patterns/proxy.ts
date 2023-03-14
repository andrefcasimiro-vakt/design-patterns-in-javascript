// External API Service
function CryptocurrencyAPI() {
    this.getValue = function(coin) {
        console.log("Calling external API...")

        switch (coin) {
            case "Bitcoin":
                return "$8,500"
            case "Litecoin":
                return "$500"
            case "Ethereum":
                return "$175"
        }
    }
}

const cryptocurrencyAPI = new CryptocurrencyAPI()

// console.log(cryptocurrencyAPI.getValue("Bitcoin"))
// console.log(cryptocurrencyAPI.getValue("Litecoin"))
// console.log(cryptocurrencyAPI.getValue("Ethereum"))
//... too many network calls, inefficient

function CryptocurrencyProxy() {
    this.api = new CryptocurrencyAPI()

    this.cache = {}

    this.getValue = function getCoinValue(coin) {
        if (this.cache.hasOwnProperty(coin) === false) {
            console.log("No value in cache for " + coin + ". Adding it...")
            this.cache[coin] = this.api.getValue(coin)
        } else {
            console.log("Cache exists for " + coin + ".")
        }

        return this.cache[coin]
    }
}

const cryptocurrencyProxy = new CryptocurrencyProxy()

console.log(cryptocurrencyProxy.getValue("Bitcoin"))
console.log(cryptocurrencyProxy.getValue("Bitcoin"))
console.log(cryptocurrencyProxy.getValue("Litecoin"))
console.log(cryptocurrencyProxy.getValue("Ethereum"))
