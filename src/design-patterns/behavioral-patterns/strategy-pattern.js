function Fedex() {
    this.calculate = package => 2.45
}

function UPS() {
    this.calculate = package => 1.56
}

function USPS() {
    this.calculate = package => 4.5
}

const fedex = new Fedex()
const ups = new UPS()
const usps = new USPS()

const package = { from: 'Alabama', to: 'Georgia', weight: 1.56 }

// Without strategy pattern
fedex.calculate(package)
ups.calculate(package)
usps.calculate(package)

function Shipping() {
    this.company

    this.setStrategy = (company) => {
        this.company = company
    }

    this.calculate = package => this.company.calculate(package)
}

const shipping = new Shipping()

shipping.setStrategy(fedex)
console.log('Fedex: ' + shipping.calculate(package))

shipping.setStrategy(ups)
console.log('UPS: ' + shipping.calculate(package))

shipping.setStrategy(usps)
console.log('USPS: ' + shipping.calculate(package))
