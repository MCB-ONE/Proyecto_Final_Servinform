import { Usuario } from "@app/models/backend";
export { Usuario as UsuarioResponse } from "@app/models/backend";



export interface EmailPasswordCredentials {
  email: string;
  password: string;
}

export type UsuarioCreateRequest = Omit<Usuario,'id' | 'token' | 'imagen' | 'admin'>;
