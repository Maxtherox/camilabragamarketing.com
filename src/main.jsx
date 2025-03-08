import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import Theme from './styles/theme'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles>
      </GlobalStyles>
    </ThemeProvider>
  </StrictMode>
)
