import styles from './styles.module.scss'
import { VscGithubInverted } from 'react-icons/vsc'
import { AuthContext } from '../../context/auth'
import { useContext } from 'react'

export function LoginBox() {
    const { signInUrl, user } = useContext(AuthContext)
    
    return (
        <div className={styles.loginBoxWrapper} >
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl} className={styles.signInWithGitHub} >
                <VscGithubInverted size="24" />  Entrar com Github
            </a>
        </div>
    )
}