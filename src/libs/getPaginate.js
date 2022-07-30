export function getPaginate(page, size){
    const limit = size ? +size : 10,
          offset = page ? page * limit : 0;

    return { limit, offset };
}