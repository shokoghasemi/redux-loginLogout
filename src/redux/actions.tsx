export const Log_in = "Log_in";
export const Log_out = "Log_out";

export const Login = () => {
    return {
        type: Log_in,
        payload: true
    }
}

export const Logout = () => {
    return {
        type: Log_out,
        payload: false
    }
}