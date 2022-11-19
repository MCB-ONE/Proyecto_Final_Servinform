import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { TableColumn } from '@app/models/frontend';


@Component({
  selector: 'app-empresas-table',
  templateUrl: './empresas-table.component.html',
  styleUrls: ['./empresas-table.component.scss']
})
export class EmpresasTableComponent implements OnInit {
  public tableDataSource = new MatTableDataSource<any>([]);
  public displayedColumns !: string[];

  @ViewChild(MatPaginator, {static: false}) matPaginator!: MatPaginator | null;
  @ViewChild(MatSort, {static: true}) matSort!: MatSort;


  @Input() isPageable = false;
  @Input() isSortable = false;
  @Input() isFilterable = false;
  @Input() tableColumns: TableColumn[] = []
  @Input() rowActionIcon: string ='';
  @Input() paginationSizes: number[] = [5, 10, 15];
  @Input() defaultPageSize = this.paginationSizes[1];

  @Output() selectEmpresa: EventEmitter<string>
  @Output() removeEmpresa: EventEmitter<string>

  // this property needs to have a setter, to dynamically get changes from parent component
  @Input() tableData!: any[]

  constructor() {
    this.selectEmpresa = new EventEmitter();
    this.removeEmpresa = new EventEmitter();
   }

  ngOnInit(): void {
    const columnNames = this.tableColumns.map((tableColumn: TableColumn) => tableColumn.name);

    if (this.rowActionIcon) {
      this.displayedColumns = [this.rowActionIcon, ...columnNames]
    } else {
      this.displayedColumns = columnNames;
    }

    this.tableDataSource.data = this.tableData;


  }

  // we need this, in order to make pagination work with *ngIf
  ngAfterViewInit(): void {
    this.tableDataSource.paginator = this.matPaginator;
    this.tableDataSource.sort = this.matSort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
  }

  sortTable(sortParameters: Sort) {
    sortParameters.active = this.tableColumns.find(c => c.name == sortParameters.active)?.dataKey!
  }

  onSelected(empresaId: string ){
    this.selectEmpresa.emit(empresaId);
  }

  onRemove(empresaId: string ){
    this.removeEmpresa.emit(empresaId);
  }

}
