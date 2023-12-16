'use strict'
import {Database} from "../utils/database.js"
export class MColor {
	constructor(){
		this.id = 0;
		this.name = '';
		this.database = new Database('Color');
	}

	setData(data){
		this.id = data.id;
		this.name = data.name;
	}
	save(){
		const rows = {
			id: this.id,
			name:this.name,
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