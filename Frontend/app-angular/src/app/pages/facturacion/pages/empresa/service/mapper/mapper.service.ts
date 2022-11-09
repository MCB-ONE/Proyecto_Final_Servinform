import { Injectable } from "@angular/core";
import { EmpresaForm, EmpresaResponse } from "@app/store/empresa/empresa.models";

@Injectable()
export class MapperService {
  constructor(){}

  empresaToForm(empresa: EmpresaResponse): EmpresaForm{
    const empresaForm: EmpresaForm = {
      id: empresa.id,
      emailUsuario: empresa.emailUsuario,
      nombre: empresa.nombre,
      nif: empresa.nif,
      logo: empresa.logo,
    }

    return empresaForm;
  }
}
