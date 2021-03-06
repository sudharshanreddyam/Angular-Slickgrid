import { TranslateService } from '@ngx-translate/core';
import { CollectionService } from './../services/collection.service';
import { Column, Filter, FilterArguments, FilterCallback, GridOption, MultipleSelectOption, SearchTerm } from './../models/index';
export declare class SingleSelectFilter implements Filter {
    private collectionService;
    private translate;
    $filterElm: any;
    grid: any;
    gridOptions: GridOption;
    searchTerm: SearchTerm;
    columnDef: Column;
    callback: FilterCallback;
    defaultOptions: MultipleSelectOption;
    isFilled: boolean;
    labelName: string;
    valueName: string;
    enableTranslateLabel: boolean;
    constructor(collectionService: CollectionService, translate: TranslateService);
    /**
     * Initialize the Filter
     */
    init(args: FilterArguments): void;
    /**
     * Clear the filter values
     */
    clear(triggerFilterChange?: boolean): void;
    /**
     * destroy the filter
     */
    destroy(): void;
    /**
     * Set value(s) on the DOM element
     */
    setValues(values: SearchTerm | SearchTerm[]): void;
    /**
     * Create the HTML template as a string
     */
    private buildTemplateHtmlString(optionCollection);
    /**
     * From the html template string, create a DOM element
     * Subscribe to the onClose event and run the callback when that happens
     * @param filterTemplate
     */
    private createDomElement(filterTemplate);
}
