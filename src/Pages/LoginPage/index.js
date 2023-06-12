import { TextInput, SafeAreaView, View, Image} from "react-native";
import { Link } from "@react-navigation/native";
import styles from "./style";

export default function Login(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.viewImg}>
                <Image 
                    style={styles.logoImg}
                    source={{uri: 'https://img.freepik.com/vetores-premium/design-de-logotipo-de-jogos-de-rpg-dourado-de-efeito-de-texto-fantasia_278261-784.jpg?w=2000'}}
                />
            </View>
            <View style={styles.inputs}>
                <TextInput style={styles.inputEmail} placeholder='Email'/>
                <TextInput style={styles.inputSenha} placeholder='Senha'/>
            </View>
            <View style={styles.viewConfirmar}>
                <Link style={styles.btnConfirmar} to={{screen: "RGPlist"}}>Confirmar</Link>
            </View>
            <View style={styles.viewLink}>
                <Link style={styles.link} to={{screen: "Register"}}>Registre-se...</Link>
                <Link style={styles.link} to={{screen: "ForgotPassword"}}>Esqueci a senha...</Link>
            </View>
        </SafeAreaView>
    )
}