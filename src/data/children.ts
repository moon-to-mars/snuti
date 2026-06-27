import type { Child } from '../types'

export const mockChildren: Child[] = [
  {
    id: 'child-1',
    name: '김민준',
    age: 7,
    adhdType: 'combined',
    parentingEnv: '맞벌이 가정, 외조모 주 양육',
  },
  {
    id: 'child-2',
    name: '이서연',
    age: 5,
    adhdType: 'inattentive',
    parentingEnv: '전업주부 어머니, 형제 없음',
  },
  {
    id: 'child-3',
    name: '박도현',
    age: 9,
    adhdType: 'hyperactive',
    parentingEnv: '한부모 가정(부), 방과후 돌봄 이용',
  },
]
