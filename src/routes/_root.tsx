import Layout from '../components/Layout';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <div id='main' className='min-h-screen w-screen text-slate-900'>
        <Layout>
          <Outlet />
        </Layout>
      </div>
    </>
  );
}
