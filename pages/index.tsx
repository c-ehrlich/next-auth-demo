import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import LoginBtn from '../components/LoginBtn'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { data: session } = useSession()

  return (
    <div className={styles.container}>
      <LoginBtn />
      { session && <div>{JSON.stringify(session)}</div>}
    </div>
  )
}

export default Home
