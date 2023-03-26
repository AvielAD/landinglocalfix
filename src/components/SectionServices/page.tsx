import styles from './styles.module.scss'
import CardComponent from '../ComponentsElement/CardComponent'
import { CardInterface } from '@/Interfaces/card'

let servicio1: CardInterface

const Page = () => {
    return (
        <div className={styles.sectionService}>
            <div className={styles.sectionServiceContent}>
                <div className='mb-5'>
                    <h1 className='text-primary'>Servicios</h1>
                </div>
                <div className={styles.containerCards}>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6'>
                            <CardComponent
                                titulo='Desarrollo Web'
                                descripcion='Desarrollamos páginas web únicas y personalizadas que representan tu negocio de la mejor manera posible.'
                                imagenUrl='bi bi-bag'></CardComponent>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <CardComponent
                                titulo='Aplicaciones Moviles'
                                descripcion='Creamos aplicaciones móviles personalizadas para iOS y Android que potencian tu negocio.'
                                imagenUrl='bi bi-bookmark-star'></CardComponent>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <CardComponent
                                titulo='Software a Medida'
                                descripcion='Creamos Software personalizado que se ajusta a las necesidades de tu negocio y mejora tus procesos empresariales'
                                imagenUrl='bi bi-shield-check'></CardComponent>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <CardComponent
                                titulo='Bases de Datos'
                                descripcion='Optimizamos y diseñamos base de datos a medida para potenciar el rendimiento y eficiencia de tu negocio.'
                                imagenUrl='bi bi-shield-check'></CardComponent>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}


export default Page