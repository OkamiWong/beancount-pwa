import React from 'react'
import { Button } from '@mantine/core'

export function Demo() {
  const onButtonClick = async () => {
    const rootDirectoryHandle = await window.showDirectoryPicker()
    console.log(rootDirectoryHandle.name)
    const fileHandle = await rootDirectoryHandle.getFileHandle('Untitled.txt', { create: true })
    const file = await fileHandle.getFile()
    console.log(await file.text())
  }
  return (
    <div>
      <Button onClick={() => { onButtonClick() }}>Open</Button>
    </div>
  )
}
