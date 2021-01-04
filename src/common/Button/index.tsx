import {StyleSheet, Text, TouchableHighlight, View} from "react-native";

export function Button({
                    label,
                    onPress,
                    backgroundColor,
                }: {
    label: string;
    onPress: () => any;
    backgroundColor?: string;
}) {
    return (
        <TouchableHighlight
            accessible={true}
            accessibilityLabel={label}
            underlayColor={'rgba(0,0,0,0.5)'}
            style={styles.button}
            onPress={onPress}
        >
            <View
                style={[styles.buttonInner, !!backgroundColor && { backgroundColor }]}
            >
                <Text style={styles.buttonText}>{label}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 12,
    },
    buttonInner: {
        minHeight: 46,
        borderRadius: 10,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    enter: { height: 20 },
});