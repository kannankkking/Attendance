import React from 'react'
import styles from '../Css/Login.module.css'

const clg = new URL("../Components/images/clg.jpg",import.meta.url);
const logo = new URL("../Components/images/logo.jpeg",import.meta.url);
const user = new URL("../Components/images/user.jpeg",import.meta.url);

const Login = () => {
  return (
    <div className={styles.header}>
    <div id={styles.bg}>
             <h1>Attendance Management System</h1>
            
    </div>
    <div id={styles.logo}>
    <img src={logo} />
    <h2>JJ College Of Arts And Science</h2>
   
    </div>
    <div className={styles.img}>
     <img src={clg}/>
    </div>
    <div className={styles.content}>
       <h2>LOGIN</h2>
       <img src={user}/>

       <input type='text' placeholder='Username' />
<input type='password' placeholder='Password'/>
<a href='/Frontpage'><button>Login</button></a>
<h5>Forget password? <a href='#'>Click here</a></h5>
    </div>
  
      </div>
  )
}

export default Login
