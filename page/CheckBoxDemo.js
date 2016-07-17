/**
 * Created by ljunb on 16/7/17.
 */
import React from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import AiMeiCheckBox from '../components/AiMeiCheckBox';
import Header from '../components/Header';

export default class CheckBoxDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isChecked: false
        }
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Header title="CheckBoxDemo" backAction={()=>this.props.navigator.pop()}/>
                <TouchableOpacity
                    activeOpacity={0.85}
                    style={{marginTop: 20}}
                    onPress={()=>this.setState({isChecked: !this.state.isChecked})}
                >
                    <AiMeiCheckBox checked={this.state.isChecked}/>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.85}
                    style={{marginTop: 20}}
                    onPress={()=>this.setState({isChecked: !this.state.isChecked})}
                >
                    <AiMeiCheckBox
                        checked={this.state.isChecked}
                        size={30}
                        checkedWidth={2}
                        checkedColor="red"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.85}
                    style={{marginTop: 20}}
                    onPress={()=>this.setState({isChecked: !this.state.isChecked})}
                >
                    <AiMeiCheckBox 
                        style={{alignSelf: 'flex-start', marginLeft: 20}} 
                        checked={this.state.isChecked} 
                        checkedBackground="#059CD4"
                    />
                </TouchableOpacity>
            </View>
        )
    }
}