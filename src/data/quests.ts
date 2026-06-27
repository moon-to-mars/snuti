import type { Quest } from '../types'

export const mockQuests: Quest[] = [
  // 집중력 트랙
  {
    id: 'q-focus-1',
    childId: 'child-1',
    track: 'focus',
    title: '책 한 페이지 읽기',
    instruction: '좋아하는 책 1페이지를 소리 내어 읽어봐요. 끝나면 무슨 내용이었는지 말해줘요!',
    difficulty: 2,
  },
  {
    id: 'q-focus-2',
    childId: 'child-1',
    track: 'focus',
    title: '퍼즐 완성하기',
    instruction: '10조각 퍼즐을 완성해봐요. 집중해서 천천히 맞춰보세요!',
    difficulty: 3,
  },
  // 행동 교정 트랙
  {
    id: 'q-behavior-1',
    childId: 'child-1',
    track: 'behavior',
    title: '밥 먹을 때 자리 지키기',
    instruction: '밥을 다 먹을 때까지 의자에 앉아 있어봐요. 할 수 있어요!',
    difficulty: 2,
  },
  {
    id: 'q-behavior-2',
    childId: 'child-1',
    track: 'behavior',
    title: '차례 기다리기 연습',
    instruction: '게임할 때 순서를 기다려봐요. 상대방이 끝날 때까지 기다리면 칭찬 스티커!',
    difficulty: 3,
  },
  {
    id: 'q-behavior-3',
    childId: 'child-2',
    track: 'behavior',
    title: '장난감 정리하기',
    instruction: '놀고 난 장난감을 제자리에 놓아봐요. 다 정리하면 엄마한테 보여줘요!',
    difficulty: 1,
  },
  // 부모 보조 트랙
  {
    id: 'q-parent-1',
    childId: 'child-1',
    track: 'parent_support',
    title: '하루 일과 함께 계획하기',
    instruction: '오늘 할 일 3가지를 엄마/아빠와 함께 정해봐요. 다 하면 칭찬받아요!',
    difficulty: 2,
  },
  {
    id: 'q-parent-2',
    childId: 'child-3',
    track: 'parent_support',
    title: '감정 카드 고르기',
    instruction: '지금 기분이 어때요? 카드 중에서 내 기분이랑 비슷한 걸 골라봐요.',
    difficulty: 1,
  },
]

export const observationQuestions = [
  { questionId: 'q1', question: '미션을 얼마나 집중해서 했나요?', options: ['전혀 못했어요', '조금 했어요', '절반 정도 했어요', '꽤 잘 했어요', '아주 잘 했어요'] },
  { questionId: 'q2', question: '미션 중 방해 행동이 있었나요?', options: ['매우 많았어요', '조금 있었어요', '가끔 있었어요', '거의 없었어요', '전혀 없었어요'] },
  { questionId: 'q3', question: '스스로 완료했나요?', options: ['완전히 도움 필요', '많은 도움 필요', '약간 도움 필요', '거의 스스로', '완전히 스스로'] },
]
