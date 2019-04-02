import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const H = (props) =>{

	if(props.val == 0){
		return (
			<View style={styles.main}> 
	          <Image
	            source={ require('../../img/regra.png') }
	            style={ styles.img }
	          />
	        </View>		
	    );
	}
		return(
				<View style={styles.main}> 
		          <Image
		            source={ require('../../img/header.jpg') }
		            style={ styles.img }
		          />
		        </View>	
		);
}

const styles = StyleSheet.create({

	main: {
	    flex: 1,
	    flexDirection: 'row',
	    padding: 8,
	    margin: 2,
	  },

	img: {
		height: 250,
		flex: 1, 
		resizeMode: "stretch",
	},
});

export default H;
