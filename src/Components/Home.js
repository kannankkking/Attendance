import React from 'react'
import styles from '../Css/Home.module.css'

import Content from '../Components/Content'

const Frontpage = () => {
  return (
    <div className={styles.heading}>
        <div className={styles.tittle}>
        <h1>Attendance Management System</h1>
        </div>
        <div id={styles.content}>
            <input className={styles.date} type='date'/>
           
            </div>
           <div id={styles.drop}>
           <span>Name:</span> <select  >
       
                < option value='Mekala'> Mekala</option>
                <option value='Selvan'>Selvan</option>
                <option value='Balaji'>Balaji</option>
                <option value='Neela'>Neela</option>
            </select> 
            </div>
            <div className={styles.drop}>
            <span>Subject:</span> <select >
       
       <option value='Network Security'>Network Security</option>
       <option value='Software project Management'>Software project Management</option>
       <option value='Database Management system'>Database Management System</option>
       <option value='Compailer Design'>Compailer Design</option>
   </select> 
   </div>
   
   <div className={styles.container}>
     <Content />
   
   </div>
   <div id={styles.btn}>
   <button  type='submit'>Submit</button>
   </div>
   
    </div>
  )
}

export default Frontpage
