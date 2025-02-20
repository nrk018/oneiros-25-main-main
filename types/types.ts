export interface Artist {
  name: string
  image: string
  description: string
  type: "major" | "minor"
  day?: string
  accolades?: string[]
  gradientClass?: string
}

export interface YearData {
  year: number
  artists?: Artist[]
  name?: string
  image?: string
  description?: string
  gradientClass?: string
  accolades?: string[]
}

export interface MysteryRevealProps {
  artists: Artist[]
}

export interface PreviousArtistCardProps {
  yearData: YearData
  index: number
}

