import Head from 'next/head'
import SectionResponsive from '@/components/SectionResponsive';
import SectionGrid from '@/components/SectionGrid';
export default function grid() {
  return (
    <>
      <Head>
        <title>STS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionGrid></SectionGrid>
    </>
  )
}
