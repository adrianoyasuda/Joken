import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';


 class PainelSelecao extends React.Component {

 	constructor(props) {
 	  super(props);
 	
 	  this.state = {};
 	}


 	onPress(val) {

 		alert(val);

 		switch(val) {

 			case 1:
 					break;

 		}
 	}
 	render() {
 		return(
 			<View style={ styles.main }>
				<TouchableOpacity onPress={ () => this.props.onPress(0) }>

					 <Image
						 source={ require('../../img/pedra_vs.png') }
						 style={ styles.img }
					 />
				</TouchableOpacity>

				<TouchableOpacity onPress={ () => this.props.onPress(4) }>
					 <Image
						 source={ require('../../img/spock_vs.png') }
						 style={ styles.img }
					 />
				</TouchableOpacity>

				<TouchableOpacity onPress={ () => this.props.onPress(2) }>
					 <Image
						 source={ require('../../img/tesoura_vs.png') }
						 style={ styles.img }
					 />
				</TouchableOpacity>

				<TouchableOpacity onPress={ () => this.props.onPress(3) }>
					 <Image
						 source={ require('../../img/lagarto_vs.png') }
						 style={ styles.img }
					 />
				</TouchableOpacity>

				<TouchableOpacity onPress={ () => this.props.onPress(1) }>
					 <Image
						 source={ require('../../img/papel_vs.png') }
						 style={ styles.img }
					 />
				</TouchableOpacity>
 			</View>
 		);
 	}
 }

 const styles = StyleSheet.create({

	main: {
	    flexDirection: 'row',
	    left: 4,
	    padding: 6,
	},

	img:{
		width: 64,
		height: 64,
		margin: 2,
	},

});

 export default PainelSelecao;