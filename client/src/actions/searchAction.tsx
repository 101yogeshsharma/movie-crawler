export const search_by_key = (payload:any) => {
    return {type: 'SEARCH_BY_KEYWORD', payload}
}

export const search_by_id = (payload:any) => {
    return {type: 'SEARCH_BY_ID', payload}
}