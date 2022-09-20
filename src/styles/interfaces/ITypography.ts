export enum FontWeight {
  Light = '300',
  Regular = '400',
  Medium = '500',
  Semibold = '600',
  Bold = '700',
  Black = '900',
}

export interface FontStyle {
  fontFamily?: string;
  fontWeight: FontWeight;
}
