import React from 'react'

const Header = props => {

    const createFile = event => {

        event.preventDefault()

        const text = props.state
        if (!text) {
            window.alert('コード譜が入力されていません')
            return
        }

        const blob = new Blob([text], { type: 'text/plain' })

        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = 'chord_data.txt'

        link.click()
    }

    return (
        <header>
            <h1>コード譜つくーる ver.<object type="image/svg+xml" data="alpha.svg" aria-label="α" /></h1>
            <ul>
                <li>
                    <form
                        name='html_output'
                        method='post'
                        action='https://gentle-citadel-62824.herokuapp.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <input type='hidden' name='chordup_text' value={props.state}></input>
                        <button type='submit'>HTML出力</button>
                    </form>
                </li>
                <li><button onClick={createFile}>ファイル保存</button></li>
            </ul>
        </header>
    )
}
export default Header