import http from '@/utils/request'

export const getColumns = (data: any) =>
  http({
    url: '/api/columns',
    method: 'get',
    params: data
  })
