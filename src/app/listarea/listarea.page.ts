import { Component, OnInit } from '@angular/core';
import { TrabajoServService } from '../trabajo-serv.service';

@Component({
  selector: 'app-listarea',
  templateUrl: './listarea.page.html',
  styleUrls: ['./listarea.page.scss'],
})
export class ListareaPage implements OnInit {

  lista: any[] = [];
  results: any[] = [];

  constructor(private trabajosService:TrabajoServService) { }

  ngOnInit():void {
    this.trabajosService.getTrabajo().subscribe((lista) => {
      this.lista = lista;
      this.results = lista;
    });
  }
  handleInput(event: any) {
    const query = (event.detail.value || '').toLowerCase().trim();
  
    // Dividir la consulta en varias palabras (keywords)
    const keywords: string[] = query.split(' ');
  
    // Filtrar la lista en base a las palabras clave
    this.results = this.lista.filter((item) => {
      // Verificar si todas las palabras clave están presentes en alguna de las propiedades
      return keywords.every((keyword: string) =>
        item.turno.toLowerCase().includes(keyword) ||
        item.afiliado.toLowerCase().includes(keyword) ||
        item.tarea.toLowerCase().includes(keyword)
      );
    });
  }

}
