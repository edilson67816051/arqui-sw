'use strict'

export class VLibro{

	btnCreate = document.getElementById('btnCreate');
	btnSave = document.getElementById('btnSave');
	btnDelete = document.getElementById('btnDelete');
	btnList = document.getElementById('btnList');

	inputPais = document.getElementById("pais");
	outputfecha = document.getElementById("fechanacimiento");

	getId(){
		return document.getElementById('id').value;
	}

	getFormData(){
		return {
			id: document.getElementById('id').value,
			name:document.getElementById('name').value,
			fecha: document.getElementById('fecha').value,
			autor:document.getElementById('autor').value,
			id_color:document.getElementById('color').value,
		}	
	}
	setFormData(data){
		document.getElementById('id').value = data.id;
		document.getElementById('name').value= data.name;
		document.getElementById('fecha').value = data.fecha;
		document.getElementById('autor').value= data.autor;
		document.getElementById('color').value= data.id_color;
	}

	clearFormData(){
		document.getElementById('id').value = '';
		document.getElementById('name').value= '';
		document.getElementById('fecha').value = '';
		document.getElementById('autor').value= '';
		document.getElementById('color').value= '';
	}

	setColor(rows) {
    let options = ''

	    rows.forEach(row => {
	      options += `<option value="${row.id}">
	        ${row.name}
	      </option>`
	    })

	    document.getElementById('color').innerHTML = options
  	}

	setTable(rows){
		let tbody = ``;


		rows.forEach(row =>{
			tbody += `
			<tr>
				<td>${row.id}</td>
				<td>${row.name}</td>
				<td>${row.fecha}</td>
				<td>${row.autor}</td>
				<td>${row.id_color}</td>
			</tr>
			`
		}

		)

		let table =`
		<table>
		<thead>
			<tr>			
				<th>Id</th>
				<th>Nombre</th>
				<th>Fecha</th>
				<th>Autor</th>
				<th>IdColor</th>
			</tr>
		</thead>
			${tbody}
		</table>

		`
		document.getElementById('table').innerHTML = table;
	}
	

}