import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const[ markdown,setmarkdown]=useState('# type here')

  return (
    <>
    <main>
      <section className="markdown">
        <textarea value={markdown} className="input" onChange={(e)=>setmarkdown(e.target.value)}></textarea>
        <article className="result"><ReactMarkdown>{markdown}</ReactMarkdown></article>

      </section>

    </main>
    </>

  )
}

export default App
