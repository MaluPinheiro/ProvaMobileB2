import { TextInput, SafeAreaView, View, Image} from "react-native";
import styles from "./style"; 
import { Link } from "@react-navigation/native";

export default function Register(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.viewImg}>
                <Image 
                    style={styles.logoImg}
                    source={{uri: 'https://img.freepik.com/vetores-premium/design-de-logotipo-de-jogos-de-rpg-dourado-de-efeito-de-texto-fantasia_278261-784.jpg?w=2000'}}
                />
            </View>
            <View style={styles.inputs}>
                <TextInput style={styles.inputNome} placeholder='Nome'/>
                <TextInput style={styles.inputSobrenome} placeholder='Sobrenome'/>
                <TextInput style={styles.inputEmail} placeholder='Email'/>
                <TextInput style={styles.inputSenha} placeholder='Senha'/>
                <TextInput style={styles.inputConfirmarSenha} placeholder='Confirmar Senha'/>
            </View>
            <View style={styles.viewConfirmar}>
                <Link style={styles.btnConfirmar} to={{screen: "MoviesPage"}}>Confirmar</Link>
            </View>
            <View style={styles.viewLink}>
                <Link style={styles.link} to={{screen: "Login"}}>Volte ao login...</Link>
            </View>
        </SafeAreaView>
    )
}