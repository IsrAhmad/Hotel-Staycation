
export interface IFavoriteResponse{
    success: boolean
    message: string
    data: Data
  }
  
  export interface Data {
    favoriteRoom: FavoriteRoom
  }
  
  export interface FavoriteRoom {
    rooms: string[]
    user: string
    _id: string
    createdAt: string
    updatedAt: string
  }
  