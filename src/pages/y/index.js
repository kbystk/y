import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../layouts'
import me from '../../images/takaya-kobayashi.jpg'

export const query = graphql`
  {
    dataYaml {
      name
      aka
      copy
      mainLinks {
        name
        href
        fa
      }
      links {
        name
        href
        fa
      }
    }
  }
`

export default ({data}) => (
  <Layout>
    <div id="page-1">
      <div className="profile">
        <div className="photo">
          <img src={me} />
        </div>
        <h1>{data.dataYaml.name}</h1>
        <h2>a.k.a.&nbsp;{data.dataYaml.aka}</h2>
      </div>
      <div className="copy">
        <p>{data.dataYaml.copy}</p>
      </div>
      <div className="main-links">
        {data.dataYaml.mainLinks.map(link => (
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
          {data.dataYaml.links.map(link => (
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
