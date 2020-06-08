import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Modal from 'react-native-modal';

const url = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'

export default class GalleryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            top: 0,
            path: '',
            isModalVisible: false,
        }
    }

    componentDidMount = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            this.setState({data})
        } catch (e) {
            throw e
        }
    }

    clickPhoto(path) {
        this.setState({isModalVisible: true})
        this.setState({path: path})
    };

    close() {
        this.setState({isModalVisible: false})
    }

    render() {
        const {data} = this.state
        return (
            <View style={styles.wrap}>
                <Modal transparent={true}
                       isVisible={this.state.isModalVisible}>
                    <View style={styles.modal__content}>
                        <Image style={styles.fullPhoto} source={{uri: this.state.path}}/></View>
                    <View style={styles.close}>
                        <TouchableOpacity onPress={() => this.close()}>
                       <Image style={styles.closeIcon} source={require('../assets/close_icon.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <View style={styles.container}>
                    <ScrollView>
                        {data.map((item) =>
                            <TouchableOpacity onPress={() => this.clickPhoto(item.urls.raw)}>
                                <View style={styles.photoItem} key={item.id.toString()}>
                                    <Image style={styles.photoItem__photo} source={{uri: item.urls.raw}}/>
                                    <Text>{item.alt_description}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    </ScrollView>

                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    close: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    closeIcon: {
        width: 30,
        height: 30
    },
    modal: {
        position: 'relative',
        width: '100',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    modal__content: {
      marginRight: 'auto',
      marginLeft: 'auto',
    },

    container: {
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoItem__photo: {
        width: 200,
        height: 200
    },
    photoItem: {
        marginBottom: 20,
        width: 200,
    },
    fullPhoto: {
        width: 300,
        height: 300
    }

});
