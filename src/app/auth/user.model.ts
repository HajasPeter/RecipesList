export class User {
    constructor(
        public email: string,
        public id: string,
        private _token: string,
        private _tokenExpirationDate: Date
    ) {}

    get token() {
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }

    // toJSON() {
    //     return {
    //         email: this.email,
    //         id: this.id,
    //         _token: this._token,
    //         _tokenExpirationDate: new Date(this._tokenExpirationDate),
    //     }
    // }
}