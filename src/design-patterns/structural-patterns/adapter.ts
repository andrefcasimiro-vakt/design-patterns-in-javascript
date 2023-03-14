//https://gist.github.com/MariusBongarts/8f571fe855d9a392abc7d2e483b63e5c#file-adapter-example-ts

interface Connector {
    name: string;
    voltage: number;
}

class ConnectorUSA implements Connector {
    public name = 'US-Power-Plug';
    public voltage: 120 = 120;
}

class ConnectorGermany implements Connector {
    public name = 'German-Power-Plug';
    public voltage : 230 = 230;
}

abstract class SocketClient<T extends Connector> {
    constructor(protected connector: T) {}

    plugin(connector: T) {
        if (connector.voltage !== this.connector.voltage) {
            console.error(`Failed to connect ${connector.name} with ${this.connector.name}. Expected ${this.connector.voltage} V but got ${connector.voltage} V instead`);
            return;
        }

        console.log(`Successfully connected ${connector.name} to ${this.connector.name}`);
    }
}

class USASocketClient extends SocketClient<ConnectorUSA> {
    constructor() {
        super({ voltage: 120, name: 'USA-Power-Socket' })
    }
}

class GermanSocketClient extends SocketClient<ConnectorGermany> {
    constructor() {
        super({ voltage: 230, name: 'German-Power-Socket' })
    }
}

class GermanToUSAConnectorAdapter implements ConnectorUSA {
    public voltage!: 120;
    public name!: string;

    constructor({ name }: ConnectorGermany) {
        this.name = name;
        this.voltage = 120;
        console.log(`Adapt ${name} connector to USA-Connector`)
    }
}

const germanSocket = new GermanSocketClient();
const usaSocket = new USASocketClient();
const germanPowerPlugAdaptee = new ConnectorGermany();
const usaPowerPlugAdaptee = new ConnectorUSA();

// Compatible
germanSocket.plugin(germanPowerPlugAdaptee)
// Compatible
usaSocket.plugin(usaPowerPlugAdaptee)

// Not Compatible
// @ts-expect-error
usaSocket.plugin(germanPowerPlugAdaptee)

// Compatible
usaSocket.plugin(new GermanToUSAConnectorAdapter(germanPowerPlugAdaptee))
