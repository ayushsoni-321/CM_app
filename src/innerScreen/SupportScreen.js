import { StyleSheet, Text, View, Image, } from 'react-native'
import { TextInput } from 'react-native-paper';
import React, { useState } from 'react'
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Dropdown } from 'react-native-element-dropdown';


const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
];

const SupportScreen = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                   Subject
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={{ flex: 1, backgroundColor: "black" }}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../Assets/Images/char2.png')}
                    resizeMode="contain"
                />
                <Text style={{ textAlign: "center", fontSize: 17 }}>Please feel free to talk to us if{"\n"}you have any questions. We will{"\n"}endeavour to answer within 24 hours</Text>
                {renderLabel()}
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Real-time delivery tracking?' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                //   renderLeftIcon={() => (
                //     <AntDesign
                //       style={styles.icon}
                //       color={isFocus ? 'blue' : 'black'}
                //       name="Safety"
                //       size={20}
                //     />
                //   )}
                />
                <TextInput
                    mode="outlined"
                    multiline
                    numberOfLines={6}
                    placeholder="Enter Description"
                    outlineStyle={{ borderWidth: 1 }}

                    theme={{
                        roundness: 13,

                        colors: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                    }}
                    style={styles.lasttextinput}
                />
                <Text style={styles.buttonText}>Share</Text>
            </View>
        </View>
    )
}

export default SupportScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: responsiveWidth(5),
    },
    image: {
        height: "40%",
        width: "90%",
        // backgroundColor:"red",
        marginTop: 10,
        marginHorizontal: 20,
        marginVertical: 1
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#27AE60',
        justifyContent: 'center',
        marginHorizontal: responsiveWidth(7),
        padding: responsiveHeight(2),
        marginTop: responsiveHeight(7),
        borderRadius: responsiveWidth(4),
        fontSize: 18
    },
    lasttextinput: {
        width: responsiveWidth(91),
        height: responsiveHeight(13),
        alignSelf: 'center',
        backgroundColor: '#E8E8E8',
        fontSize: responsiveFontSize(2),
        marginTop: responsiveHeight(5),

    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginHorizontal:20,
        marginTop:20

    },
    icon: {
        marginRight: 5,
    },
    label: {
        // position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})