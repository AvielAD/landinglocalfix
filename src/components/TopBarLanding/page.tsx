import Link from 'next/link'
import styles from './styles.module.scss'
import React, { useState } from 'react';


interface parametros {
  datos: string[]
}
const Page: React.FC<parametros> = ({ datos }) => {


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">LocalFix</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
      </nav>
    </>
  )

}


export default Page