export const Log_in = "Log_in";
export const Log_out = "Log_out";

export const Login = () => {
    console.log('kk')
    return {
        type: Log_in,
        value: true
    }
}

export const Logout = () => {
    return {
        type: Log_out,
        value: false
    }
}