import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { useSession, signIn, signOut } from "next-auth/react"

import styles from './styles.module.scss';

export function SignInButton() {
    const { data: session } = useSession();
    
    //const isUserLoggedIn = true;

    //console.log(session);
    
    const logado = (
        <button type="button"
            className={styles.signInButton}
            onClick={() => signOut()}
            >
            <FaGithub color="#04d361"/>
            {session?.user?.name}
            
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    )

    const deslogado = (
        <button type="button"
            className={styles.signInButton}
            onClick={() => signIn('github')}
            >
            <FaGithub color="#eba417"/>
            Sign in with Github
        </button>
    )
    return session ? logado : deslogado;
}