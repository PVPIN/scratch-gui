import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';
import classNames from 'classnames';

import Box from '../box/box.jsx';
import {STAGE_DISPLAY_SIZES} from '../../lib/layout-constants.js';
import SoundHeader from '../../containers/sound-header.jsx';
import Stage from '../../containers/stage.jsx';
import Loader from '../loader/loader.jsx';
import {getStageDimensions} from '../../lib/screen-utils.js';
import styles from './show-sound.css';

const ShowSoundComponent = function (props) {
    const {
        isFullScreen,
        isRtl,
        isRendererSupported,
        loading,
        stageSize,
        isColorPicking,
        vm
    } = props;
  
    const stageDimensions = getStageDimensions(stageSize, isFullScreen);
    const targets = props.vm.runtime.executableTargets;
    let blod = ''
    for (let t = targets.length - 1; t >= 0; t--) {
        const target = targets[t];
        const scripts = target.blocks.getScripts();
        for (let j = 0; j < scripts.length; j++) {
            const topBlockId = scripts[j];
            blod = target.blocks.blockToXML(topBlockId, '')
        }
    }

    return (
        <Box
            className={styles.showSound}
            dir={isRtl ? 'rtl' : 'ltr'}
        >
            <Box className={styles.stageMenuWrapper}>
                <SoundHeader
                    stageSize={stageSize}
                    vm={vm}
                />
            </Box>
            <Box className={styles.stageCanvasWrapper}
              style={{
                borderRadius: '15px',
                overflow: 'hidden',
                border: '1px solid #d7d8d7'
            }}
            >
                {
                    isRendererSupported ?
                    <Box
                            className={classNames({
                                [styles.stageWrapper]: !isFullScreen,
                                [styles.stageWrapperOverlay]: isFullScreen,
                                [styles.withColorPicker]: !isFullScreen && isColorPicking
                            })}
                            style={{
                                minHeight: stageDimensions.height,
                                minWidth: stageDimensions.width,
                                borderRadius: '15px'
                            }}
                        
                        > <div className={styles.blodSound} style={{height: window.screen.height -200 +'px'}}>
                                    {blod}
                                </div>
                        
                    </Box> :
                        null
                }
            </Box>
            {loading ? (
                <Loader isFullScreen={isFullScreen} />
            ) : null}
        </Box>
    );
};

ShowSoundComponent.propTypes = {
    isFullScreen: PropTypes.bool,
    isRendererSupported: PropTypes.bool.isRequired,
    isRtl: PropTypes.bool.isRequired,
    loading: PropTypes.bool,
    isColorPicking: PropTypes.bool,
    stageSize: PropTypes.oneOf(Object.keys(STAGE_DISPLAY_SIZES)).isRequired,
    vm: PropTypes.instanceOf(VM).isRequired
};

export default ShowSoundComponent;
