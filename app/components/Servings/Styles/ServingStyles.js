const servingStyles = {
    button: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f4e609",
        width: "100%",
        justifyContent: "center",
    },
    titleContainer: {
        borderBottomColor: "#cdcdcd",
        borderBottomWidth: 2
    },
    title: {
        padding: 5,
        marginVertical: 5,
        color: "black",
        alignSelf: "center",
        fontSize: 26,
        fontFamily: "Verdana",
    },
    customizeContainer: {
        width: "90%",
        height: "85%",
        marginHorizontal: "5%",
        marginVertical: "10%",
        padding: 5,
        backgroundColor: "#f5f5f5",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    picker: {
        borderColor: "#2ed165",
        borderWidth: 1,
        marginTop: "5%"
    },
    pickerTitle: {
        padding: 5,
        fontSize: 16,
        fontFamily: "Verdana"
    },
    priceContainer: {
        alignItems: "center",
        padding: 10,
        marginTop: "8%"
    },
    price: {
        fontSize: 20,
        fontFamily: "Verdana"
    },
    mainOptionsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        alignItems: "center",
        width:"100%",
        marginTop: "8%"
    },
    dipContainer: {
        paddingTop: 5,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center"
    },
    addContainer: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: "#2ed165"
    },
    addButton: {
        fontFamily: "Verdana",
        fontSize: 16
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: "contain"
      },
    itemsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignSelf: "center",
        alignItems: "center",
        width:"100%",
        marginTop: "8%"
    },
    drinkItem : {
        width: "32%",
        height: 90,
        marginTop: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    imgContainer: {
        
    },
    img: {
        width: undefined,
        height: 180,
        resizeMode: "contain"
    }
};


export default servingStyles;