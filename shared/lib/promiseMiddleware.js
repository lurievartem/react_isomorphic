export default function promiseMiddleware() {
    return next => action => {
        const { promise, type, successFn, errorFn, ...rest } = action;

        if (!promise) return next(action);

        const REQUEST = type;
        const SUCCESS = type + '_SUCCESS';
        const FAILURE = type + '_FAILURE';

        next({ ...rest, type: REQUEST });

        return promise
            .then(res => {
                if(successFn && typeof successFn == "function"){
                    successFn(res);
                }

                next({ ...rest, res, type: SUCCESS });
                console.log('promiseMiddleware success: ', res);
                return true;
            })
            .catch(error => {
                if(errorFn && typeof errorFn == "function"){
                    errorFn(error);
                }

                next({ ...rest, error, type: FAILURE });
                console.log('promiseMiddleware failure: ', error);
                return false;
            });
    };
}