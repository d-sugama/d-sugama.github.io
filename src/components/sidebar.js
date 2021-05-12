import React from 'react'

const SideBar = () => (
    <div className="side_bar">
        <div className="usage">
            <h2>記法のヒント</h2>
            <dl>
                <dt>コード</dt>
                <dd>
                    波括弧({'{}'})で囲む。<br />
                    <pre>{'{Am}'}There must be {'{G}'}some kind of way {'{F}'}out of here {'{G}'} </pre>
                </dd>
                <dt>強調</dt>
                <dd>
                    半角シャープ(#)1つ以上のあとに半角スペースを1つ入れる。3段階まで。
                    <pre># 強調1<br />## 強調2<br />### 強調3</pre>
                </dd>
                <dt>段落</dt>
                <dd>
                    半角スペースを1つ以下で改行する。<br />
                    <pre>hogehoge<br />fugafuga</pre>
                </dd>
                <dt>改行</dt>
                <dd>
                    文末に半角スペース2つ以上入れて改行する。<br />
                    <pre>hogehoge  ←※半角スペース2つ<br />fuafuga</pre>
                </dd>
            </dl>
        </div>
    </div>
)
export default SideBar