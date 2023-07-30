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
                        <div className='col-lg-4 col-md-6'>
                            <CardComponent
                                titulo='Reparacion de Celulares'
                                descripcion='Reemplazo de pantalla, cambio de bateria, reparacion estetica.'
                                imagenUrl='bi bi-bag'></CardComponent>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <CardComponent
                                titulo='Mantenimiento a PC y Laptops'
                                descripcion='Mantenimiento Preventivo, Mantenimiento Correctivo, Actualizacion Hardware.'
                                imagenUrl='bi bi-bookmark-star'></CardComponent>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <CardComponent
                                titulo='Asesoria Dispositivos Inteligentes'
                                descripcion='Cotizaciones sin costo, orientacion sobre tu equipo inteligente.'
                                imagenUrl='bi bi-shield-check'></CardComponent>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}


export default Page