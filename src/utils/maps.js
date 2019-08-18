import qprobMobile from 'assets/images/portfolio/qprob_mobile.png'
import qprob from 'assets/images/portfolio/qprob.png'
import quantrade from 'assets/images/portfolio/quantrade.png'
import tokenStarter from 'assets/images/portfolio/token_starter.png'
import act from 'assets/images/portfolio/act.jpeg'
import ipfs from 'assets/images/portfolio/ipfs.jpeg'
import blueblood from 'assets/images/portfolio/blueblood.png'
import cube from 'assets/images/portfolio/cube.jpg'
import provoco from 'assets/images/portfolio/provoco.png'
import identiform from 'assets/images/portfolio/identiform.png'
import talaikis from 'assets/images/portfolio/talaikis.jpg'
import identiformWeb from 'assets/images/portfolio/identiform.jpg'
import bluebloodWeb from 'assets/images/portfolio/blueblood_web.png'
import powerpiper from 'assets/images/portfolio/powerpiper.jpg'
import ufunc from 'assets/images/portfolio/ufunc.jpg'
import nakamoto from 'assets/images/portfolio/nakamoto.png'
import cubednext from 'assets/images/portfolio/cubednext.png'

export const projectsMap = [
  {
    id: 0,
    url: 'https://github.com/TalaikisInc/provoco_contract',
    title: 'Provoco.me Contract',
    description: 'Multi-stage ICO contract for Provoco.me (Solidity, Truffle).',
    image: provoco,
    type: 'blockchain'
  },
  {
    id: 1,
    url: 'https://github.com/TalaikisInc/identiform',
    title: 'Decentralized KYC/AML, ICO/ Trust Catalog MVP',
    description: 'REST-API (Node.js) for data encryption and storage on a private IPFS cluster, a contract and dApp (React.js).',
    image: identiform,
    type: 'blockchain'
  },
  {
    id: 2,
    url: 'https://github.com/TalaikisInc/cube',
    title: 'Cube',
    description: 'Docker system for multi Node.js apps deployment (Docker, Bash, Letsencrypt, Ubuntu).',
    image: cube,
    type: 'microservices'
  },
  {
    id: 3,
    url: 'https://github.com/TalaikisInc/email_service',
    title: 'Contact Us API Service',
    description: 'Dockerized contact us microservice.',
    image: cube,
    type: 'microservices'
  },
  {
    id: 4,
    url: 'https://github.com/TalaikisInc/blueblood',
    title: 'Blue Blood Engine',
    description: 'Quantitative trading strategies index platform (Python, 200k code lines). NOTE. Full code is not available publicly.',
    image: blueblood,
    type: 'trading',
    url2: 'https://medium.com/bluebloodltd/introducing-blueblood-quantitative-trading-strategies-index-bcffe02e7313',
    title2: 'Medium'
  },
  {
    id: 5,
    url: 'https://sales.talaikis.com/',
    title: 'Token Sale Starter',
    description: 'Universal contract (Solidity) and decentralized app (React.js), enabled the possibility to deploy contracts without any programming. NOTE. Code is not available publicly.',
    image: tokenStarter,
    type: 'blockchain',
    url2: 'https://medium.com/@dxenu/how-to-have-your-own-ico-along-with-the-dapp-in-5-minutes-23e3ecea8732',
    title2: 'Medium'
  },
  {
    id: 6,
    url: 'https://github.com/TalaikisInc/ipfs-uploader',
    title: 'IPFS Image Uploader',
    description: 'User friendly image uploader of images to distributed Interplanetary File System (IPFS, React.js).',
    image: ipfs,
    type: 'blockchain',
    url2: 'https://medium.com/@dxenu/upload-images-to-ipfs-simply-51cf85a1d83b',
    title2: 'Medium',
    url3: 'https://ipfs.talaikis.com',
    title3: 'Visit'
  },
  {
    id: 7,
    url: 'https://github.com/TalaikisInc/actofindependence',
    title: 'Act of Independence on Blockchain',
    description: 'Act of Independence of Lithuania on Ethereum Blockchain (Solidity, IPFS, React.js).',
    image: act,
    type: 'blockchain',
    url2: 'https://medium.com/@dxenu/how-we-put-act-of-reinstating-independence-of-lithuania-on-ipfs-and-ethereum-blockchain-for-ever-d6fab0ffd6fb',
    title2: 'Medium',
    url3: 'https://act.talaikis.com',
    title3: 'Visit'
  },
  {
    id: 8,
    url: 'https://github.com/TalaikisInc/celebs',
    title: 'Celebrities Daily',
    description: 'Automated, scrapped content website on 6,000+ celebrities (Python, Golang, Nuxt.js/ Vue, Postgres).',
    image: qprob,
    type: 'web'
  },
  {
    id: 9,
    url: 'https://github.com/TalaikisInc/quotes',
    title: 'Famous quotes',
    description: 'Project that delivers 2 million scrapped quotes (Nuxt.js, Postgres, Python, Golang).',
    image: qprob,
    type: 'web'
  },
  {
    id: 10,
    url: 'https://github.com/TalaikisInc/Quantrade',
    title: 'Quantrade',
    description: 'Quantitative trading signals & 100s of profitable automated strategies portfolio for retail traders. (Python, Windows, Ubuntu, WebDAV, Pandas as DB, MySQL, Postgres, Redis, MongoDB, Django, InfluxDB, etc.)',
    image: quantrade,
    type: 'trading'
  },
  {
    id: 11,
    url: 'https://github.com/TalaikisInc/talaikis.com_react',
    title: 'Talaikis.com',
    description: 'This website (React.js, Docker, Node.js). Replaces old website (Python, Django).',
    image: talaikis,
    type: 'web'
  },
  {
    id: 12,
    url: 'https://github.com/TalaikisInc/QProb',
    title: 'QProb Aggregator',
    description: 'Automated scrapped content summarization, sentiment gathering and automatic marketing platform, delivering websites with a few cicks (Golang API, Python CPU intensive tasks, Nutx.js frontend, Postgres).',
    image: qprob,
    type: 'web'
  },
  {
    id: 13,
    url: 'https://github.com/TalaikisInc/qprob_ion',
    title: 'Qprob Mobile',
    description: 'One click apps on Qprob aggregation API platform.',
    image: qprobMobile,
    type: 'mobile'
  },
  {
    id: 14,
    url: 'https://github.com/TalaikisInc/identiform-website',
    title: 'Identiform Blockchain Development Website',
    description: 'Dockerized React.js.',
    image: identiformWeb,
    type: 'web',
    url2: 'https://blockchain.talaikis.com/',
    title2: 'Website'
  },
  {
    id: 15,
    url: 'https://github.com/TalaikisInc/blueblood.ltd',
    title: 'BlueBlood Web Development Website',
    description: 'Dockerized React.js.',
    image: bluebloodWeb,
    type: 'web',
    url2: 'https://blueblood.talaikis.com/',
    title2: 'Website'
  },
  {
    id: 16,
    url: 'https://github.com/TalaikisInc/powerpiper-website',
    title: 'PowerPiper Website',
    description: 'Next.js, Typesript, Node.js API.',
    image: powerpiper,
    type: 'web'
  },
  {
    id: 17,
    url: 'https://ufunc.com',
    title: 'Ufunc Shop',
    description: 'Shop created using automation technlogy.',
    image: ufunc,
    url2: 'https://github.com/TalaikisInc/UFunc',
    title2: 'GitHUB',
    type: 'web'
  },
  {
    id: 18,
    url: 'https://nakamotowallet.org/',
    title: 'Nakamoto Wallet',
    description: 'Decentralized Mobile Ethereum Wallet.',
    image: nakamoto,
    url2: 'https://github.com/TalaikisInc/nakamoto',
    title2: 'GitHub',
    type: 'mobile'
  },
  {
    id: 19,
    url: 'https://cubed.talaikis.com',
    title: 'Users Cubed Frontend',
    description: 'User Management System / CMS (SSR Frontend).',
    image: cubednext,
    url2: 'https://github.com/TalaikisInc/users-cubed-next-frontend',
    title2: 'GitHUB',
    type: 'web'
  },
  {
    id: 20,
    url: 'https://github.com/TalaikisInc/users-cubed-s3',
    title: 'Users Cubed S3 API',
    description: 'User Management System / CMS API on Amazon AWS S3.',
    image: cubednext,
    type: 'microservices'
  }
]
