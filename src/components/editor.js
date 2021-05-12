import React from 'react'
import chordup from '../chordup'

const Editor = props => {

    const [chordupText, setState] = props.state
    const handleInputChange = event => {
        setState(event.target.value)
    }

    return (
        <div className="editor">
            <textarea wrap="normal" onChange={handleInputChange} autoFocus={true} placeholder='「記法のヒント」に沿ってコード譜を入力してください' />
            <div className="output" dangerouslySetInnerHTML={{ __html: chordup(chordupText) }} />
        </div>
    )
}
export default Editor