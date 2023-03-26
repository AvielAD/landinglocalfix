import styles from './styles.module.scss'
import Image from 'next/image'
import imageNosotros from './assets/nosotros.svg'

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
              <li className='m-1'>Alto Sentido de prioridad y responsabilidad ante las necesidades de nuestros clientes.</li>
              <li className='m-1'>Trabajo en equipo, es prioritario en el desarrollo de nuestro trabajo</li>
              <li className='m-1'>Buscamos distinguirnos por el desarrollo de sistemas con interface grafica visualmente amigablemente por el usuario final, asi como componentes minimalistas </li>
              <li className='m-1'>Relaciones a largo plazo con nuestros clientes.</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  )

}


export default Page