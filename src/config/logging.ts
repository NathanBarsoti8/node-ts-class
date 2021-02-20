const getTime = (): string => {
    return new Date().toISOString();
};

const info = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.log(`[${getTime()}] [INFO] [${namespace}] ${message}`, object);
    } else {
        console.log(`[${getTime()}] [INFO] [${namespace}] ${message}`);
    }
};

const warn = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.warn(`[${getTime()}] [WARN] [${namespace}] ${message}`, object);
    } else {
        console.warn(`[${getTime()}] [WARN] [${namespace}] ${message}`);
    }
};

const error = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.log(`[${getTime()}] [ERROR] [${namespace}] ${message}`, object);
    } else {
        console.log(`[${getTime()}] [ERROR] [${namespace}] ${message}`);
    }
};

const debug = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.log(`[${getTime()}] [DEBUG] [${namespace}] ${message}`, object);
    } else {
        console.log(`[${getTime()}] [DEBUG] [${namespace}] ${message}`);
    }
};

export default {
    info,
    warn,
    error,
    debug
};
