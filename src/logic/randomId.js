function randomStr(strLength) {
    const chars = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'];
    return [...Array(strLength)]
        .map(() => chars[Math.trunc(Math.random() * chars.length)])
        .join('');
}

function randomId(options = {}) {
    const now = String(Date.now());
    const middlePos = Math.ceil(now.length / 2);
    let output = `${now.substr(0, middlePos)}-${randomStr(6)}-${now.substr(middlePos)}`;

    if (options.prefix) output = `${options.prefix}-${output}`;

    return output;
}

export default randomId;