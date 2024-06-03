export interface IAddAdminRequest {
    userName :string,
    email:string,
    password:string,
    confirmPassword:string,
    phoneNumber:string,
    country:string,
    profileImage:string,
    role:string


}


export interface IAddAdminResponse {
    success: boolean
    message: string
    data: IAddAdminResponseData
  }
  
  export interface IAddAdminResponseData {
    userCreated: IAddAdminResponsCreated
  }
  
  export interface IAddAdminResponsCreated {
    userName: string
    email: string
    password: string
    phoneNumber: number
    country: string
    role: string
    profileImage: string
    verified: boolean
    _id: string
    createdAt: string
    updatedAt: string
  }