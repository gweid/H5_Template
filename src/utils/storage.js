var windowStorage = (function(storage) {
    var obj = JSON.parse(storage)
    _updateStorage()
    return {
        get: get,
        set: set,
        getAll: getAll
    }

    function set(k, v) {
        obj[k] = v
        _updateStorage()
    }

    function get(k) {
        return obj[k]
    }

    function getAll() {
        return obj
    }

    function _updateStorage() {
        window.name = JSON.stringify(obj)
    }
})(window.name || '{}')

export default windowStorage
