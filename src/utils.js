function idToQualifiedName(id) {
    return id.replace(/~/g, '/');
}

function qualifiedNameToId(name) {
    return name.replace(/\//g, '~');
}

const VALUE_EXTRACT_MAP = {
    'UINT32': (value) => value.uint32Value,
    'INT32': (value) => value.int32Value,
    'SINT32': (value) => value.sint32Value,
    'UINT16': (value) => value.uint16Value,
    'INT16': (value) => value.int16Value,
    'FLOAT': (value) => value.floatValue,
    'DOUBLE': (value) => value.doubleValue,
    'STRING': (value) => value.stringValue,
    'ENUMERATED': (value) => value.stringValue,
    'TIMESTAMP': (value) => value.stringValue,
    'BOOLEAN': (value) => value.booleanValue
};
function getValue(value) {
    return VALUE_EXTRACT_MAP[value.type](value);
}

export {
    idToQualifiedName,
    qualifiedNameToId,
    getValue
};
