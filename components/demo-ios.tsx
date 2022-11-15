import React, { useState } from 'react'
import { Button } from '@mantine/core'

export function DemoIos() {
  const [fileContent, setFileContent] = useState<string>('DEFAULT')
  const onButtonClick = async () => {
    const root = await navigator.storage.getDirectory()
    const untitledFileHandle = await root.getFileHandle('Untitled.txt', { create: true })
    const untitledFile = await untitledFileHandle.getFile()
    const untitledFileText = await untitledFile.text()

    setFileContent(untitledFileText)
    console.log(untitledFileText)

    if (untitledFileText.length === 0) {
      const untitledFileWritableHandle = await untitledFileHandle.createWritable()
      await untitledFileWritableHandle.write('test')
      await untitledFileWritableHandle.close()
    }
  }
  return (
    <div>
      <Button onClick={() => { onButtonClick() }}>Open</Button>
      <div>
        {fileContent}
      </div>
    </div>
  )
}
