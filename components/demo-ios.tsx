import React from 'react'
import { Button } from '@mantine/core'

export function DemoIos() {
  const onButtonClick = async () => {
    const root = await navigator.storage.getDirectory()
    const untitledFileHandle = await root.getFileHandle('Untitled.txt', { create: true })
    const untitledFile = await untitledFileHandle.getFile()
    const untitledFileText = await untitledFile.text()

    console.log(untitledFileText)

    if (untitledFileText.length === 0) {
      const untitledFileWritableHandle = await untitledFileHandle.createWritable()
      untitledFileWritableHandle.write('test')
    }
  }
  return (
    <div>
      <Button onClick={() => { onButtonClick() }}>Open</Button>
    </div>
  )
}
