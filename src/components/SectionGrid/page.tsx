import styles from './styles.module.scss'

const Page=() => {
    return (
      <>
        <div className={styles.containerGrid}>

          <div className={styles.containerGridContent}>

            <div className={styles.areaNavBar}>
              <p>Barra de Navegacion</p>
            </div>
            
            <div className={styles.areaLanding}>
              <p>Landing principal</p>
            </div>
            
            <div className={styles.sectionSecundario}>
              <p>landing secundario 1</p>
            </div>

            <div className={styles.sectionSecundario2}>
              <p>landing terciario 1</p>
            </div>
            
            <div className={styles.sectionVertical}>
              <p>section vertical</p>
            </div>

            <div className={styles.areaFooter}>
              <p>footer</p>
            </div>


          </div>
        </div>
      </>
    )

}


export default Page