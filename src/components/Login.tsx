import { useEffect, useReducer } from "react"



interface AuthState {
    validando : boolean;
    token : string | null;
    username : string;
    nombre : string;
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type LoginPayload = {
    username : string;
    nombre : string;
}

type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload }


const authReducer = ( state : AuthState , action : AuthAction) : AuthState => {
    switch ( action.type ) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                username: '',                
            }
        
        case 'login': 
            return {
                validando: false,
                token: 'ABC123',
                nombre: action.payload.nombre,
                username: action.payload.username,
            }


        default:
            return state;   
    }
}

export const Login = () => {

    const [{ validando, nombre, token, username }, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout'})
        }, 1500)
        
    }, [])

    const login = () => {
        dispatch({  
            type: 'login',
            payload: {
                nombre: 'Mauricio',
                username: 'yepezaurio'
            }
        })
    }

    const logout = () => {
        dispatch({type: 'logout'})
    }

    if( validando ) {
        return(
            <>
                <h3>Login</h3>  

                <div className="alert alert-info">
                <span>Validando...</span>
                </div>
            </>
        )
    } 

    return (
        <>
         
          <h3>Login</h3>  

          {
              ( token ) 
                    ?<div className="alert alert-success"><span>Autenticado como: { nombre }</span></div>                    
                    :<div className="alert alert-danger"> <span>No autenticado </span></div>
          }
        

          {
              ( token )
              ?
              (
                <button
                className="btn btn-danger"
                onClick={ logout }
              >
                  Logout
              </button>
            
              )

              :
              (
                <button
                className="btn btn-primary"
                onClick={ login }
              >
                  Login
              </button>
              )
          }

        

     


        </>
    )
}
