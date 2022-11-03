import {IItem, IControlItem, IIcon} from '@app/models/frontend';
export {IItem, IControlItem} from '@app/models/frontend';

export interface Dictionaries{
  empresas: Dictionary;
  clientes: Dictionary;
  direcciones: Dictionary;
}

export interface Dictionary{
  Items: IItem[];
  controltItems: IControlItem[];
}
