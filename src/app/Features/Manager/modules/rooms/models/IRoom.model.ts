export interface IRoomResponse {
    success: boolean
    message: string
    data: IRoomData 
  }

  export interface IRoomData {
    rooms: IRoom[]
    totalCount: number
  }

export interface IRoom {
    _id: string
    roomNumber: string
    price: number
    capacity: number
    discount: number
    facilities: IFacility[]
    createdBy: ICreatedBy
    images: string[]
    createdAt: string
    updatedAt: string
  }
  
  export interface IFacility {
    _id: string
    name: string
  }
  
  export interface ICreatedBy {
    _id: string
    userName: string
  }