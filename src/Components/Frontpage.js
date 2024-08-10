import React from 'react'
import styles from '../Css/Frontpage.module.css'


const clg = new URL("../Components/images/4.jpg",import.meta.url);
const Frontpage = () => {
  return (
    <div id={styles.contain}>
      <div id={styles.title}>
     
      <h1>Attendance Management System</h1>
      <h2>MCA</h2>
      </div>
    <div id={styles.section}>
    <a href='/'><button>II MCA A Girls</button></a>
     <a href='/Home'><button>II MCA B Boys</button></a> 
     <img src={clg}/>
    </div>

    </div>
  )
}

export default Frontpage
