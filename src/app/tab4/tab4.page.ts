import { Component, OnInit } from '@angular/core';
import { Afiliado } from '../interfaces/afiliado';
import { HttpClient } from '@angular/common/http';
import { AfiliadoServService } from '../afiliado-serv.service';
import { Trabajo } from '../interfaces/trabajos';
import { ActivatedRoute, Router } from '@angular/router';
import { TrabajoServService } from '../trabajo-serv.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  trabajo: Trabajo = {
    fecha: '',
    turno: '',
    afiliado: '',
    tarea: '',
  };

  afiliadoser: Afiliado[] = [];
  tareas: String[] = [
    'Entregar folletos',
    'Pegar carteles',
    'Militar las calles',
  ];

  constructor(
    private afiliadoservice: AfiliadoServService,
    private activateroute: ActivatedRoute,
    private router: Router,
    private trabajoServ: TrabajoServService
  ) {}

  ngOnInit() {
    this.afiliadoservice.getAfiliado().subscribe((respuesta) => {
      this.afiliadoser = respuesta;
    });
    this.activateroute.params
      .pipe(switchMap(({ id }) => this.trabajoServ.getTrabajoPorId(id)))
      .subscribe((trabajo) => (this.trabajo = trabajo));
  }

  onSubmit() {
    if (this.trabajo.afiliado.trim().length === 0) {
      return;
    }
    // actualizar
    if (this.trabajo.id) {
      console.log(this.trabajo);
      this.trabajoServ
        .actualizarTrabajo(this.trabajo)
        .subscribe((trabajo) => console.log('actualizando', trabajo));
      this.router.navigate(['tabs/tab1']);
    } else {
      this.trabajoServ.agregarTrabajo(this.trabajo).subscribe((resp) => {
        console.log('respuesta', resp);
        this.router.navigate(['tabs/tab1']);
      });
    }
  }
  borrar() {
    if (!this.trabajo.id) {
      return; // No hay cliente para eliminar
    } else {
      this.trabajoServ.eliminarTrabajo(this.trabajo.id!).subscribe(
        (resp) => {
          console.log('trabajo eliminado', resp);
          console.log(`Eliminando trabajo con ID: ${this.trabajo.id}`);

          this.router.navigate(['tabs/tab1']); // Redirigir después de eliminar
        },
        (error) => {
          console.error('Error al eliminar el trabajo', error);
        }
      );
    }
  }
}
