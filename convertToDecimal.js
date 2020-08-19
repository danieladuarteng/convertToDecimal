const mappingXSystemForRomanSystem = [
    {
        name: 'kil',
        roman: 'I',
        value: 1
    },
    {
        name: 'jin',
        roman: 'V',
        value: 5
    },
    {
        name: 'pol',
        roman: 'X',
        value: 10
    },
    {
        name: 'kilow',
        roman: 'L',
        value: 50
    },
    {
        name: 'jij',
        roman: 'C',
        value: 100
    },
    {
        name: 'jinjin',
        roman: 'D',
        value: 500
    },
    {
        name: 'polsx',
        roman: 'M',
        value: 1000
    }
]

function convertToDecimal(value) {
    const separator = value.split(" ");
    let result = 0
    for (let i = 0; i < separator.length - 1; i++) {
        if (mappingXSystemForRomanSystem.find(e => e.name === separator[i]).value
            < mappingXSystemForRomanSystem.find(e => e.name === separator[i + 1]).value) {
            result -= mappingXSystemForRomanSystem.find(e => e.name === separator[i]).value;

        } else {
            result += mappingXSystemForRomanSystem.find(e => e.name === separator[i]).value;
        }

        return result + mappingXSystemForRomanSystem.find(e => e.name === separator[separator.length - 1]).value;
    }
}
