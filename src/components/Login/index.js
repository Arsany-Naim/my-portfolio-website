import { signInWithGoogle } from '../../firebase';

const Login = () => {
    const handleSignIn = async () => {
        try {
            await signInWithGoogle();
        } catch (error) {
            alert('Firebase login is not configured yet. Add Firebase keys to enable dashboard sign-in.');
        }
    };

    return (
        <div className="dashboard">
            <button onClick={handleSignIn}>
                Sign in with google
            </button>
        </div>
    )
}

export default Login;