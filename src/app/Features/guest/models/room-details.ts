export interface IRoomReveiwRequest {
    roomId: string
    rating: number
    review: string
  }

  export interface IRoomReveiwResponse {
        success: boolean
        message: string
        data: IRoomReviewData
      }
      
      export interface IRoomReviewData {
        roomReview: RoomReview
      }
      
      export interface RoomReview {
        room: string
        user: string
        rating: number
        review: string
        _id: string
        createdAt: string
        updatedAt: string
      }

      export interface IRommCommentRequest {
        roomId: string
        comment: string
      }
  
      export interface IRommCommentResponse {
        success: boolean
        message: string
        data: IRommCommentData
      }
      
      export interface IRommCommentData {
        roomComment: IRoomComment
      }
      
      export interface IRoomComment {
        room: string
        user: string
        comment: string
        _id: string
        createdAt: string
        updatedAt: string
      }
  