import styles from './styles.module.scss'
import Image from 'next/image'
import imageNosotros from './assets/nosotros.jpg'

const Page = () => {
  return (
    <>
      <div className={styles.sectionLandingContainer}>
        <div className={styles.sectionLandingContent}>

          <div className={styles.areaBanner}>
            <h1 className='text-primary'>Nuestra Filosofia</h1>
          </div>


          <div className={styles.areaImagen}>
            <Image  src={imageNosotros} alt='Sin Imagen' fill />
          </div>

          <div className={styles.areaLista}>
            <ul>
              <li className='m-1'>Calidad</li>
              <li className='m-1'>Tiempo</li>
              <li className='m-1'>Asesoria</li>
              <li className='m-1'>Alternativas</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  )

}


export default Page