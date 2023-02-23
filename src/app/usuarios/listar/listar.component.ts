import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios: Usuario[]=[];
  
  constructor(private service:UsuarioService) { }

  ngOnInit(): void {

    this.service.getUsuarios().subscribe(users =>{
      this.usuarios=users;
      console.log(users);
    });
  }

}
