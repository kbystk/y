import { NextPage } from 'next'
import { Layout } from '../../components/Layout'
import data from '../../meta.json'

const TopPage: NextPage = () => (
  <Layout>
    <div id="page-1">
      <div className="profile">
        <div className="photo">
          <img src="/static/takaya-kobayashi.jpg" />
        </div>
        <h1>{data.name}</h1>
        <h2>a.k.a.&nbsp;{data.aka}</h2>
      </div>
      <div className="copy">
        <p>{data.copy}</p>
      </div>
      <div className="main-links">
        {data.mainLinks.map(link => (
          <a className="link" href={link.href} key={link.href}>
            <i className={`icon ${link.fa}`} />
            {link.name}
          </a>
        ))}
      </div>
    </div>
    <div id="page-2">
      <div className="links">
        <h3>
          <span>Links</span>
        </h3>
        <div className="link-grid">
          {data.links.map(link => (
            <a className="link" href={link.href} key={link.href}>
              <i className={`icon ${link.fa}`} />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export default TopPage
