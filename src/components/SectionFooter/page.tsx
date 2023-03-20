import styles from './styles.module.scss'

const Page = () => {
    return (
        <>
            <div className={styles.sectionFooterContainer}>
                <div className={styles.sectionFooterContent}>
                    <div>
                        <h4>Pie de pagina</h4>
                        <p> is simply dummy text of the printing and typesetting industry.</p>
                        <i>icons</i>
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