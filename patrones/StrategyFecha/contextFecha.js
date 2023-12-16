import { FormatoFecha } from "./strategyFecha.js";

export class ContextFecha {
    strategy = new FormatoFecha()
    setStrategy(strategy){
        this.strategy = strategy;
    }

    obtenerFecha(){
        return this.strategy.obtenerFecha();
    }
}