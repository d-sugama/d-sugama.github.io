import React from 'react'
import { Helmet } from 'react-helmet'

const title = 'コード譜つくーる'
const description = 'コード譜くらいもう少し楽に作れんもんか、と思ったので Markdown 風な記法でコード譜作れるエディタ作りました。弾き語り用のカンペ作りやバンドメンバーへの共有用にどうぞ。'
const image = '/ogp.png'

const Meta = () => (
    <Helmet>
        <html lang="ja" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
    </Helmet>
)
export default Meta