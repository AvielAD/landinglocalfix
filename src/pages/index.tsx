import Head from 'next/head'
import TopBarLanding from '../components/TopBarLanding';
import Formulario from '../components/Formulario';
import SectionLandingTop from '@/components/SectionLangindTop';
import SectionServices from '@/components/SectionServices';
import SectionFooter from '@/components/SectionFooter';
import styles from '../styles/Home.module.scss'
import SectionTables from '@/components/SectionTables';
import SectionResponsive from '@/components/SectionResponsive';
export default function Home() {
  return (
    <>
      <Head>
        <title>STS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div >
        <TopBarLanding></TopBarLanding>
      </div>

      <div id={'inicio'} className={styles.sectionTop}>
        <SectionLandingTop></SectionLandingTop>
      </div>
      
      <div id={'servicios'} className={styles.sectionServices}>
        <SectionServices></SectionServices>
      </div>

      <div className={styles.sectionFooter}>
        <SectionFooter></SectionFooter>
      </div>
    
    </>
  )
}
