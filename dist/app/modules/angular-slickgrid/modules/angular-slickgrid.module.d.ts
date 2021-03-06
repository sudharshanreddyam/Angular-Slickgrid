import { SharedService } from './../services/shared.service';
import { CollectionService } from './../services/collection.service';
import { ControlAndPluginService } from '../services/controlAndPlugin.service';
import { ExportService } from '../services/export.service';
import { FilterService } from './../services/filter.service';
import { GraphqlService } from './../services/graphql.service';
import { GridOdataService } from './../services/grid-odata.service';
import { GridOption } from './../models/gridOption.interface';
import { GridEventService } from './../services/gridEvent.service';
import { GridExtraService } from './../services/gridExtra.service';
import { GridStateService } from './../services/gridState.service';
import { GroupingAndColspanService } from './../services/groupingAndColspan.service';
import { OdataService } from './../services/odata.service';
import { ResizerService } from './../services/resizer.service';
import { SortService } from './../services/sort.service';
export declare class AngularSlickgridModule {
    static forRoot(config?: GridOption): {
        ngModule: typeof AngularSlickgridModule;
        providers: (typeof CollectionService | typeof FilterService | typeof ExportService | typeof SharedService | typeof SortService | typeof ControlAndPluginService | typeof GraphqlService | typeof OdataService | typeof GridOdataService | typeof GridEventService | typeof GridExtraService | typeof GridStateService | typeof GroupingAndColspanService | typeof ResizerService | {
            provide: string;
            useValue: GridOption;
        })[];
    };
}
