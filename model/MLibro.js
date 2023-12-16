'use strict'
import {Database} from "../utils/database.js"
export class MLibro {
	constructor(){
		this.id = 0;
		this.name = '';
		this.fecha = '';
		this.autor = '';
		this.id_color = '';
		this.database = new Database('Libro');
	}

	setData(data){
		this.id = data.id;
		this.name = data.name;
		this.fecha = data.fecha;
		this.autor = data.autor;
		this.id_color = data.id_color;
	}
	save(){
		const rows = {
			id: this.id,
			name:this.name,
			fecha: this.fecha,
			autor:this.autor,
			id_color:this.id_color
		}

		return this.database.store(rows);
	}
	delete(id){
		this.database.delete(id);
	}
	find(id){
		return this.database.find(id);
	}
	list(){
		return this.database.list();
	}

}