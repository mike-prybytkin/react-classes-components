export interface IProductCard {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IUserCard {
  name: string;
  birthday: string;
  salary: string;
  gender: string;
  mailing: boolean;
  avatarPath: string;
}
