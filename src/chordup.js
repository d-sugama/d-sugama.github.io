
/**
 * Chordup 記法で書かれたテキストを
 * HTML へマークアップした形へ変換します。
 * @param {string} text Chordup 記法で書かれた文字列。
 * @returns {string} マークアップされた text。
 */
const chordup = text => {
    if (!text) return ''
    const blocks = separate(text)
    return markup(blocks)
}
export default chordup

/**
 * Chordup 記法で書かれた文字列をブロック単位へ分割し、配列として返却します。
 * @param {string} text Chordup 記法で書かれた文字列。
 * @returns {Array} ブロック単位に分割された text の文字列。
 */
const separate = text => {
    const blocks = []
    for (let line of htmlspecialchars(text).replace(/\u3000/g, '&nbsp;').split(/\r?\n+/)) {
        let lastItem = blocks[blocks.length - 1]
        if (/^.*\s{2,}$/.test(lastItem)) {
            blocks[blocks.length - 1] = `${lastItem.replace(/\s+$/, '')}<br>${line}`
            continue
        }
        blocks.push(line)
    }
    return blocks
}

/**
 * 特殊文字を HTML エンティティに変換します。
 * 同名の PHP 関数の JavaScript 版の実装です。
 * @param {string} text 変換対象となる文字列。
 * @returns {string} text から特殊文字を変換した文字列。
 */
const htmlspecialchars = text => {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": "'"
    }
    return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * ブロック単位に分割された Chordup テキストを、
 * HTML でマークアップされた文字列へ変換します。
 * @param {Array} blocks ブロック単位に分割された Chordup テキスト。
 * @returns {string} 変換後の blocks 配列。
 */
const markup = blocks => {
    let replaced = []
    for (let block of blocks) {
        let temp = replace_headline(block)
        if (temp !== block) {
            replaced.push(temp)
            continue
        }
        temp = block.replace(/\s/g, '&nbsp;').replace(/\{(.*?)\}([^{<]*)/g, '<ruby><rb>$2</rb><rt>$1</rt></ruby>') // ルビを振る
        replaced.push(`<p>${temp}</p>`)
    }
    return replaced.join('')
}

/**
 * 見出し表現とマッチする行であれば <h*></h*> タグに置換して返却。
 * マッチする行でなければ何も置換せず返却する。
 * @param {string} text 置換対象の文字列。
 * @returns 見出し表現であればマークアップ後の text 文字列。
 */
const replace_headline = text => {

    if (!/^#{1,3} .*$/.test(text)) {
        return text
    }

    const maps = [
        [/^### ([^\n]*)$/, '<h3>$1</h3>'],
        [/^## ([^\n]*)$/, '<h2>$1</h2>'],
        [/^# ([^\n]*)$/, '<h1>$1</h1>']
    ]

    for (let map of maps) {
        let temp = text.replace(map[0], map[1])
        if (temp !== text) {
            return temp
        }
    }
    return text
}