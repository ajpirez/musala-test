module.exports = {
    validateIpv4Adress
}

function validateIpv4Adress(str) {
    let istrue = str.split('.');
    if (istrue.length != 4)
        return false;
    for (i in istrue) {
        if (!/^\d+$/g.test(istrue[i])
            || +istrue[i] > 255
            || +istrue[i] < 0
            || /^[0][0-9]{1,2}/.test(istrue[i]))
            return false;
    }
    return true
}