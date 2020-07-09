
const uniqueFilter = (filters_groups)=>{
    let fg = [];
    let filters=[];
    if (filters_groups) {
        for(let j=0; j< filters_groups.length; j++ ) {
            for (let i = 0; i < filters_groups[j].filters.length; i++) {
                let index = filters.findIndex(
                    (item) => item.key === filters_groups[j].filters[i].key && item.op === filters_groups[j].filters[i].op)

                if (!(index > -1 && filters[index] && filters[index].op === filters_groups[j].filters[i].op)) {
                    filters.push(filters_groups[j].filters[i])
                }
            }
        }
        fg=[{filters}]
    }

    return fg.length > 0 &&  filters.length > 0 ? fg : undefined;
}

const checkFilter = (filters, newFilters)=>{
    if (newFilters && newFilters[0]) {
        for (let i = 0; i < newFilters.length; i++) {
            let index = filters.findIndex((item) => item.key === newFilters[i].key)
            if (index > -1 && filters[index].op === newFilters[i].op) {
                filters[index] = newFilters[i]
            } else {
                filters.push(newFilters[i])
            }
        }
    }
    return filters;
}

const objectAssign = (target = {}, source1 = undefined, source2 = undefined, source3 = undefined, source4 = undefined, source5 = undefined, source6 = undefined) => {
    let data = Object.assign({}, target)
    if (source1 || source2 || source3 || source4 || source5 || source6) {
        if (source1) {
            let keys = Object.keys(source1);
            keys.map((key) => {
                if (data[key]) {
                    if (key === 'filter_groups' && data[key][0] && source1.filter_groups[0]) {
                        let filters = data.filter_groups[0].filters;
                        let newFilters = source1.filter_groups[0].filters
                        data.filter_groups[0].filters = checkFilter(filters,newFilters);

                    } else {
                        if(key !== 'filter_groups' || (key === 'filter_groups' && source1[key] && source1[key][0] )){
                            data[key] = source1[key];
                        }
                    }
                } else {
                    data[key] = source1[key];
                }

                if(key==='filter_groups' && data['filter_groups']){
                    if(data['filter_groups'][0] && data['filter_groups'][0]['filters']){
                        data[key] = uniqueFilter(data['filter_groups']);
                    } else {
                        delete data[key];
                    }
                }
            })
        }
        data = objectAssign(app._.cloneDeep(data), source2, source3, source4, source5, source6)
    }
    return data
}

export default {
    assign: (target = {}, source1 = undefined, source2 = undefined, source3 = undefined, source4 = undefined, source5 = undefined, source6 = undefined) => {
        return objectAssign(target, source1, source2, source3, source4, source5, source6)
    },
    addFilter: (params = {}, newFilter = {}) => {
        if (!newFilter || !newFilter.key)
            return params;
        if (!params || !params.filter_groups){
            let _params = {}
            if(newFilter.value !== '' && newFilter.value !== undefined){
                _params = {filter_groups: [{filters: [newFilter]}]}
            }
            return {...params, ..._params};
        }
        let check = false;

        params.filter_groups.map(filterGroup => {
            if (filterGroup.filters) {
                filterGroup.filters.map((filter, index) => {
                    if (filter.key === newFilter.key && filter.op === newFilter.op) {
                        if(newFilter.value !== '' && newFilter.value !== undefined){
                            filterGroup.filters[index] = newFilter;
                        } else {
                            filterGroup.filters.splice(index, 1);
                        }
                        check = true;
                    }
                })
            }
        })

        if (!check && newFilter.value !== '' && newFilter.value !== undefined ) {
            params.filter_groups.push({filters: [newFilter]})
        }


        return params;
    },
    addParam: (params = {}, newParam = {}) => {
        if (!newParam || !newParam.key)
            return params;
        let _param = {};
        _param[newParam.key] = newParam.value;
        if (!params) {
            return {...params, ..._param};
        }
        params[newParam.key] = newParam.value;
        if (newParam.value) {
            return params;
        } else {
            delete params[newParam.key];

            return params;
        }
    }
}
