/**
 * Responsive property
 * Make CSS property values settable at each breakpoint.
 * T is type of css property
 */
export type ResponsiveProp<T> = {
  base?: T // default
  sm?: T // 640px or more
  md?: T // 768px or more
  lg?: T // 1024px or more
  xl?: T // 1280px or more
}
export type Responsive<T> = T | ResponsiveProp<T>

/**
 * Flex
 */
type SelfPosition =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'self-end'
  | 'self-start'
  | 'start'

type ContentPosition = 'center' | 'end' | 'flex-end' | 'flec-start' | 'start'

type ContentDistribution =
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch'

type CSSPropertyGlobals =
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'

export type CSSPropertyAlignItems =
  | CSSPropertyGlobals
  | SelfPosition
  | 'baseline'
  | 'normal'
  | 'stretch'
  | Record<string, unknown> // Automatic code completion

export type CSSPropertyAlignContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'start'
  | 'baseline'
  | 'normal'
  | Record<string, unknown>

export type CSSPropertyJustifyItems =
  | CSSPropertyGlobals
  | SelfPosition
  | 'baseline'
  | 'left'
  | 'legacy'
  | 'normal'
  | 'right'
  | 'stretch'
  | Record<string, unknown>

export type CSSPropertyJustifyContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | ContentPosition
  | 'left'
  | 'normal'
  | 'right'
  | Record<string, unknown>

export type CSSPropertyFlexWrap =
  | CSSPropertyGlobals
  | 'normal'
  | 'wrap'
  | 'wrap-reverse'

export type CSSPropertyFlexDirection =
  | CSSPropertyGlobals
  | 'colmun'
  | 'colmun-reverse'
  | 'row'
  | 'row-reverse'

export type CSSPropertyJustifySelf =
  | CSSPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'left'
  | 'nomal'
  | 'right'
  | 'stretch'
  | Record<string, unknown>

export type CSSPropertyAlignSelf =
  | CSSPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'normal'
  | 'stretch'
  | Record<string, unknown>

/**
 * Grid
 */
type GridLine = 'auto' | Record<string, unknown>

export type CSSPropertyGridColumn =
  | CSSPropertyGlobals
  | GridLine
  | Record<string, unknown>

export type CSSPropertyGridRow =
  | CSSPropertyGlobals
  | GridLine
  | Record<string, unknown>

export type CSSPropertyGridAutoFlow =
  | CSSPropertyGlobals
  | 'colmun'
  | 'dense'
  | 'row'
  | Record<string, unknown>

export type CSSPropertyGridArea =
  | CSSPropertyGlobals
  | GridLine
  | Record<string, unknown>
