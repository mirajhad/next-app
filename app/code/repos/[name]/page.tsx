import React, { Suspense } from 'react'
import Repo from '@/app/components/Repo';
import Link from 'next/link';
import RepoDirs from '@/app/components/RepoDirs';


const RepoPage = ({params}) => {
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>
         Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading Repo...</div>}>
      <Repo name={params.name}/>
      </Suspense>
      <Suspense fallback={<div>Loading Directories...</div>}>
      <RepoDirs name={params.name}/>
      </Suspense>
    </div>
  )
}

export default RepoPage
