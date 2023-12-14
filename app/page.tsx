'use client';

import { Button } from '@/components/ui/button'
import { atom, useAtom } from 'jotai';

const fileSelected = atom(null);

export default function Home() {
  const [file, setFile] = useAtom(fileSelected)

  function onFileChange(event: any) {
    setFile(event.target.files[0]);
    const formData = new FormData();
    debugger;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">

        <Button
          onClick={() => {
            document.getElementById("file")?.click();
          }}>
          Upload your pdf file
        </Button>

        <input type="file" id="file" style={{ display: "none" }} accept="application/pdf" onChange={onFileChange} />
      </div>
    </main>
  )
}
