import styles from './styles.module.scss'

const Page=() => {
    return (
      <>
        <div className='container text-center border border-dark'>
          <div className='row'>
            <div className='col border border-dark'>
              <p>Column</p>
            </div>
            <div className='col border border-dark'>
              <p>Column 2</p>
            </div>
            <div className='col border border-dark'>
              <p>Column 3</p>
            </div>
          </div>
        </div>
      </>
    )

}


export default Page