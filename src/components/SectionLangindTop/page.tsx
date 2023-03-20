import styles from './styles.module.scss'

const Page=() => {
    return (
      <>
      <div className={styles.sectionLandingContainer}>
        <div className={styles.sectionLandingContent}>
            <h1>Lorem Ipsum</h1>
            <p>It is a long established fact that a reader will be distracted by the 
              readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
              as opposed to using Content here, content here, making it look like readable English.</p>
        </div>
      </div>
      </>
    )

}


export default Page