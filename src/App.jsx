import Layout from './components/Layout/Layout';
import Loader from './components/Loader/Loader';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <>
      <Layout>
        <Loader />
        <AppRoutes />
      </Layout>
    </>
  );
}

export default App;
