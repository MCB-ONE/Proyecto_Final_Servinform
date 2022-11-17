import { BaseEntity } from "../baseEntity";
import { Direccion } from "../direccion";

export interface Cliente extends BaseEntity{
  nombre: string;
  nif: string;
  logo: string;
  empresaId: string;
  direcciones: Direccion[];
}
