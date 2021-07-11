import { Component } from '@angular/core';


@Component({
  selector: 'app-add-components',
  templateUrl: './add-components.component.html',
  styleUrls: ['./add-components.component.css']
})
export class AddComponentsComponent {

  task: string= "";
  items: string[] = [];
  primaryButton = "Adicionar";
  editable: boolean = false;
  editableIndex: number = 0;

  addTask() {
    if(this.editable === true){
      this.items.splice(this.editableIndex, 1, this.task);
      this.editable = false;
      this.task = '';
      this.primaryButton = "Adicionar"
    } else {
      if (this.task == '') {
        alert ("não é possivel inserir tarefas vazias")
      } else {
        this.items.push(this.task);
        this.task = '';
      }
    }
  }
  
  
  removeTask(item: string){
    this.items.splice(this.items.indexOf(item), 1);
  }

  editTask(item: string){
    this.editable = true;
    this.primaryButton = "Atualizar";
    this.task = item;
    this.editableIndex = this.items.indexOf(item);
  }
}

