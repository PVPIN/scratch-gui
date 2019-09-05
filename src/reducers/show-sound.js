const SOUND_UPDATE = 'scratch-gui/asset-drag/SOUND_UPDATE';

const initialState = true;

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;

    switch (action.type) {
    case SOUND_UPDATE:
        return action.showSound;
    default:
        return state;
    }
};

const updateShowSound  = showSound => {
    return {
        type: SOUND_UPDATE,
        showSound: showSound
    }
};

export {
    reducer as default,
    initialState as assetShowSoundState,
    updateShowSound
};
