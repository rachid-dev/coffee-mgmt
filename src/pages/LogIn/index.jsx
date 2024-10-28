import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { userDataContext } from '../../utils/Context'
import HomeHeader from '../../components/HomeHeader'
import { login } from '../../services/users.services'



const LogIn = () => {

    const {setUserData} = useContext(userDataContext)
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    function handleLogin(e) {
        e.preventDefault()
        login(username, password)
        .then(data => {
            if (data.userId){
                setUserData({...data, isLoggedIn : true})
                sessionStorage.setItem('userData', JSON.stringify({...data, isLoggedIn : true}));
                navigate('/')
            }
            else{
                setErrorMessage(data.error)
            }
            
        })
        .catch(err => console.log(err))
    }
    return(
        <div>
          <HomeHeader/>
          <div className="container mt-5">
              <div className="row">
                <div className="col-4 offset-4">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title text-center">Page de connexion</h3>
                      <p className="text-center">{}</p>
                      <p className="text-center fst-italic">
                        <small>
                          Utilisez les identifiants 'admin' & 'admin' pour vous
                          connecter.
                        </small>
                      </p>
            
                      <form onSubmit={handleLogin} >
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
                            Se connecter
                          </button>
                        </div>
                        <div className="my-3">
                          <Link to= '/signup'> Vous n'avez pas de compte ? </Link>
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

export default LogIn;