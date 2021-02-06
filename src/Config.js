const _mdrUrL = 'https://localhost:2048';

export default class Config {
    static mdrDivisionNamesEndpoint() {
        return new Endpoint(_mdrUrL + '/get/divisionNames');
    }
    static mdrRoleNamesEndpoint() {
        return new Endpoint(_mdrUrL + '/get/roleNames');
    }
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
        return new Endpoint(_mdrUrL + '/get/tagList', 'POST');
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
