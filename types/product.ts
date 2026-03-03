export enum EFavoriteProductCategory {
  Web,
  App,
}

export interface IFavoriteProduct {
  image: string;
  name: string;
  description: string;
  category: EFavoriteProductCategory;
}

export interface IFavoriteWeb extends IFavoriteProduct {
  webUrl: string;
  category: EFavoriteProductCategory.Web;
}

export interface IFavoriteApp extends IFavoriteProduct {
  googleUrl: string;
  appleUrl: string;
  category: EFavoriteProductCategory.App;
}
