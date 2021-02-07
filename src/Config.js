const _mdrUrL = 'https://localhost:2048';

export default class Config {
    static mdrRanksEndpoint() {
        return new Endpoint(_mdrUrL + '/ranks');
    }
    static mdrPositionsEndpoint() {
        return new Endpoint(_mdrUrL + '/positions');
    }
    static mdrDivisionsEndpoint() {
        return new Endpoint(_mdrUrL + '/divisions');
    }
    static mdrGetTagListEndpoint() {
        return new Endpoint(_mdrUrL + '/generateTagList', 'POST');
    }
}

export class Endpoint {
    constructor(url, method) {
        this._url = url;
        this._method = (method === undefined ? 'GET' : method);
    }

    url() {
        return this._url
    }

    method() {
        return this._method;
    }
}
