/**
 * Created by ljunb on 16/7/17.
 */
import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

export default class AiMeiCheckBox extends React.Component {

    /**
     * 类型检查
     */
    static propTypes = {
        // 是否选中: 必要参数, 默认为false
        checked: React.PropTypes.bool.isRequired,
        // 大小, 可选参数, 默认为20
        size: React.PropTypes.number,
        // 选中后背景色, 可选参数, 默认为orange
        checkedBackground: React.PropTypes.string,
        // √颜色, 可选参数, 默认白色
        checkedColor: React.PropTypes.string,
        // √宽度, 可选参数, 默认0.5; 默认高度为大小一半, 宽度为大小1/4
        checkedWidth: React.PropTypes.number,
    };

    constructor(props) {
        super(props);

        this.state = this.initState(props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(this.initState(nextProps));
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.checked !== this.props.checked) return true;

        return false;
    }

    /**
     * 初始化state
     */
    initState(props) {

        let checkedBackground = [styles.checkedBackground];
        let unCheckedBackground = [styles.unCheckedBackground];
        let checked = [];

        if (props.checked) {
            checkedBackground = [
                styles.checkedBackground,
                props.checkedBackground && {backgroundColor: props.checkedBackground},
                props.size && {width: props.size, height: props.size, borderRadius: props.size * .5},
            ];

            checked = [
                styles.checked,
                props.checkedColor && {borderColor: props.checkedColor},
                props.size && {height: props.size * .5, width: props.size * .5 * .5},
                props.checkedWidth && {borderBottomWidth: props.checkedWidth, borderRightWidth: props.checkedWidth}
            ];
        } else {
            unCheckedBackground = [
                styles.unCheckedBackground,
                props.size && {width: props.size, height: props.size, borderRadius: props.size * .5}
            ]
        }

        return {
            containerStyle: props.checked ? checkedBackground : unCheckedBackground,
            checkedStyle: checked
        }
    }

    render() {

        let containerStyle = this.state.containerStyle;
        let checkedStyle = this.state.checkedStyle;

        return (
            <View style={[this.props.style && this.props.style, {justifyContent: 'center', alignItems: 'center'}]}>
                <View style={containerStyle}>
                    <View style={checkedStyle}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    checkedBackground: {
        width: 20,
        height: 20,
        backgroundColor: 'orange',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    unCheckedBackground: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
    },

    checked: {
        borderColor: 'white',
        borderBottomWidth: 0.5,
        borderRightWidth: 0.5,
        width: 5,
        height: 10,
        transform: [{rotate: '45deg'}]
    },
})