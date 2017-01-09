import { StyleSheet, Dimensions } from 'react-native';

let {height: screenHeight, width: screenWidth} = Dimensions.get('window');

export const sty = StyleSheet.create({
    container: {
        flex: 1
    },
    ft16: {
        fontSize: 16
    },
    ft14: {
        fontSize: 14
    },
    header: {
        height: 65,
        paddingTop: 35,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    headerNav: {
        flex: 1,
        alignItems: 'center'
    },
    headerTxt: {
        flex: 1,
        color: '#285268',
        fontSize: 16
    },
    headerActiveView: {
        borderBottomWidth: 2,
        borderBottomColor: '#8AABBC',
        paddingHorizontal: 5
    },
    diary: {
        backgroundColor: '#FFF',
        marginHorizontal: 10,
        marginTop: 10
    },
    diaryHead: {
        padding: 10,
        flexDirection: 'row'
    },
    diaryAvatar: {
        height: 40,
        width: 40,
        marginRight: 20,
        borderRadius: 20,
        backgroundColor: '#eee'
    },
    diaryName: {
        fontSize: 17,
        color: '#285268'
    },
    diaryDate: {
        fontSize: 13,
        color: '#999'
    },
    diaryMain: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 20,
    },
    diaryInfo: {
        flexDirection: 'row',
        backgroundColor: 'rgba(234,238,241, .35)',
        justifyContent: 'flex-end',
        height: 24,
        alignItems: 'center'
    },
    diaryInfoItem: {
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    diaryInfoTxt: {
        fontSize: 13,
        color: '#8AABBC',
        paddingLeft: 5
    },
    userHead: {
        height: 135,
        paddingTop: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
        marginBottom: -15,
        zIndex: 10
    },
    userAvatar: {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    userName: {
        fontSize: 16,
        color: '#285268',
        lineHeight: 25
    },
    userItem: {
        width: screenWidth / 2 - 15,
        backgroundColor: '#fff',
        margin: 5,
        padding: 10,
        height: 90,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userListImg: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 10
    },
    userList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 10,
        paddingHorizontal: 5
    }
});
