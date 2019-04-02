import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

class B extends React.Component{

render(){
	return (
			<View style={styles.main}> 

				<TouchableOpacity onPress={ () => this.props.onPress(1) }
									style={ styles.Game }>
					 <Text style = {styles.text}>Game</Text>
				</TouchableOpacity>


				<TouchableOpacity onPress={ () => this.props.onPress(2) } 
								style={ styles.reset } >
					 <Image
						 source={ require('../../img/reset.png') }
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
		backgroundColor: 'black',
	},

	reset: {
		left:250,
	},

   text: {
   		fontSize:20,
   		justifyContent: 'flex-start',
      	color: 'white'
   },

   img: {
		height: 50,
		width: 50,
		resizeMode: "stretch",
	},

	Game: {
		top: 10,
		left: 15,
	},

});

export default B;
