export const CREATE_USER = 'CREATE_USER';

export function save(data){
    return{
        type: CREATE_USER,
        data: data
    }
};