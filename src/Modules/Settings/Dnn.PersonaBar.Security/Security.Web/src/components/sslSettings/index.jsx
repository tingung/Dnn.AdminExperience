import React, {Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
    pagination as PaginationActions,
    security as SecurityActions
} from "../../actions";
import InputGroup from "dnn-input-group";
import SingleLineInput from "dnn-single-line-input";
import Dropdown from "dnn-dropdown";
import Switch from "dnn-switch";
import Label from "dnn-label";
import Button from "dnn-button";
import Tooltip from "dnn-tooltip";
import "./style.less";
import util from "../../utils";
import resx from "../../resources";
import styles from "./style.less";

class SslSettingsPanelBody extends Component {
    constructor() {
        super();
        this.state = {
            sslSettings: undefined
        };
    }

    componentWillMount() {
        const {props} = this;
        if (props.sslSettings) {
            this.setState({
                sslSettings: props.sslSettings
            });
            return;
        }
        props.dispatch(SecurityActions.getSslSettings((data) => {
            let sslSettings = Object.assign({}, data.Results.Settings);
            this.setState({
                sslSettings
            });
        }));
    }

    onSettingChange(key, event) {
        const {state, props} = this;
        let sslSettings = Object.assign({}, state.sslSettings);
        sslSettings[key] = typeof (event) === "object" ? event.target.value : event;
        this.setState({
            sslSettings: sslSettings
        });
        props.dispatch(SecurityActions.sslSettingsClientModified(sslSettings));
    }

    onUpdate(event) {
        event.preventDefault();
        const {props, state} = this;

        props.dispatch(SecurityActions.updateSslSettings(state.sslSettings, (data) => {
            util.utilities.notify(resx.get("SslSettingsUpdateSuccess"));
        }, (error) => {
            util.utilities.notifyError(resx.get("SslSettingsError"));
        }));
    }

    onCancel(event) {
        const {props, state} = this;
        util.utilities.confirm(resx.get("SslSettingsRestoreWarning"), resx.get("Yes"), resx.get("No"), () => {
            props.dispatch(SecurityActions.getSslSettings((data) => {
                let sslSettings = Object.assign({}, data.Results.Settings);
                this.setState({
                    sslSettings
                });
            }));
        });
    }

    /* eslint-disable react/no-danger */
    render() {
        const {props, state} = this;
        if (state.sslSettings) {
            return (
                <div className={styles.sslSettings}>
                    <InputGroup>
                        <div className="sslSettings-row_switch">
                            <Label
                                labelType="inline"
                                tooltipMessage={resx.get("plSSLEnabled.Help") }
                                label={resx.get("plSSLEnabled") }
                                />
                            <Switch
                                labelHidden={true}
                                value={state.sslSettings.SSLEnabled }
                                onChange={this.onSettingChange.bind(this, "SSLEnabled") }
                                />
                        </div>
                    </InputGroup>
                    <InputGroup>
                        <div className="sslSettings-row_switch">
                            <Label
                                labelType="inline"
                                tooltipMessage={resx.get("plSSLEnforced.Help") }
                                label={resx.get("plSSLEnforced") }
                                />
                            <Switch
                                labelHidden={true}
                                value={state.sslSettings.SSLEnforced }
                                onChange={this.onSettingChange.bind(this, "SSLEnforced") }
                                />
                        </div>
                    </InputGroup>
                    <InputGroup>
                        <Label
                            tooltipMessage={resx.get("plSSLURL.Help") }
                            label={resx.get("plSSLURL") }
                            />
                        <SingleLineInput
                            value={state.sslSettings.SSLURL}
                            onChange={this.onSettingChange.bind(this, "SSLURL") }
                            />
                    </InputGroup>
                    <InputGroup>
                        <Label
                            tooltipMessage={resx.get("plSTDURL.Help") }
                            label={resx.get("plSTDURL") }
                            />
                        <SingleLineInput
                            value={state.sslSettings.STDURL}
                            onChange={this.onSettingChange.bind(this, "STDURL") }
                            />
                    </InputGroup>
                    {state.sslSettings.SSLOffloadHeader != undefined &&
                        <InputGroup>
                            <Label
                                tooltipMessage={resx.get("plSSLOffload.Help") }
                                label={resx.get("plSSLOffload") }
                                extra={
                                <Tooltip
                                    messages={[resx.get("GlobalSetting")]}
                                    type="global"
                                    style={{ float: "left", position: "static" }}
                                    />}
                                />
                            <SingleLineInput
                                value={state.sslSettings.SSLOffloadHeader}
                                onChange={this.onSettingChange.bind(this, "SSLOffloadHeader") }
                                />
                        </InputGroup>
                    }
                    <div className="buttons-box">
                        <Button
                            disabled={!this.props.sslSettingsClientModified}
                            type="secondary"
                            onClick={this.onCancel.bind(this) }>
                            {resx.get("Cancel") }
                        </Button>
                        <Button
                            disabled={!this.props.sslSettingsClientModified}
                            type="primary"
                            onClick={this.onUpdate.bind(this) }>
                            {resx.get("Save") }
                        </Button>
                    </div>
                </div>
            );
        }
        else return <div/>;
    }
}

SslSettingsPanelBody.propTypes = {
    dispatch: PropTypes.func.isRequired,
    tabIndex: PropTypes.number,
    sslSettings: PropTypes.object,
    sslSettingsClientModified: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        tabIndex: state.pagination.tabIndex,
        sslSettings: state.security.sslSettings,
        sslSettingsClientModified: state.security.sslSettingsClientModified
    };
}

export default connect(mapStateToProps)(SslSettingsPanelBody);