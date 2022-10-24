export type ImageType = {
  alt: string
  src: string
  title: string
}

export type FishType = {
  Biology: string
  Calories: string
  Cholesterol: string
  ['Fat, Total']: string
  ['Health Benefits']: string
  ImageGallery: Array<{}>
  Path: string
  ['Physical Description']: string
  Protein: string
  Quote: string
  ['Saturated Fatty Acids, Total']: string
  ['Scientific Name']: string
  Sodium: string
  ['Species Illustration Photo']: { alt: string; src: string; title: string }
  ['Species Name']: string
  Taste: string
  Texture: string
}
