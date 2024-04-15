export interface InitialTypes {
  id: number
  name: string
  icon: string
  type: string
  ratingSet?: RatingSet[]
}

// Smily
interface RatingSet {
  id: number
  active: boolean
  set: Set[]
}

interface Set {
  id: number
  name: string
  icon: string
  active: boolean
}

// Single
// Voice