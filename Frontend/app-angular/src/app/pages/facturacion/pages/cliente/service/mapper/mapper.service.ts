import { Injectable } from "@angular/core";
import { ClienteResponse } from "@app/store/cliente/cliente.models";
import { ClienteForm } from "../../pages/update-cliente/update-cliente.component";

@Injectable()
export class MapperService {
  constructor(){}

  clienteToForm(cliente: ClienteResponse): ClienteForm{
    const clienteForm: ClienteForm = {
      id: cliente.id,
      empresaId: cliente.empresaId,
      nombre: cliente.nombre,
      nif: cliente.nif,
      logo: cliente.logo,
    }

    return clienteForm;
  }

}
