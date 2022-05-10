export default class RoleStatus {
    constructor() {
        this.stateMap = {};
        this._setReady = undefined;
        this._readyPromise = new Promise((resolve) => this._setReady = resolve);
    }
    setPossibleStatusesForRole(role, possibleStates) {
        this.stateMap[role] = possibleStates;
    }
    async getPossibleStatusesForRole(role) {
        return this._readyPromise.then(() => this.stateMap[role]);
    }
    async getStatusRoles() {
        return this._readyPromise.then(() => Object.keys(this.stateMap));
    }
    ready() {
        this._setReady();
    }
}
