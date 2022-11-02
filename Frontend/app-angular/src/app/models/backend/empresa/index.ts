import { BaseEntity } from "../baseEntity";
import { Cliente } from "../cliente";
import { Direccion } from "../direccion";

export interface Empresa extends BaseEntity{
  emailUsuario: string;
  nombre: string;
  nif: string;
  logo: string;
  clientes: Cliente[];
  direcciones: Direccion[];
}
