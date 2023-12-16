import { FormatoFecha } from "./strategyFecha.js";

export class EstadoUnidos extends FormatoFecha{
    constructor(){
        super()
    }

    obtenerFecha(){
        const fecha = new Date();
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;
        const anio = fecha.getFullYear(); // Formatear la fecha según el formato de Europa (DD-MM-YYYY)
        const formatoEuropa = `${dia < 10 ? '0' : ''}${dia}-${mes < 10 ? '0' : ''}${mes}-${anio}`;
        return formatoEuropa;
    }
}