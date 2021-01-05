import { BrowserRouter, Route } from 'react-router-dom';
import NavLayout from 'components/NavLayout'

import { GlobalStyle } from 'styles';
import { pageItems } from 'utils/pages';

function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <NavLayout />
        {
          pageItems.map(
            e =>
              <Route key={e.to} component={e.component} exact path={e.to} />
          )
        }
      </BrowserRouter>
    </>
  );
}

export default App;
