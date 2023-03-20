import styles from './styles.module.scss'

const Page = () => {
    return (
        <>
            <div className={styles.sectionFooterContainer}>
                <div className={styles.sectionFooterContent}>
                    <div className='row'>
                        <h4>Ubicacion</h4>
                        <p> <i className="bi bi-geo-alt"></i> 14 sur 6715 local A.</p>
                    </div>
                    <div>
                        <h4>Contenido Adicional</h4>
                        <a href="">Blog</a>
                        <a href="">Cotizaciones</a>
                    </div>
                    <div>
                        <h4>Terminos y Condiciones</h4>
                        <a href="">Politicas de Privacidad</a>
                        <a href="">Terminos de Uso</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page