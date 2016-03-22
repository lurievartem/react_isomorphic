export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';


export function showModal(modalType, params){
    return {
        type: SHOW_MODAL,
        modalType: modalType,
        modalProps: params
    }
}

export function hideModal(){
    return {
        type: HIDE_MODAL
    }
}