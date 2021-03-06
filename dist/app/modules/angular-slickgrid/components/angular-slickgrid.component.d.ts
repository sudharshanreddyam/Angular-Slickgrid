import 'jquery-ui-dist/jquery-ui';
import 'slickgrid/lib/jquery.event.drag-2.3.0';
import 'slickgrid/slick.core';
import 'slickgrid/slick.dataview';
import 'slickgrid/slick.grid';
import 'slickgrid/slick.dataview';
import 'slickgrid/slick.groupitemmetadataprovider';
import 'slickgrid/controls/slick.columnpicker';
import 'slickgrid/controls/slick.gridmenu';
import 'slickgrid/controls/slick.pager';
import 'slickgrid/plugins/slick.autotooltips';
import 'slickgrid/plugins/slick.cellexternalcopymanager';
import 'slickgrid/plugins/slick.cellrangedecorator';
import 'slickgrid/plugins/slick.cellrangeselector';
import 'slickgrid/plugins/slick.cellselectionmodel';
import 'slickgrid/plugins/slick.checkboxselectcolumn';
import 'slickgrid/plugins/slick.headerbuttons';
import 'slickgrid/plugins/slick.headermenu';
import 'slickgrid/plugins/slick.rowmovemanager';
import 'slickgrid/plugins/slick.rowselectionmodel';
import { AfterViewInit, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Column, GridOption, GridStateChange, Pagination } from './../models/index';
import { ControlAndPluginService } from './../services/controlAndPlugin.service';
import { ExportService } from './../services/export.service';
import { FilterService } from './../services/filter.service';
import { GridEventService } from './../services/gridEvent.service';
import { GridExtraService } from './../services/gridExtra.service';
import { GridStateService } from './../services/gridState.service';
import { GroupingAndColspanService } from './../services/groupingAndColspan.service';
import { ResizerService } from './../services/resizer.service';
import { SharedService } from '../services/shared.service';
import { SortService } from './../services/sort.service';
export declare class AngularSlickgridComponent implements AfterViewInit, OnDestroy, OnInit {
    private controlAndPluginService;
    private exportService;
    private filterService;
    private gridExtraService;
    private gridEventService;
    private gridStateService;
    private groupingAndColspanService;
    private resizer;
    private sharedService;
    private sortService;
    private translate;
    private forRootConfig;
    private _dataset;
    private _columnDefinitions;
    private _dataView;
    private _eventHandler;
    private _translateSubscriber;
    private _gridStateSubscriber;
    grid: any;
    gridPaginationOptions: GridOption;
    gridHeightString: string;
    gridWidthString: string;
    groupingDefinition: any;
    groupItemMetadataProvider: any;
    showPagination: boolean;
    isGridInitialized: boolean;
    onDataviewCreated: EventEmitter<any>;
    onGridCreated: EventEmitter<any>;
    onGridInitialized: EventEmitter<any>;
    onBeforeGridCreate: EventEmitter<boolean>;
    onBeforeGridDestroy: EventEmitter<any>;
    onAfterGridDestroyed: EventEmitter<boolean>;
    onGridStateServiceChanged: EventEmitter<GridStateChange>;
    gridId: string;
    gridOptions: GridOption;
    gridHeight: number;
    gridWidth: number;
    columnDefinitions: Column[];
    dataset: any[];
    constructor(controlAndPluginService: ControlAndPluginService, exportService: ExportService, filterService: FilterService, gridExtraService: GridExtraService, gridEventService: GridEventService, gridStateService: GridStateService, groupingAndColspanService: GroupingAndColspanService, resizer: ResizerService, sharedService: SharedService, sortService: SortService, translate: TranslateService, forRootConfig: GridOption);
    ngOnInit(): void;
    ngOnDestroy(): void;
    destroy(): void;
    ngAfterViewInit(): void;
    initialization(): void;
    /**
     * Define what our internal Post Process callback, it will execute internally after we get back result from the Process backend call
     * For now, this is GraphQL Service only feautre and it will basically refresh the Dataset & Pagination without having the user to create his own PostProcess every time
     */
    createBackendApiInternalPostProcessCallback(gridOptions: GridOption): void;
    attachDifferentHooks(grid: any, gridOptions: GridOption, dataView: any): void;
    attachBackendCallbackFunctions(gridOptions: GridOption): void;
    attachResizeHook(grid: any, options: GridOption): void;
    mergeGridOptions(gridOptions: any): GridOption;
    paginationChanged(pagination: Pagination): void;
    /**
     * When dataset changes, we need to refresh the entire grid UI & possibly resize it as well
     * @param dataset
     */
    refreshGridData(dataset: any[], totalCount?: number): void;
    updateColumnDefinitionsList(dynamicColumns: any): void;
    /** Toggle the filter row displayed on first row
     * @param isShowing
     */
    showHeaderRow(isShowing: boolean): boolean;
    /** Toggle the filter row displayed on first row */
    toggleHeaderRow(): boolean;
}
