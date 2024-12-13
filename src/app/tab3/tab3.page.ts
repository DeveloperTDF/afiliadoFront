import { Component, OnInit } from '@angular/core';
import { AfiliadoServService } from '../afiliado-serv.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  lista: any[] = [];
  results: any[] = [];

  constructor(private afiliadoService: AfiliadoServService) {}

  ngOnInit(): void {
    this.afiliadoService.getAfiliado().subscribe((lista) => {
      this.lista = lista;
      this.results = lista;
    });
  }

  ionViewWillEnter() {
    this.afiliadoService.getAfiliado().subscribe((lista) => {
      this.lista = lista;
      this.results = lista;
    }); // Actualiza la lista de afiliados cada vez que la vista se muestra
  }

  
  handleInput(event: any) {
    const query = (event.detail.value || '').toLowerCase().trim();
  
    // Dividir la consulta en varias palabras (keywords)
    const keywords: string[] = query.split(' ');
  
    // Filtrar la lista en base a las palabras clave
    this.results = this.lista.filter((item) => {
      // Verificar si todas las palabras clave están presentes en alguna de las propiedades
      return keywords.every((keyword: string) =>
        item.nombre.toLowerCase().includes(keyword) ||
        item.direccion.toLowerCase().includes(keyword) ||
        item.telefono.toLowerCase().includes(keyword)
      );
    });
  }
  
  
  
}

