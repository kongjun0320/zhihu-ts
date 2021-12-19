import http from '@/utils/request'

export const getColumns = (data: any) =>
  http({
    url: '/columns',
    method: 'get',
    params: data
  })

export const getColumn = (data: any) =>
  http({
    url: `/columns/${data.cId}`,
    method: 'get',
    params: {}
  })

export const getPosts = (data: any) =>
  http({
    url: `/columns/${data.cId}/posts`,
    method: 'get',
    params: {}
  })
