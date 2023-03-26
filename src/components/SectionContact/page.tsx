import styles from './styles.module.scss'

const Page =()=>{
    return(
    <>
        <div className={styles.containerContact}>
            <div className={styles.containerContent}>

                <div className='row p-5'>
                    <div className='col-12 col-sm-6 col-lg-6  col-md-6'>
                        <div className={styles.sectionContentForm}>
                            <h3>Contactanos</h3>
                            <input type="text" placeholder='Correo Electronico' />
                            <textarea name="mensaje" id="mensaje" cols={30} rows={10}></textarea>
                            <button>Enviar</button>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-6 col-md-6'>
                        Informacion de Contacto
                    </div>
                </div>


            </div>
        </div>
    </>
    )
}

export default Page