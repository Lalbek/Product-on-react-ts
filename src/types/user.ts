export interface IUser {
  id: number;
  email: string;
  username: string;
  password: string;
  phone: string;
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  name: {
    firstname: string;
    lastname: string;
  };
  __v: number;
}
