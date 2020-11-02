import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <div>
      <h1>
        Error 404
      </h1>
      <h3>
        あなたがお探しのページはありませんでした。
        <br />
        <br />
        <Link to="/">
          ホームページに戻る
        </Link>
      </h3>
    </div>
  )
}
