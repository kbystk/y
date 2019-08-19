import React from 'react'
import Helmet from 'react-helmet'
import './index.css'
import Logo from '../images/mark.svg'

const ga = `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-96527600-1', 'auto');
ga('send', 'pageview');`

export default ({children}) => (
  <div>
    <Helmet
      title="Takaya Kobayashi"
      meta={[
        {charset: 'utf8'},
        {viewport: 'width=device-width, initial-scale=1'},
        {name: 'author', content: 'Takaya Kobayashi'},
        {name: 'description', content: 'About Takaya Kobayashi'},
        {name: 'theme-color', content: '#BD3129'},
        {property: 'og:title', content: 'Takaya Kobayashi'},
        {property: 'og:url', content: 'https://kbys.tk/y'},
        {
          property: 'og:image',
          content: 'https://kbys.tk/img/takaya-kobayashi.jpg'
        },
        {property: 'og:image:width', content: '400'},
        {property: 'og:image:height', content: '400'},
        {property: 'og:description', content: 'About Takaya Kobayashi'},
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:site', content: '@neo6120'},
        {name: 'twitter:creator', content: '@neo6120'},
        {name: 'msapplication-TileColor', content: '#bd3129'}
      ]}
      link={[
        {
          href: 'https://fonts.googleapis.com/css?family=Cutive+Mono',
          rel: 'stylesheet'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest'
        },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg',
          color: '#bd3129'
        }
      ]}
      script={[
        {
          type: 'text/javascript',
          src: 'https://use.fontawesome.com/releases/v5.4.2/js/all.js',
          defer: true
        },
        {type: 'text/javascript', innerHTML: ga}
      ]}
    />
    <div>
      <header>
        <a href="/y">
          <Logo />
        </a>
      </header>
      {children}
    </div>
  </div>
)
