import React from 'react'
import ReactDOM from 'react-dom'
import { styled } from 'linaria/react'
import styledComponent from 'styled-components'

const StyledComponentsColumn = styledComponent.div`
  background: ${({ background }) => background == null ? 'none': background};
  flex-direction: column;

  & > * + * {
    margin-top: ${({ spacing }) => spacing == null ? '0' : spacing};
  }
`

const LinariaColumn = styled.div`
  background: ${({ background }) => background == null ? 'none': background};
  flex-direction: column;

  & > * + * {
    margin-top: ${({ spacing }) => spacing == null ? '0' : spacing};
  }
`

const Demo = ({ Column }) => (
  <Column spacing='50px' background='#ddd'>
    <Column spacing='25px' background='lightgreen'>
      <Column background='yellow'>foo</Column>
      <Column background='lightblue'>bar</Column>
    </Column>
    <Column background='pink'>baz</Column>
  </Column>
)

const App = () => {
  return (<>
    <h2>Styled Components</h2>
    {Demo({ Column: StyledComponentsColumn })}
    <h2>Linaria</h2>
    {Demo({ Column: LinariaColumn })}
  </>)
}

ReactDOM.render(<App/>, document.getElementById('app'))
