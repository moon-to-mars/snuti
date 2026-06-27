import type { Quest } from '../types'

export const mockQuests: Quest[] = [
  // 집중력 (Executive Focus)
  {
    id: 'q-focus-1',
    childId: 'child-1',
    track: 'focus',
    title: '책 1페이지 읽기',
    instruction: '좋아하는 책 1페이지를 소리 내어 읽어봐요. 끝나면 무슨 내용이었는지 말해줘요!',
    difficulty: 2,
    durationMin: 10,
  },
  {
    id: 'q-focus-2',
    childId: 'child-1',
    track: 'focus',
    title: 'Pattern Seekers',
    instruction: '정원에서 반복되는 패턴 3개를 찾아봐요. 사진 찍거나 그려도 좋아요.',
    difficulty: 3,
    durationMin: 15,
  },
  {
    id: 'q-focus-3',
    childId: 'child-1',
    track: 'focus',
    title: '퍼즐 10조각 완성',
    instruction: '퍼즐을 혼자 완성해봐요. 중간에 멈추지 않고 끝까지 도전!',
    difficulty: 2,
    durationMin: 12,
  },
  // 감정 조절 (Emotional Regulation)
  {
    id: 'q-emotion-1',
    childId: 'child-1',
    track: 'emotion',
    title: '감정 일기 쓰기',
    instruction: '오늘 느낀 감정을 그림이나 글로 표현해봐요. 어떤 감정이든 괜찮아요.',
    difficulty: 2,
    durationMin: 8,
  },
  {
    id: 'q-emotion-2',
    childId: 'child-1',
    track: 'emotion',
    title: '깊은 숨쉬기 연습',
    instruction: '화나거나 답답할 때 코로 4초 들이쉬고, 입으로 4초 내쉬기를 3번 해봐요.',
    difficulty: 1,
    durationMin: 5,
  },
  {
    id: 'q-emotion-3',
    childId: 'child-1',
    track: 'emotion',
    title: '감정 카드 고르기',
    instruction: '지금 기분을 카드 중 하나로 골라봐요. 왜 그런 기분인지 한 문장으로 말해줘요.',
    difficulty: 1,
    durationMin: 5,
  },
  // 행동 교정 (Behavior)
  {
    id: 'q-behavior-1',
    childId: 'child-1',
    track: 'behavior',
    title: '밥 먹을 때 자리 지키기',
    instruction: '밥을 다 먹을 때까지 의자에 앉아 있어봐요.',
    difficulty: 2,
    durationMin: 20,
  },
  {
    id: 'q-behavior-2',
    childId: 'child-1',
    track: 'behavior',
    title: '차례 기다리기',
    instruction: '게임할 때 순서를 기다려봐요. 상대방이 끝날 때까지 기다리면 칭찬 스티커!',
    difficulty: 3,
    durationMin: 15,
  },
  // 부모 보조 (Parent Support)
  {
    id: 'q-parent-1',
    childId: 'child-1',
    track: 'parent_support',
    title: '하루 일과 같이 계획하기',
    instruction: '오늘 할 일 3가지를 부모님과 함께 정해봐요.',
    difficulty: 2,
    durationMin: 10,
  },
]

export const activeQuest = mockQuests[1] // Pattern Seekers
