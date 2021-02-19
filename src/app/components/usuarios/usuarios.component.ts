import { Component } from "@angular/core";
// import { Producto } from "./producto";

@Component({
  selector: "usuariosComponent",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"]
})
export class UsuariosComponent {
  public titulo: string;
  // public producto: Producto;

  constructor() {
    this.titulo = "Usuarios";
    // this.producto = new Producto("Helado de fresa", 189, "Helados", true);
  }
}
