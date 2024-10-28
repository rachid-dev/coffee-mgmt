import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import HomeHeader from '../../components/HomeHeader'
import { signup } from '../../services/users.services'


const SignUp = () => {

    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSignup(e) {
        e.preventDefault()
        signup(username, password)
        .then(data => {
            if (data?.message){
                navigate('/login')
                console.log(data)
            }
            else{
                setErrorMessage(data?.error)
            }
        })
    }
    
    return(
        <div>
            <HomeHeader/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4 offset-4">
                    <div className="card">
                        <div className="card-body">
                        <h3 className="card-title text-center">Page d'inscription</h3>
                
                        <form onSubmit={handleSignup} >
                            <div className="mb-3">
                            <label htmlFor="name" className="form-label">username</label>
                            <input
                                id="name"
                                type="text"
                                className="form-control"
                                autoComplete="username"
                                value= {username}
                                onChange= {(e) => setUsername(e.target.value)}
                                required
                            />
                            </div>
                            <div className="mb-3">
                            <label htmlFor="password" className="form-label">Mot de passe</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                className="form-control"
                                autoComplete="current-password"
                                value= {password}
                                onChange= {(e) => setPassword(e.target.value)}
                                required
                            />
                            </div>
                            <div className="mb-3">
                            <span>{ errorMessage }</span>
                            </div>
                            <div className="d-grid">
                            <button type="submit" className="btn btn-success">
                                S'inscrire
                            </button>
                            </div>
                            <div className="my-3">
                            <Link to= '/login'> Vous avez déjà un compte ? </Link>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignUp;

