import styles from './styles.module.scss'

const tableData = [
    {
        Nombre: "Juan 1",
        Apellido: "Apellido 1",
        Telefono: "1111111111"
    },
    {
        Nombre: "Juan 2",
        Apellido: "Apellido 2",
        Telefono: "2222222222"
    },
    {
        Nombre: "Juan 3",
        Apellido: "Apellido 3",
        Telefono: "3333333333"
    },
    {
        Nombre: "Juan 4",
        Apellido: "Apellido 4",
        Telefono: "4444444444"
    },
    {
        Nombre: "Juan 5",
        Apellido: "Apellido 5",
        Telefono: "4444444445"
    },
]

const Page=() => {
    return (
      <>
      <div className={styles.sectionLandingContainer}>
        <div className={styles.sectionLandingContent}>
            
            <div className='table-responsive-sm'>
            <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Apellido</th>
                    <th scope='col'>Telefono</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData.map( (item,index)=>{
                        
                        return(
                        <tr key={index}>
                            <th scope='row'>{index}</th>
                            <td>{item.Nombre}</td>
                            <td>{item.Apellido}</td>
                            <td>{item.Telefono}</td>
                        </tr>)
                    })
                }
            </tbody>
            </table>
            </div>
        </div>
      </div>
      </>
    )

}


export default Page