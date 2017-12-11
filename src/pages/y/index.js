import React from 'react'
import me from '../../images/takaya-kobayashi.jpg'

export default () => (
  <div>
    <div id="page-1">
      <div className="profile">
        <div className="photo">
          <img src={me} />
        </div>
        <h1>Takaya Kobayashi</h1>
        <h2>a.k.a. Jigsaw, neo6120</h2>
      </div>
      <div className="copy">
        <p>A Web Application/Service Creator</p>
      </div>
    </div>
  </div>
)
