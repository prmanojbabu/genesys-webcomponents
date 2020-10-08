export interface GuxTableColumnResizeState {
  resizableColumn: HTMLElement;
  resizableColumnInitialWidth: number;
  columnResizeMouseStartX: number;
}

export interface GuxTableSortState {
  columnName: string;
  sortDirection: string;
}

export interface GuxTableSelectedState {
  rowValues: string[];
  actionType: 'selected' | 'unselected';
}
