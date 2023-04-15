import styles from './styles.module.scss'
import FacebookIcon  from './assets/Facebook.svg'
import WhatsappIcon  from './assets/Whatsapp.svg'
import EmailIcon  from './assets/Email.svg'
import Image from 'next/image'
const Page = () => {
    return (
        /** 
         * <div>
                                <h3 className='w-100 mb-2'>Contactanos</h3>
                                <input className='w-100 mb-2 rounded' type="text" placeholder='Correo Electronico' />
                                <textarea className='w-100 mb-2 rounded' name="mensaje" id="mensaje" cols={30} rows={10} placeholder="Mensaje"></textarea>
                                <button className='rounded'>Enviar</button>
                            </div>
        */
        <>
            <div className={styles.containerContact}>
                <div className={styles.containerContent}>

                    <div className={styles.areaContacto}>
                        <div className={styles.subareaContacto}>
                            
                        </div>
                    </div>

                    <div className={styles.areaSocial}>
                        <div>
                            <h2>Informacion de contacto</h2>
                            <div>
                                <div className={styles.containerSocialSection}>
                                    <Image className={styles.socialIcon} src={FacebookIcon} alt='sin Imagen' fill></Image>
                                    <div className={styles.socialDescription}>
                                        <p>LocalFix</p>
                                    </div>
                                </div>
                                <div className={styles.containerSocialSection}>
                                    <Image className={styles.socialIcon} src={WhatsappIcon} alt='sin Imagen' fill></Image>
                                    <div className={styles.socialDescription}>
                                        <p>2229713533</p>
                                    </div>
                                </div>

                                <div className={styles.containerSocialSection}>
                                    <Image className={styles.socialIcon} src={EmailIcon} alt='sin Imagen' fill></Image>
                                    <div className={styles.socialDescription}>
                                        <p>sts.puebla@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Page