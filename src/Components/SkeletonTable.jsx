import React from 'react'

const SkeletonTable = () => {
  return (
    <div className='flex flex-row px-6 py-2 shadow-xl'>
        <div role="status" className="w-full animate-pulse grid grid-cols-3 gap-4">
            <div className="h-12 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-4"></div>
            <div className="h-12 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-2.5"></div>
            <div className="h-12 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-2.5"></div>
            <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-2.5"></div>
            <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-2.5"></div>
            <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-2.5"></div>
            <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-2.5"></div>
            <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-2.5"></div>
            <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-2.5"></div>
            <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-2.5"></div>
            <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-2.5"></div>
            <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-full"></div>
        </div>
    </div>
  )
}

export default SkeletonTable
