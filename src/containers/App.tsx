import { BrowserRouter } from 'react-router-dom';
import NavLayout from 'components/NavLayout'

import { GlobalStyle } from 'styles';

function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <NavLayout />
      </BrowserRouter>
    </>
  );
}

export default App;
