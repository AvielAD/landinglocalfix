import styles from './styles.module.scss'

const Page = () => {
    return (
        <>
            <div className={styles.sectionFooterContainer}>
                <div className={styles.sectionFooterContent}>
                    <div>
                       <p>Todos los derechos reservados 2023</p>
                       <p>Politicas de Privacidad</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page