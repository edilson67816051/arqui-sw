'use strict'
import {MColor} from "../model/MColor.js"
import {VColor} from "../view/VColor.js"

export class CColor{
	view = new VColor();
	model = new MColor();
	constructor(){
		this.initListener();
	}

	save(){
		const data = this.view.getFormData();
		this.model.setData(data);
		const rows = this.model.save();



		this.view.setFormData(rows);
		this.list();
	}
	delete(){
		const id = this.view.getId();
		console.log(id);
		this.model.delete(id);
		this.list();
	}


	list(){
		const table = this.model.list();
		this.view.setTable(table);
	}

	create(){
		this.view.clearFormData();
	}



	initListener(){
		this.view.btnCreate.addEventListener('click',()=>{
			this.create();
		})
		this.view.btnSave.addEventListener('click',()=>{
			this.save();
		})

		this.view.btnList.addEventListener('click',()=>{
			this.list();
		})

		this.view.btnDelete.addEventListener('click',()=>{
			this.delete();
		})


	}
}
