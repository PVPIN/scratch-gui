import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './toggle-button.css';
import on from './on.png';
import off from './off.png';
class ToggleButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
          ... props.data
        };
      }
      touchStart() {
        this.setState({ bottom:!this.state.bottom });
      }
      render () {
        return (
          <div className={styles.toggleButton} onClick={this.touchStart.bind(this)}>
            <input type="checkbox" id={styles.toggleButton} name="switch"/>
            <label htmlFor="toggleButton" className={styles.buttonLabel}>
              {this.state.bottom ? 
                (<React.Fragment><span className={styles.circle}></span>
                <span className={classNames(styles.on,styles.text)}>舞台</span></React.Fragment>)
              :
               ( <React.Fragment>
                 <span className={classNames(styles.circle,styles.floatLeft)}></span>
                 <span className={classNames(styles.off,styles.text)}>代码</span>
                </React.Fragment>)
              }
            </label> 
        </div>
        );
      }
}

export default ToggleButton