

class SlotLock {
    constructor(slot) {
        this._slot = slot;
        this._caches = [];
    }
    run (callback) {
        const caches = this._caches;
        return new Promise((resolve, reject) => {
            if(this._slot < 1) {
                caches.push({resolve, reject, callback});
                return;
             }
        });
        this._slot--;
        function execute (c, res, rej) { c().then(r => {res(r); next();}).catch(e => {rej(e); next();}); }
        function next () {
            let cache = caches.shift();
            if(Object.is(cache, undefined)) { this._slot++; return; }
            execute(cache.callback, cache.resolve, cache.reject);
        }
        execute(callback, resolve, reject);
    }
};
