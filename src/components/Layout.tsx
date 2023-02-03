import Navbar from './Navbar';

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <div className='w-full h-full'>
      <Navbar />
      <main id='content' className='ml-0 md:ml-20 p-4'>
        {children}
      </main>
    </div>
  );
}
