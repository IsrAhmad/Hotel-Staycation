export interface IVeiwBookingResponse {
    success: boolean
    message: string
    data: IVeiwBookingData
  }

  // export interface IVeiwBookingData {
  //   booking: IBooking
  // }

//   export interface IBooking {

  export interface IVeiwBookingData {
    booking: IBooking
  }

  export interface IBooking {
    _id: string
    startDate: string
    endDate: string
    totalPrice: number
    user: IUser
    room: IRoom
    status: string
    createdAt: string
    updatedAt: string
    stripeChargeId: string
  }

  export interface IUser {
    _id: string
    userName: string
  }

//   export interface IRoom {

  // export interface User {
  //   _id: string
  //   userName: string
  // }

  export interface IRoom {
    _id: string
    roomNumber: string
  }

  export  interface IParams {
    page :number,
    size:number
  }
