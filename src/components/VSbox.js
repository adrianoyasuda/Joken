import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const VSbox = (props) =>{


img1 = require('../../img/bar_versus2.png');
cpu = require('../../img/pedra_vs.png');
player = require('../../img/spock_vs.png');

if(props.val == 0){cpu = require('../../img/pedra_vs.png');}
if(props.val == 1){cpu = require('../../img/papel_vs.png');}
if(props.val == 2){cpu = require('../../img/tesoura_vs.png');}
if(props.val == 3){cpu = require('../../img/lagarto_vs.png');}
if(props.val == 4){cpu = require('../../img/spock_vs.png');}

if(props.val2 == 0){player = require('../../img/pedra_vs.png');}
if(props.val2 == 1){player = require('../../img/papel_vs.png');}
if(props.val2 == 2){player = require('../../img/tesoura_vs.png');}
if(props.val2 == 3){player = require('../../img/lagarto_vs.png');}
if(props.val2 == 4){player = require('../../img/spock_vs.png');}

P1 = props.pts[0];
CPU = props.pts[1];

return (
		<View style={styles.main}> 
			 <Image
				 source={ img1 }
				 style={ styles.img }
			 />

			 <Image
				 source={ player }
				 style={ styles.p1 }
			 />

			 <Image
				 source={ require('../../img/versus.png') }
				 style={ styles.vs }
			 />

			 <Image
				 source={ cpu }
				 style={ styles.p2 }
			 />

			 <Text style = {styles.score1}>{P1}</Text>
			 <Text style = {styles.score2}>{CPU}</Text>


        </View>		
	  );
}
const styles = StyleSheet.create({

	main: {
		backgroundColor: 'white',
		height: 195,
	    margin: 10,
	},

   img: {
   		top: 3,
   		width: 340,
		height: 50,
	},

	p1:{
		top: 20,
		left: 30,
		width: 64,
		height: 64,
	},

	vs:{
		bottom: 40,
		left: 130,
		width: 80,
		height: 60,
	},

	p2:{
		bottom: 105,
		left: 250,
		width: 64,
		height: 64,
	},

	score1: {
		textAlign: 'center',
		backgroundColor:'#333',
		bottom: 90,
		left: 20,
   		fontSize:20,
   		borderRadius: 50,
   		margin: 5,
   		width: 80,
      	color: 'white'
   },
   score2:{
   		textAlign: 'center',
   		backgroundColor:'#333',
		bottom: 127,
		left: 240,
   		fontSize:20,
   		borderRadius: 50,
   		margin: 5,
   		width: 80,
      	color: 'white'
   },
});

export default VSbox;
