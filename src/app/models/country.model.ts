export class CountryModel {
    includes(str: any) {
        throw new Error("Method not implemented.");
    }
    public constructor (public name : string , public nativeName : string , public capital : string , public population : number , public flag : string){}
}