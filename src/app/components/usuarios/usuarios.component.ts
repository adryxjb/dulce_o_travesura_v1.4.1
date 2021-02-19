import { Component, OnInit } from "@angular/core";
// import { Producto } from "./producto";

@Component({
  selector: "usuariosComponent",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"]
})
export class UsuariosComponent implements OnInit {
  public titulo: string;
  // public producto: Producto;

  constructor() {
    this.titulo = "Usuarios";
  }

  ngOnInit() {}
}
