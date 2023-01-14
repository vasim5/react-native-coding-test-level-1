import moment from "moment/moment"

export const Utils = {
    formateDate(date, format = "DD MMM yyyy") {
        return moment(date).format(format);
    },
    validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
    isContainsLetterOnly(value) {
        let re = /^[A-Za-z]+$/;
        return re.test(String(value).toLowerCase());
    },
}