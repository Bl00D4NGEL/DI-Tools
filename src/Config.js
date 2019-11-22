const _mdrUrL = 'http://localhost:2048';

export default class Config {
    static mdrDivisionNamesEndpoint() {
        return new Endpoint(_mdrUrL + '/get/divisionNames');
    }
    static mdrHouseNamesEndpoint() {
        return new Endpoint(_mdrUrL + '/get/houseNames');
    }
    static mdrRoleNamesEndpoint() {
        return new Endpoint(_mdrUrL + '/get/roleNames');
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
