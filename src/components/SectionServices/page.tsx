import styles from './styles.module.scss'
import CardComponent from '../ComponentsElement/CardComponent'
import { CardInterface } from '@/Interfaces/card'

let servicio1: CardInterface

const Page=() => {
    return (
        <div className={styles.sectionService}>
            <div className={styles.sectionServiceContent}>
                <div>
                    <h2>Nuestros Servicios</h2>
                    <p>Brindamos informacion y alternativas para una optima eleccion al momento de elegir reparar su equipo tecnologico, smartphone o computadora</p>
                </div>
                <div className={styles.containerCards}>
                    <CardComponent 
                    titulo='Reparacion de Celulares' 
                    descripcion='Reemplazo de pantalla, cambio de bateria, reparacion estetica.' 
                    imagenUrl='bi bi-bag'></CardComponent>

                    <CardComponent 
                    titulo='Mantenimiento a Computadoras' 
                    descripcion='Mantenimiento Preventivo, Mantenimiento Correctivo, Actualizacion Hardware.' 
                    imagenUrl='bi bi-bookmark-star'></CardComponent>
                    
                    <CardComponent 
                    titulo='Asesoria Dispositivos Inteligentes' 
                    descripcion='Cotizaciones sin costo, orientacion sobre tu equipo inteligente.' 
                    imagenUrl='bi bi-shield-check'></CardComponent>

                </div>
                
            </div>
        </div>
    )

}


export default Page