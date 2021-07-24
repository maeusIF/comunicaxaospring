import axios from "axios";

const urlbase = "http://localhost:8080/usuario";



class UsuarioServicos{
    getUsuario(){
    return axios.get(urlbase + "/all");
    }
    createUsuario(usuario){

        return axios.post(urlbase +"/adduser",usuario);

    }
    getUsuarioById(id){
        return axios.get(urlbase + "/locate_user/"+id);
    }
    editUsuario(usuario){
        console.log(usuario)
        return axios.put(urlbase +"/user/"+usuario.id_bike2,usuario);
    }
    deleteUsuario(id){
        return axios.delete(urlbase + "/delete_user/"+id);
    }

}

export default new UsuarioServicos();