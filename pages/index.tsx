import React, { useEffect, useState } from 'react'
import { Console, Hook, Unhook } from 'console-feed'
import { Demo } from '../components/demo'
import { DemoIos } from '../components/demo-ios'

function Index() {
  const [logs, setLogs] = useState<any[]>([])

  useEffect(() => {
    const hookedConsole = Hook(
      window.console,
      (log) => setLogs((currentLogs) => [...currentLogs, log]),
      false,
    )
    return () => {
      Unhook(hookedConsole)
    }
  }, [])

  return (
    <div className='flex flex-row w-screen justify-center'>
      <div className='w-full flex flex-col pt-4 space-y-4 items-center'>
        <div className='w-64 h-32 rounded-md shadow-md p-4 space-y-2'>
          <div>
            Normal
          </div>
          <Demo />
        </div>
        <div className='w-64 h-32 rounded-md shadow-md p-4 space-y-2'>
          <div>
            Ios
          </div>
          <DemoIos />
        </div>
        <Console logs={logs} />
      </div>
    </div>
  )
}

export default Index
