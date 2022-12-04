import { BaseEntity } from "../baseEntity";
import { Cliente } from "../cliente";
import { Empresa } from "../empresa";
import { Direccion } from "../direccion";


type EmpresaFactura = Omit<Empresa, 'clientes' |'direcciones'>;
type ClienteFactura = Omit<Cliente, 'direcciones'>;

export interface Factura extends BaseEntity{
  numero: string;
  fechaExpedicion: string;
  subtotal: number;
  iva: number;
  empresa: EmpresaFactura;
  direccionEmpresa: Direccion;
  cliente: ClienteFactura;
  direccionCliente: Direccion;
}
