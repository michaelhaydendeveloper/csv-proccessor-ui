import {Component} from "react";
import {
    Text,
    TouchableHighlight,
    View,
    StyleSheet,
    Modal
} from "react-native";
import Default from "./intl/default";


class SplashScreenModule extends Component<any, any> {
    state = {
        modalVisible: false
    };

    setModalVisible = (visible: boolean) => {
        this.setState({ modalVisible: visible });
    }

    onRequestCloseHandler = () => {
        this.setState({ modalVisible: false });
    }

    render() {
        const { modalVisible } = this.state;
        const defaultIntl = new Default();
        const welcomeTitle = defaultIntl.getSectionMessage('welcomeTitle');
        const welcomeMessage = defaultIntl.getSectionMessage('welcomeMessage');
        const hideModalButtonLabel = defaultIntl.getSectionMessage('hideModalButtonLabel');
        const showModalButtonLabel = defaultIntl.getSectionMessage('showModalButtonLabel');
        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={this.onRequestCloseHandler}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.welcome}>{welcomeTitle}</Text>
                            <Text style={styles.instruction}>
                                {welcomeMessage}
                            </Text>
                            <TouchableHighlight
                                style={styles.openButton}
                                onPress={() => {
                                    this.setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>{hideModalButtonLabel}</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <TouchableHighlight
                    style={styles.openButton}
                    onPress={() => {
                        this.setModalVisible(true);
                    }}
                >
                    <Text style={styles.textStyle}>{showModalButtonLabel}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#f5fcff',
        justifyContent: 'center',
        padding: 10,
    },
    instruction: {
        color: '#333333',
        marginBottom: 5,
        textAlign: 'center',
    },
    welcome: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        padding: 10,
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        padding: 10,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default SplashScreenModule;