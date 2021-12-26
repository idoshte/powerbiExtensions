
"use strict";

import "core-js/stable";
import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import DataView = powerbi.DataView;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;
import $ from "jquery"

import { VisualSettings } from "./settings";
export class Visual implements IVisual {
    private target: HTMLElement;
    private updateCount: number;
    private settings: VisualSettings;
    private textNode: Text;

    constructor(options: VisualConstructorOptions) {
        console.log('Visual constructor', options);

        this.target = options.element;
        this.updateCount = 1;
            this.updateCount= this.updateCount+3;
            $(this.target).html('<p>hi there my darling: '+ this.updateCount.toString()+'</p>')
    }

    public update(options: VisualUpdateOptions) {
        console.log('Visual update', options);
        this.updateCount= this.updateCount+1;
        this.target.innerHTML='<p>hi there my darling: '+ this.updateCount.toString()+'</p>'
        
        
    }

}