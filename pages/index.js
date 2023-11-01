import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Logo from '../public/logo.png'
import Card from '../components/Card'
import { data, promoData } from '../components/data'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Department of Information Technology</title>
        <link rel="icon" href="/logo.png" />
      </Head>
         <div className={styles.main}>
            <div className={styles.left}>
              <div className={styles.leftContainer}>
                <Image className={styles.logo} src={Logo} alt="Image not found"></Image>
                <div className={styles.deptName}>Department of Information Technology</div>
                <div className={styles.deptTitle}>The Student and Faculty Gateway Portal</div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.rightContainer}>
                <div className={styles.title}>Gateway Portal</div>
                <div className={styles.instruction}>Click on the appropriate button to be redirected to the correct screen.</div>
                <div className={styles.links}>
                  {data.map( item => {
                    return(
                      <Card key={item.key} name={item.name} link={item.link} colorbg={item.colorbg}/>
                    )
                  })}
                </div>
                <div className={styles.promo}>
                  Follow Us
                </div>
                <div className={styles.promolinks}>
                  {promoData.map(item => {
                    return(
                      <img className={styles.promoIcon} src={item.logo} key={item.key}></img>
                    )
                  })}
                </div>
              </div>
            </div>
         </div>
    </div>
  )
}
