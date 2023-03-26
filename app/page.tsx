import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

import List from './products/list'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading m-5">Wilkommen</h1>
        <p className="lead text-muted pt-1 m-auto w-50 pb-5">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
        <p>
          <a href="#" className="btn btn-primary my-2 m-2">Main call to action</a>
          <a href="#" className="btn btn-secondary my-2 m-2">Secondary action</a>
        </p>
      </div>

    <div className="album py-5 bg-light">
        <div className="container">

          <div className="row">
         

          </div>
         </div>
    </div>      
  </section>

  )
}
