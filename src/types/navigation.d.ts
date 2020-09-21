declare namespace Navigation {
  interface ChallengeItem {
    path: string
    name: string
    description?: string
    level: number // 难易度 1-5 1比较低
    challengeLink: string
  }
}