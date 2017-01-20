import { StyleSheet, Dimensions } from 'react-native';

let {height: screenHeight, width: screenWidth} = Dimensions.get('window');

export const sty = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA'
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
        borderRadius: 6,
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
    diaryWeather: {
        position: 'absolute',
        right: 10,
        top: 10
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
    },
    writeDiary: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    writeTxt: {
        margin: 20,
        color: '#285268',
        fontSize: 16
    },
    writeInput: {
        fontSize: 16,
        padding: 10,
        backgroundColor: '#fff',
        height: 200
    },
    writeSubmit: {
        // position: 'absolute',
        left: 0,
        // bottom: 0,
        height: 50,
        backgroundColor: '#8AABBC',
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'center'
    },
    commentInfo: {
        flex: 1
    },
    commentDate: {
        position: 'absolute',
        fontSize: 13,
        color: '#999',
        right: 0,
        top: 0
    },
    commentItem: {
        flexDirection: 'row',
        padding: 10
    },
    commentMain: {
        backgroundColor: '#fff',
        padding: 10,
        flex: 1
    },
    comment: {
        paddingTop: 10
    },
    commentAvatar: {
        height: 40,
        width: 40,
        marginRight: 10,
        borderRadius: 6,
        backgroundColor: '#eee'
    },
    commentReply: {
        backgroundColor: '#DFE8ED',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    login: {
        paddingTop: 100,
        alignItems: 'center'
    },
    loginBox: {
        margin: 40,
        width: screenWidth - 80,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 4,
        justifyContent: 'center'
    },
    loginTxt: {
        height: 50,
        backgroundColor: '#DFE8ED',
        borderRadius: 4,
        marginBottom: 10,
        paddingLeft: 50,
        paddingRight: 10
    },
    loginButton: {
        height: 50,
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: '#8AABBC',
        justifyContent: 'center',
        marginTop: 30
    },
    homeLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    homeLoginBtn: {
        height: 50,
        width: 120,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8AABBC'
    }
});
