import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';
import {STAGE_DISPLAY_SIZES} from '../lib/layout-constants.js';
import ShowSoundComponent from '../components/show-sound/show-sound.jsx';

const ShowSound = props => <ShowSoundComponent {...props} />;

ShowSound.propTypes = {
    isRendererSupported: PropTypes.bool.isRequired,
    stageSize: PropTypes.oneOf(Object.keys(STAGE_DISPLAY_SIZES)).isRequired,
    vm: PropTypes.instanceOf(VM).isRequired
};

export default ShowSound;
