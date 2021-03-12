const servingStyles = {
    button: {
        height: "8%",
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
        borderColor: "#f4e609",
        borderWidth: 1,
        marginTop: "5%"
    },
    pickerText: {
        paddingHorizontal: 8,
        paddingTop: 5
    },
    priceContainer: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        paddingHorizontal:10
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
        marginTop: "5%"
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
        marginTop: "5%"
    },
    drinkItem : {
        width: "32%",
        height: 90,
        marginTop: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    descriptionContainer: {
        marginTop: "5%",
    },
    descriptionTitle: {
        fontSize: 18,
        fontFamily: "Verdana"
    },
    description: {
        fontSize: 15,
        marginTop: 3
    },
    ammountContainer: {
        flexDirection: "row",
    },
    ammountChangeButton: {
        paddingHorizontal: 10
    },
    ammountText: {
        fontSize: 20
    },
    promptContainer: {
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center"
    },
    bottomComponents: {
        marginTop: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderTopColor: "#cdcdcd",
        paddingVertical: 10
    },
    priceArea: {
        marginBottom: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
    }
};


export default servingStyles;