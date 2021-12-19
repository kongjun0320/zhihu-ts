import { createStore } from 'vuex'
import { ColumnListProps, PostProps } from './store-type'

interface UserProps {
  isLogin: boolean
  nickName?: string
  column?: number
}

export interface GlobalDataProps {
  columns: ColumnListProps[]
  posts: PostProps[]
  user: UserProps
}

const store = createStore<GlobalDataProps>({
  state: {
    user: { isLogin: false },
    columns: [
      {
        _id: 1,
        title: '标题',
        avatar: '',
        description: '描述信息'
      },
      {
        _id: 2,
        title: '标题2',
        avatar: '',
        description: '描述信息2'
      },
      {
        _id: 3,
        title: '标题',
        avatar: '',
        description: '描述信息'
      },
      {
        _id: 4,
        title: '标题2',
        avatar: '',
        description: '描述信息2'
      },
      {
        _id: 5,
        title: '标题2',
        avatar: '',
        description: '描述信息2'
      }
    ],
    posts: [
      {
        _id: 3,
        title: '标题',
        content: '描述信息',
        image: 'https://images.dog.ceo/breeds/terrier-silky/n02097658_7970.jpg',
        excerpt: '123',
        createdAt: '2021-10-10',
        columnId: 1
      },
      {
        _id: 33,
        title: '标题',
        content: '描述信息',
        image: 'https://images.dog.ceo/breeds/terrier-silky/n02097658_7970.jpg',
        createdAt: '2021-10-10',
        columnId: 2
      }
    ]
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, nickName: 'AiCherish' }
    }
  }
})

export default store
