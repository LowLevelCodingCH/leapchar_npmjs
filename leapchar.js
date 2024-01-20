module.exports = startchar, endchar, stdout, exit, exec, replacechar, addchar;
function startchar (str, ch) {
    str = ch + str;
    return str;
}
function endchar (str,ch) {
    str = str + ch;
    return str;
}
function stdout(str, file = "log") {
    eval("console." + file + "\"" + str + "\"" + ";");
}
function exit(value = 0) {
    return value;
}
function exec(jsruncode) {
    eval(jsruncode)
}
function replacechar(char, str, place) {
    str = String();
    let charray = str.split('')
    charray[place] == char;
    endstr = charray.toString();
    return endstr;
}
function addchar(char, str, place) {
    str = String();
    let charray = str.split('')
    charray.splice(place, 1, char);
    endstr = charray.toString();
    return endstr;
}