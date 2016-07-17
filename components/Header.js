/**
 * Created by ljunb on 16/7/17.
 */
import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StatusBar,
    Dimensions
} from 'react-native';


export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                {this.props.backAction ?
                    <TouchableOpacity
                        style={styles.backItem}
                        onPress={this.props.backAction}
                    >
                        <View style={styles.angle}/>
                    </TouchableOpacity>
                    :
                    <View style={styles.backItem}/>
                }
                <Text style={{fontSize: 16}}>{this.props.title}</Text>
                <View style={styles.backItem}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('window').width,
        height: Platform.OS === 'ios' ? 64 : 50,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgb(242, 242, 242)',
    },

    backItem: {
        height: Platform.OS ? 44 : 50,
        width: Platform.OS ? 44 : 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    angle: {
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        width: 15,
        height: 15,
        borderColor: 'gray',
        transform: [{rotate: '45deg'}]
    }
});