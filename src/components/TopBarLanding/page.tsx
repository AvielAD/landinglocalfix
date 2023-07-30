import Link from 'next/link'
import styles from './styles.module.scss'
import React, { useEffect, useRef, useState } from 'react';

const Page = () => {
  const [menu, setMenu] = useState(false);
  const wrapperRef = useRef(null) as any
  const logowrapRef= useRef(null) as any

  useEffect(()=>{
      const handleOutSideClick=(event:any)=>{
          if(menu && wrapperRef.current && logowrapRef.current &&
              !wrapperRef.current.contains(event.target) && !logowrapRef.current.contains(event.target)){
             setMenu(false)
             console.log('Click')
          }
      }
              
      document.addEventListener('click', handleOutSideClick)
      return ()=>{
          document.removeEventListener('click', handleOutSideClick)
      }
  })
  return (
    <>
      <div className={styles.containerNavBar}>
                <div className={styles.containerContentNavBar}>
                    <div>
                        <Link href='#inicio'>LocalFix</Link>
                    </div>

                    <div className={styles.menuTop}>
                        <i ref={logowrapRef} className="bi bi-list" onClick={() => setMenu(!menu)}></i>
                    </div>

                    <div ref={wrapperRef}
                    className={`${styles.menuTopMobile} 
                    ${menu ? styles.menuView : styles.menuHidden}`}>
                        <ul className={styles.listMenu}>
                            <Link href='#inicio'>Inicio</Link>
                            <Link href='#servicios'>Servicios</Link>
                            <Link href='#nosotros'>Nosotros</Link>
                            <Link href='#contacto'>Contacto</Link>
                        </ul>

                    </div>

                    <ul>
                        <Link href='#inicio'>Inicio</Link>
                        <Link href='#servicios'>Servicios</Link>
                        <Link href='#nosotros'>Nosotros</Link>
                        <Link href='#contacto'>Contacto</Link>
                    </ul>

                </div>
            </div>
    </>
  )
}
export default Page