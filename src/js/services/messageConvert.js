import i18n from "../i18n/i18n";

function messageConvert(message){
    if(message == null) return  null;
    return i18n.exists(message) ? i18n.t(message) : message;
}
export default  messageConvert;
