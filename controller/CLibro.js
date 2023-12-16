'use strict'
import {MLibro} from "../model/MLibro.js"
import {MColor} from "../model/MColor.js"
import {VLibro} from "../view/VLibro.js"
import { ContextFecha } from "../patrones/StrategyFecha/contextFecha.js";

import { EstadoUnidos } from "../patrones/StrategyFecha/estadounido.js";
import { Europa } from "../patrones/StrategyFecha/europa.js";
import { TemplateMehod } from "../patrones/template/templatemethod.js";

export class CLibro extends TemplateMehod{
	view = new VLibro();
	model = new MLibro();

	contextoFecha = new ContextFecha();

	Colormodel = new MColor();
	constructor(){
		super()
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
		//console.log(id);
		this.model.delete(id);
		this.list();
	}

	getName(id){
		return this.Colormodel.find(id);
	}

	list(){

		const table = this.model.list();

		let newtable = [];
		table.forEach(element => {
			newtable.push({
				id: element.id,
				name: element.name,
				fecha: element.fecha,
				autor:element.autor,
				id_color: this.Colormodel.find(element.id_color).name
			});
		});
		//console.log(newtable);

		this.view.setTable(newtable);
		const colors = this.Colormodel.list();
		this.view.setColor(colors);

	}

	create(){
		this.view.clearFormData();
	}

	mostraFecha(pais){
		if(pais=='estadosunidos'){
			this.contextoFecha.setStrategy(new EstadoUnidos());
		}
		if(pais=='europa'){
			this.contextoFecha.setStrategy(new Europa());
		}

		this.view.outputfecha.value = this.contextoFecha.obtenerFecha();
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

			this.template();
		})

		
		this.view.inputPais.addEventListener('change', (e)=>{
			this.mostraFecha(e.target.value)
		})
	}

	mostrar(){
		console.log('alumno')
	}
}
