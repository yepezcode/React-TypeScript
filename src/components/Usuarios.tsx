import { useUsuarios } from "../Hooks/useUsuarios"
import { Usuario } from "../interfaces/reqRes";


export const Usuarios = () => {
 
    const { usuario, paginaAnterior, paginaSiguiente } = useUsuarios();


    const renderItem = ( usuario : Usuario ) => {
        return (
            <tr key={ usuario.id.toString() }>
                 <td>
                     <img 
                        src={ usuario.avatar }
                        alt={ usuario.first_name }
                        style={{ width: 35, borderRadius: 100}}
                     />
                 </td>
                 <td> { usuario.first_name } { usuario.last_name }  </td>
                 <td>{ usuario.email }</td>        
            </tr>
        )
    }

    return ( 
        <>
            <h3>Usuarios:</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                       {
                           usuario.map(usuario => renderItem(usuario) )
                       }
                </tbody>
            </table>
            <button
                className="btn btn-primary"
                onClick={ paginaAnterior }
            >
                Anterior
            </button>

            &nbsp;
            <button
                className="btn btn-primary"
                onClick={ paginaSiguiente }
            >
                Siguiente
            </button>

        </>
    )
}
