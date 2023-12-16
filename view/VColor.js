'use strict'

export class VColor{

	btnCreate = document.getElementById('btnCreate');
	btnSave = document.getElementById('btnSave');
	btnDelete = document.getElementById('btnDelete');
	btnList = document.getElementById('btnList');

	getId(){
		return document.getElementById('id').value;
	}

	getFormData(){
		return {
			id: document.getElementById('id').value,
			name:document.getElementById('name').value,
		}	
	}
	setFormData(data){
		document.getElementById('id').value = data.id;
		document.getElementById('name').value= data.name;
	}

	clearFormData(){
		document.getElementById('id').value = '';
		document.getElementById('name').value= '';
	}

	setTable(rows){
		let tbody = ``;


		rows.forEach(row =>{
			tbody += `
			<tr>
				<td>${row.id}</td>
				<td>${row.name}</td>
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
			</tr>
		</thead>
			${tbody}
		</table>

		`
		document.getElementById('table').innerHTML = table;
	}
	

}