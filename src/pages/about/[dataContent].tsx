import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Grid, Layout, ImagesAPIWrapper } from '../../components/index';

export default function DataContent() {
  const router = useRouter();
  const bloomberUrl = 'https://zt2s2v7fdd.execute-api.us-west-2.amazonaws.com/Dev/bloomberg?limit=10000';
  const carsUrl = 'https://www.ag-grid.com/example-assets/row-data.json';
  const [cars, setCars] = useState([]);

  const renderMainContent: any = () => {
    if (router.query.dataContent === 'table' || router.query.dataContent === 'bloomberg') {
      return (
        <div className="flex justify-center w-full">
          <div className="flex w-4/6 self-center">
            <Grid key={router.query.dataContent} url={router.query.dataContent === 'table' ? carsUrl : bloomberUrl} isStructured={router.query.dataContent === 'table'} />
          </div>
        </div>
      );
    } else {
      return (
        <ImagesAPIWrapper />
      );
    }
  }

  const subMenu = [
    { name: 'Table', nav: 'table' },
    { name: 'Images', nav: 'images' },
    { name: 'Bloomberg', nav: 'bloomberg' }
  ]

  return (
    <div>
      <div className="hidden w-full md:block md:w-auto flex items-center" id="navbar-default">
        <div className="flex flex-col justify-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {subMenu.map(({ name, nav }: any) => {
            return (
              <Link key={`${nav}`} as={`/about/${nav}/`} href="/about/[dataContent]" className={`${router.query.dataContent == nav && 'bg-blue-400 text-white w-20 flex justify-center'} block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100  md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white`}>{name}</Link>
            )
          })}
        </div>
      </div>

      {renderMainContent()}
    </div >
  )
}
