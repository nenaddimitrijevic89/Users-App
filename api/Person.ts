export interface Person {
  name: string;
  id: number;
  email: string;
  address: {
    city: string;
    street: string;
  };
  company: {
    name: string;
  };
  username: string;
  website: string;
  phone: string;
}