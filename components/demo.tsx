import React from 'react'
import { Button } from '@mantine/core'

export function Demo() {
  const onButtonClick = async () => {
    const root = await navigator.storage.getDirectory()
    console.log(root.name)
    const fileHandle = await root.getFileHandle('Untitled.txt', { create: true })
    const file = await fileHandle.getFile()
    console.log(await file.text())
  }
  return (
    <div>
      <Button onClick={() => { onButtonClick() }}>Open</Button>
    </div>
  )
}
