/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import Box, {BoxProps} from 'components/layout/Box'
import type {CSSPropertyGridArea, CSSPropertyGridAutoFlow, CSSPropertyGridColumn, CSSPropertyGridRow, Responsive} from 'types/styles'
import {toPropValue} from 'utils/styles'

type GridProps = BoxProps & {
	gridGap?: Responsive<string>
	gridColmunGap?: Responsive<string>
	gridRowGap?: Responsive<string>
	gridColmun?: Responsive<CSSPropertyGridColumn>
	gridRow?: Responsive<CSSPropertyGridRow>
	gridAutoFlow?: Responsive<CSSPropertyGridAutoFlow>
	gridAutoColumns?: Responsive<string>
	gridAutoRows?: Responsive<string>
	gridTemplateColmuns?: Responsive<string>
	gridTemplateRows?: Responsive<string>
	gridTemplateAreas?: Responsive<CSSPropertyGridArea>
	grindArea?: Responsive<string>
}

/**
 * Grid component
 * Used to grid layout
 */
const Grid = styled(Box) <GridProps> `
	${(props) => toPropValue('grid-gap', props.gridGap, props.theme)}
	${(props) => toPropValue('grid-colmun-gap', props.gridColmunGap, props.theme)}
	${(props) => toPropValue('grid-row-gap', props.gridRowGap, props.theme)}
	${(props) => toPropValue('grid-colmun', props.gridColmun, props.theme)}
	${(props) => toPropValue('grid-row', props.gridRow, props.theme)}
	${(props) => toPropValue('grid-auto-flow', props.gridAutoFlow, props.theme)}
	${(props) => toPropValue('grid-auto-colmuns', props.gridAutoColumns, props.theme)}
	${(props) => toPropValue('grid-auto-rows', props.gridAutoRows, props.theme)}
	${(props) => toPropValue('grid-template-colmuns', props.gridTemplateColmuns, props.theme)}
	${(props) => toPropValue('grid-template-rows', props.gridTemplateRows, props.theme)}
	${(props) => toPropValue('grid-template-areas', props.gridTemplateAreas, props.theme)}
	${(props) => toPropValue('grid-area', props.grindArea, props.theme)}
`

Grid.defaultProps = {
	display: 'grid',
}

export default Grid
