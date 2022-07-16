import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const[ markdown,setmarkdown]=useState('## markdown preview')

  return (
    <>
    <main>
      <section className="markdown">
        <textarea value={markdown} className="input" onChange={(e)=>setmarkdown(e.target.value)}></textarea>
      </section>
      <article className="result">{markdown}</article>

    </main>
    </>

  )
}

export default App
