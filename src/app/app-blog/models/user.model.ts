export class Geo {
  public lat: string;
  public lng: string;
}

export class Address {
  public city: string;
  public geo: Geo;
  public street: string;
  public suite: string;
  public zipcode: string;
}

export class Company {
  public bs: string;
  public catchPhrase: string;
  public name: string;
}

export class User {
  public address: Address;
  public company: Company;
  public email: string;
  public id: number;
  public name: string;
  public phone: string;
  public username: string;
  public website: string;
}
