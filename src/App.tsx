import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Routes from './router/Routes';

function App() {
  return (
    <BrowserRouter>
      <Layout key={'Layout'}>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
