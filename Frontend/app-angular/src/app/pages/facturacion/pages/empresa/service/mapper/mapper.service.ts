import { Injectable } from "@angular/core";
import { DireccionForm, DireccionResponse } from "@app/store/direccion/direccion.models";
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

  direccionToForm(direccion: DireccionResponse): DireccionForm{
    const direccionForm: DireccionForm = {
      id: direccion.id,
      empresaId: direccion.empresaId,
      calle: direccion.calle,
      numero: direccion.numero,
      codigoPostal: direccion.codigoPostal,
      ciudad: direccion.ciudad,
      provincia: direccion.provincia,
      pais: direccion.pais,
      telefono: direccion.telefono,
      email: direccion.email,
      web: direccion.web
    }

    return direccionForm;
  }

}
