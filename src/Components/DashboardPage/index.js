import { Text, View, StyleSheet, Button, Image } from "react-native";

export default function Cartao(props){
    return(
        <View style={styles.container}>
            <View style ={styles.viewImg}>
                <Image source={{
                    uri: props.cartao.imgUrl
                }} style={styles.img}/>
            </View>
            <View style={styles.viewData}>
                <Text style={styles.classe}>Classe: {props.cartao.classe}</Text>
                <Text style={styles.nome}>Nome do personagem: {props.cartao.nome}</Text>
                <Text style={styles.descricao}>Descrição: </Text>
                <Text style={styles.ataque}>Ataque: {props.cartao.ataque}</Text>
                <Text style={styles.defesa}>Defesa: {props.cartao.defesa}</Text>
                <Button style={styles.btn} title="Trocar"/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '70%',
        flexDirection: 'row',
        padding: 10,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'gray',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#3385ff',
    },
    viewImg: {
        width: '30%',
        height: 150,
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    viewData:{
        padding: 10,
        width: '70%',
        height: '100%',
        borderRadius: 10
    },
    classe:{
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5
    },
    nome: {
        fontSize: 18,
        color: 'white',
        marginBottom: 5
    },
    ataque: {
        fontSize: 14,
        color: 'white',
        marginBottom: 5
    },
    defesa: {
        fontSize: 14,
        color: 'white',
        marginBottom: 5
    },
    descricao:{
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 2
    },
    btn: {
        padding: 10
    }
}); 