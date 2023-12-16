'use strict'

export class Database{
	constructor(tableName){
		this.tableName = tableName;
	}

	store(data){
		let rows = this._readFileJson();
		let newRow = {...data,id:Date.now()}
		rows.push(newRow);

		this._writeFileJson(rows);
		return newRow;
	}
	delete(id){
		let rows = this._readFileJson();
		const newRows = rows.filter(item => item.id != id);
		this._writeFileJson(newRows);
		return rows.lengeth != newRows.length;
	}
	find(id) {
		let rows = this._readFileJson();
		const foundRow = rows.find(item => item.id == id);
		return foundRow;
	}
	

	list(){
		return this._readFileJson();
	}

	_readFileJson(){
		const contextFile = localStorage.getItem(this.tableName)||'[]';
		return JSON.parse(contextFile);
	}
	_writeFileJson(data){
		localStorage.setItem(this.tableName,JSON.stringify(data));
	}
}