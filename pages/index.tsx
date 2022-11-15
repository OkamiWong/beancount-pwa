import React from 'react'
import { Demo } from '../components/demo'
import { DemoIos } from '../components/demo-ios'

function Index() {
  return (
    <div className='flex flex-row w-screen justify-center'>
      <div className='w-64 flex flex-col pt-4 space-y-2'>
        <div className='h-32 rounded-md shadow-md p-4 space-y-2'>
          <div>
            Normal
          </div>
          <Demo />
        </div>
        <div className='h-32 rounded-md shadow-md p-4 space-y-2'>
          <div>
            Ios
          </div>
          <DemoIos />
        </div>
      </div>
    </div>
  )
}

export default Index
