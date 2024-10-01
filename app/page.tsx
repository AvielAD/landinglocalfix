import TopSection from '@/app/components/topsection'
import FooterSection from '@/app/components/footer'
import DetailsWorkSection from '@/app/components/detailswork'
import StaticsWork from '@/app/components/statisticswork'
import BannerSection from '@/app/components/banner'

export default function Home() {
  return (
    <div className="">
        <TopSection></TopSection>
        <DetailsWorkSection></DetailsWorkSection>
        <StaticsWork></StaticsWork>
        <BannerSection {...infoBanner}></BannerSection>
        <FooterSection></FooterSection>
    </div>
  );
}


const infoBanner = {
  title: 'Podemos ayudarte con alguna cotización?',
  description: 'Es importante conozcas el modelo de tu celular o computadora.',
  namebutton: 'más información'
  

}