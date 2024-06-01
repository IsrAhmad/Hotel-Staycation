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


export interface IRoomVeiwResponse {
  success: boolean
  message: string
  data: IRoomVeiwData
}

export interface IRoomVeiwData {
  room: IRoomVeiwDataFacility
}

export interface IRoomVeiwDataFacility {
  _id: string
  roomNumber: string
  price: number
  capacity: number
  discount: number
  facilities: Facility[]
  createdBy: CreatedBy
  images: string[]
  createdAt: string
  updatedAt: string
}

export interface Facility {
  _id: string
  name: string
}

export interface CreatedBy {
  _id: string
  userName: string
}

