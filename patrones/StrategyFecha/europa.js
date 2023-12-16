import { FormatoFecha } from "./strategyFecha.js";

export class Europa extends FormatoFecha{
    constructor(){
        super()
    }
    obtenerFecha(){
        const fecha = new Date();
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;
        const anio = fecha.getFullYear(); 
        const formatoEuropa = `${anio}/${mes < 10 ? '0' : ''}${mes}/${dia < 10 ? '0' : ''}${dia}`;
        return formatoEuropa;
    }

}