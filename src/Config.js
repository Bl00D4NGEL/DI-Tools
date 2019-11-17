const _mdrUrL = 'http://localhost:2048';

export default class Config {
    static mdrDivisionNamesEndpoint() {
        return new Endpoint(_mdrUrL + '/get/divisionNames');
    }
    static mdrRoleNamesEndpoint() {
        return new Endpoint(_mdrUrL + '/get/roleNames');
    }
}

class Endpoint {
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
