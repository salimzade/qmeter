export const SmilySet = {
  id: 1,
  name: 'Smily Rating',
  icon: 'smile',
  type: 'smilyRating',
  ratingSet: [
    {
      id: 1,
      active: true,
      set: [
        { id: 1, name: 'excellent', icon: 'smile', active: false },
        { id: 2, name: 'good', icon: 'smile', active: false },
        { id: 3, name: 'neutral', icon: 'meh', active: false },
        { id: 4, name: 'bad', icon: 'frown', active: false },
        { id: 5, name: 'unacceptable', icon: 'frown', active: false }
      ]
    },
    {
      id: 2,
      active: false,
      set: [
        { id: 1, name: 'excellent', icon: 'smile' },
        { id: 2, name: 'good', icon: 'smile' },
        { id: 3, name: 'neutral', icon: 'meh' },
        { id: 4, name: 'bad', icon: 'frown' }
      ]
    },
    {
      id: 3,
      active: false,
      set: [
        { id: 1, name: 'excellent', icon: 'smile' },
        { id: 2, name: 'neutral', icon: 'smile' },
        { id: 3, name: 'bad', icon: 'frown' }
      ]
    },
    {
      id: 4,
      active: false,
      set: [
        { id: 1, name: 'excellent', icon: 'smile' },
        { id: 2, name: 'bad', icon: 'frown' }
      ]
    }
  ]
}
