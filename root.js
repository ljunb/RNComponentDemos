/**
 * Created by ljunb on 16/7/17.
 */
import React from 'react';
import {
    Text,
    View,
    ListView,
    StyleSheet,
    Navigator,
    TouchableOpacity
} from 'react-native';
import Header from './components/Header';
import CheckBoxDemo from './page/CheckBoxDemo';


export default class Root extends React.Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <Navigator
                    initialRoute={{name: 'ComponentList', component: ComponentList}}
                    configureScene={()=>{
                        return  Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return (
                            <Component navigator = {navigator} route = {route} {...route.passProps} />
                        )
                    }}
                />
            </View>
        )
    }
}

const components = [
    {name: 'CheckBox', page: CheckBoxDemo}
];

class ComponentList extends React.Component {

    constructor(props) {
        super(props);

        this.renderRow = this.renderRow.bind(this);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        }
    }

    renderRow(component) {
        return (
            <TouchableOpacity
                activeOpacity={0.75}
                style={styles.row}
                onPress={()=>{
                    this.props.navigator.push({
                        name: component.name,
                        component: component.page
                    })
                }}
            >
                <Text>{component.name}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View>
                <Header title="RNComponentDemos" />
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(components)}
                    renderRow={this.renderRow}
                    enableEmptySections={true}
                    bounces={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        justifyContent: 'center',
        height: 44,
        paddingLeft: 15,
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5
    }
})