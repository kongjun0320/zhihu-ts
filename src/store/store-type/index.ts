export interface ColumnListProps {
  _id: number
  title: string
  avatar?: string
  description: string
}

export interface UserProps {
  isLogin: boolean
  nickName?: string
  column?: number
}

export interface PostProps {
  _id: number
  title: string
  content: string
  image?: string
  excerpt?: string
  createdAt: string
  columnId: number
}
