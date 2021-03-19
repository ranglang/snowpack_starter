
export const Logger = {
    info: (msg: string, tag="") => {
        console.info(`[${ new Date().toUTCString() } ${tag}]: ${msg}`);
    },
    error: (msg: string, tag="") => {
        console.info(`[${ new Date().toUTCString() } ${tag}]: ${msg}`);
    }
};