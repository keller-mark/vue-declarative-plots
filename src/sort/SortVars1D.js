import AbstractSortVars from "./AbstractSortVars.js";

/*
Think of SortBy with a 1D "on" like this:
{
    'data': 'exposures_data', 
    'on': { 
        'type': '1D', 
        'variables': ["signature"]
    }
}
*/

export default class SortVars1D extends AbstractSortVars {
    /**
     * Create a SortVars1D object (can be passed to on= param of SortBy constructor).
     * @param {array} variables Array of variable scale key strings.
     */
    constructor(variables) {
        super();
        this._variables = variables;
    }

    /**
     * The variables on which to sort.
     * @returns {array} Array of variable scale key strings.
     */
    get variables() {
        return this._variables;
    }
}