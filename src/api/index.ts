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

export const login = (data: any) =>
  http({
    url: `/user/login`,
    method: 'post',
    data
  })

export const logout = (data: any) =>
  http({
    url: `/user/login`,
    method: 'post',
    data
  })

export const getCurrentUser = (data: any) =>
  http({
    url: `/user/current`,
    method: 'get',
    params: {}
  })

export const registry = (data: any) =>
  http({
    url: `/users`,
    method: 'post',
    data
  })

export const posts = (data: any) =>
  http({
    url: `/posts`,
    method: 'post',
    data
  })
