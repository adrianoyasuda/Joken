
import React from 'react';
import { StyleSheet, View, Button, ScrollView, Alert } from 'react-native';


import H from './src/components/H';
import B from './src/components/B';
import PainelSelecao from './src/components/PainelSelecao';
import VSbox from './src/components/VSbox';


export default class App extends React.Component {
  
  constructor(props) {
    
    super(props);
  
    this.state = {
      pts: [0, 0],
    };
  }

toogleHeader(){
  	if(this.state.header_toogle == 0){
  		this.setState({
  			header_toogle : 1,
  		});
  	}
  	else{
  		this.setState({
  			header_toogle : 0,
  		});
  	}
}

 onPressZero(val) {

    if(val == 1) {
      this.toogleHeader();
    }
    else {
    	aux[0] = 0;
    	aux[1] = 0;
    	this.setState({
      		pts : aux,
    	});
    }
 }

 changeScoreP() {

    aux = this.state.pts;
    aux[0] = aux[0] + 1;

    this.setState({
      pts : aux,
    });
 }

 changeScoreCPU() {

    aux = this.state.pts;
    aux[1] = aux[1] + 1;

    this.setState({
      pts : aux,
    });
 }



 rand(val){
	var a = Math.floor((Math.random() * 4) + 0);
		this.setState({
			rando : a,
		});
		this.setState({
			x : val,
		});

		if(val != a){

  		if(val==2 && a==1){
  			this.changeScoreP();
  		}
  		else if(val==1 && a==0){
  			this.changeScoreP();
  		}
  		else if(val==0 && a==3){
  			this.changeScoreP();
  		}
  		else if(val==3 && a==4){
  			this.changeScoreP();
  		}
  		else if(val==4 && a==2){
  			this.changeScoreP();
  		}
  		else if(val==2 && a==3){
  			this.changeScoreP();
  		}
  		else if(val==3 && a==1){
  			this.changeScoreP();
  		}
  		else if(val==1 && a==4){
  			this.changeScoreP();
  		}
  		else if(val==4 && a==0){
  			this.changeScoreP();
  		}
  		else if(val==0 && a==2){
  			this.changeScoreP();
  		}

  		else{
			this.changeScoreCPU();
  		}
		}
}

  render() {
    return (
      
      <ScrollView style={styles.main}>
        
        <B onPress={(val) => this.onPressZero(val)}/>
        <H val={this.state.header_toogle}/>
        <PainelSelecao onPress ={(val) => this.rand(val)}/>
        <VSbox val={this.state.rando} val2={this.state.x} pts={this.state.pts} />
      </ScrollView>      
    );
  }
}

const styles = StyleSheet.create({

  main: {
    backgroundColor: '#333',
    marginTop: 24,
  },
});
