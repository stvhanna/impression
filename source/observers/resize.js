/**
 * @since 2016-10-30 14:24
 * @author vivaxy
 */

import presets from '../lib/presets';
import * as observers from '../configs/observers';

const RESIZE = 'resize';

export default (container) => {
    let attached = false;
    let _callback;

    const on = (callback) => {
        if (attached) {
            return false;
        } else {
            attached = true;
            _callback = () => {
                return callback(observers.RESIZE);
            };
            presets(container);
            container.addEventListener(RESIZE, _callback);
            return true;
        }
    };

    const off = () => {
        if (attached) {
            container.removeEventListener(RESIZE, _callback);
            attached = false;
            return true;
        } else {
            return false;
        }
    };

    return {
        on,
        off,
    };
};
