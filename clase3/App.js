
import { View } from 'react-native';
import Contador from './clase3/components/Contador';
import TarjetaUsuario from './clase3/components/TarjetaUsuario';
import EstilosBasicos from './clase3/components/EstilosBasicos';
import Home from './clase3/screens/Home';

export default function App() {

return <View style={{flex:1}}>
 <Contador />;
 <TarjetaUsuario nombre={"Lucía"} edad={28} />
 <TarjetaUsuario nombre={"francisco"} edad={12}/>
 <EstilosBasicos/>
 <Home/>
       </View>

}