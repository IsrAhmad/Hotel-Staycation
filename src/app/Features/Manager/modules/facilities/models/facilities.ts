
export interface IFacilitiesResponse {
    success: boolean
    message: string
    data: IData 
  }
  
  export interface IData {
    facilities: IFacility[]
    totalCount: number
  }
  
  export interface IFacility {
    _id: string
    name: string
    createdBy: ICreatedBy
    createdAt: string
    updatedAt: string
  }
  
  export interface ICreatedBy {
    _id: string
    userName: string
  }
  