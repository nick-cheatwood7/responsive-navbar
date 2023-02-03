import {
  HomeIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav
      id='navbar'
      className='bottom-0 w-screen h-20 transition-all md:w-20 md:h-screen fixed bg-slate-900 text-white md:hover:w-[16rem] group hover:block'>
      <ul
        id='navbar-list'
        className='list-none p-0 m-0 flex md:flex-col items-center h-full'>
        {/* Home */}
        <li className='w-full'>
          <Link
            to='/'
            className='flex justify-center items-center h-20 no-underline hover:text-pink-600 hover:bg-slate-800 md:transition-colors md:group-hover:justify-between md:group-hover:px-6 hover:cursor-pointer'>
            <HomeIcon className='h-8 min-w-8 mx-0 my-6' />
            <span className='hidden ml-4 md:group-hover:block'>Home</span>
          </Link>
        </li>
        {/* Search */}
        <li className='w-full'>
          <Link
            to='/search'
            className='flex justify-center items-center h-20 no-underline hover:text-pink-600 hover:bg-slate-800 md:group-hover:justify-between md:group-hover:px-6 hover:cursor-pointer md:transition-colors'>
            <MagnifyingGlassIcon className='h-8 w-8' />
            <span className='hidden ml-4 md:group-hover:block'>Search</span>
          </Link>
        </li>
        {/* Settings */}
        <li className='w-full mt-auto'>
          <Link
            to='/settings'
            className='flex justify-center items-center h-20 no-underline hover:text-pink-600 hover:bg-slate-800 md:group-hover:justify-between md:group-hover:px-6 hover:cursor-pointer md:transition-colors'>
            <AdjustmentsHorizontalIcon className='h-8 w-8' />
            <span className='hidden ml-4 md:group-hover:block'>Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
