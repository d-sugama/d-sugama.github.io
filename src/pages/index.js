import React, { useState } from 'react'
import Meta from '../components/meta'
import Header from '../components/header'
import SideBar from '../components/sidebar'
import Editor from '../components/editor'

const TopPage = () => {

    const [chordupText, setState] = useState('')
    return (
        <main>
            <Meta />
            <Header state={chordupText} />
            <div className='contents'>
                <SideBar />
                <Editor state={[chordupText, setState]} />
            </div>
        </main>
    )
}
export default TopPage