function encrypt(key, message)
{
    return message
        .split('')
        .map(function(ch)
        {
            const i = key.indexOf(ch);
            if(i === -1)
            {
                return ch;
            }
            return (i + 1) % 2 === 0 ? key[i - 1] : key[i + 1];
        })
        .join('');
}

module.exports = encrypt;